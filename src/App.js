import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import NavBar from "./navbar/NavBar";
import { Route, Switch } from "react-router-dom";
import Murals from "./murals/Murals";
import MuralSuggest from "./murals/MuralSuggest";
import AdminMurals from "./murals/AdminMurals";
import SignupForm from "./SignupForm";
import sfMuralsApi from "./api";
import LoginForm from "./LogInForm";
import ProfileEditForm from "./Profile";
import jwt from "jsonwebtoken";
import CurrentUserContext from "./CurrentUserContext";
import useLocalStorage from "./hooks/useLocalStorage";
import "bootstrap/dist/css/bootstrap.min.css";
import { user } from "pg/lib/defaults";


export const TOKEN_STORAGE_ID = "sfMurals-token";


function App() {

  const [currentUser, setCurrentUser] = useState("");
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [suggestedMurals, setSuggestedMurals] = useState([]);
  const [murals, setMurals] = useState([])
  const [errors, setErrors] = useState({})


  useEffect(() => {
    if (token && token.token) {
      let info = jwt.decode(token.token)
      sfMuralsApi.token = token.token
      getUser(info.username);


    }

  }
    , [token]);

  async function register(values) {
    try {
      let new_token = await sfMuralsApi.register(values);
      setToken(new_token)
      return null

    } catch (error) {

      return error



    }

  }
  async function login(values) {
    let res = await sfMuralsApi.login(values);
    setToken(res)

  }
  async function getUser(username) {
    let user = await sfMuralsApi.getUser(username);
    setCurrentUser(user)
  }

  function logout() {

    setCurrentUser(null);
    setToken(null);

  }
  async function suggest(values) {
    await sfMuralsApi.suggest(values);
  }

  useEffect(() => {

    async function getSuggestedMurals() {
      try {
        let murals = await sfMuralsApi.getSuggestedMurals();
        setSuggestedMurals(murals);
      } catch (error) {
        console.log(error)

      }
    }
    getSuggestedMurals();
  }, [token]);


  async function deny(id) {
    await sfMuralsApi.deleteSuggested(id)
    let newMurals = await sfMuralsApi.getSuggestedMurals();
    setSuggestedMurals(newMurals)
  }

  async function approve(values) {
    await sfMuralsApi.approve(values);
    await sfMuralsApi.deleteSuggested(values.id)
    let newMurals = await sfMuralsApi.getSuggestedMurals();
    setSuggestedMurals(newMurals)
  }





  return (
    <div className="App">
      <BrowserRouter>
        <CurrentUserContext.Provider value={{ currentUser }}>
          <NavBar logout={logout} suggestedMurals={suggestedMurals} />
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/murals">
                <Murals values={{ murals, setMurals }} />
              </Route>
              <Route exact path="/profile">
                <ProfileEditForm values={{ setCurrentUser }} />
              </Route>
              <Route exact path="/signup">
                <SignupForm register={register} errors={errors} setErrors={setErrors} />
              </Route>
              <Route exact path="/muralSuggest">
                <MuralSuggest suggest={suggest} />
              </Route>
              <Route exact path="/login">
                <LoginForm login={login} />
              </Route>
              <Route exact path="/adminMurals" >
                <AdminMurals suggestedMurals={suggestedMurals} setSuggestedMurals={setSuggestedMurals} deny={deny} approve={approve} />
              </Route>

              <Route>
                <p>Hmmm. I can't seem to find what you want.</p>
              </Route>
            </Switch>
          </main>
        </CurrentUserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;