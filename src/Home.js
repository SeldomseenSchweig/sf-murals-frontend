


import React, { useContext } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import CurrentUserContext from "./CurrentUserContext";
import { Link } from "react-router-dom";
import './Home.css';



function Home() {
  const user = useContext(CurrentUserContext);


  return (
    <section className="col-md-14">
      <Card className="card">
        <CardBody className="text-center">
          <CardTitle className="title">
            <h1 className="header">SF Murals</h1>
            <h3 className="subTitle">Find The Mural You Are Looking For</h3>
            {user.currentUser ? (
              <h2>Welcome Back {user.currentUser.user.firstName}</h2>
            ) : (
              <div className="buttonGroup">
                <Link to="/signup">
                  <button className="btn btn-primary button">
                    Sign Up
                  </button>
                </Link>
                <Link to="/login">
                  <button className="btn btn-primary button">
                    Login
                  </button>
                </Link>
              </div>
            )}
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
