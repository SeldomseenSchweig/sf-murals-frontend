// import React, { useContext } from "react";
// import { Card, CardBody, CardTitle } from "reactstrap";
// import CurrentUserContext from "./CurrentUserContext";
// import { Link } from "react-router-dom";
// import './Home.css'

// function Home() {
//   const user = useContext(CurrentUserContext);

//   return (
//     <section className="col-md-14">
//       <Card>
//         <CardBody className="text-center">
//           <CardTitle>

//             <h1 className="font-weight-bold">
//               SF Murals
//             </h1>
//             <h3> Find The Mural You Are Looking For </h3>
//             {user.currentUser ? <h2> Welcome Back {user.currentUser.user.firstName} </h2> : <>
//               <Link to="/signup"> <button className="btn btn-primary b"> Sign Up</button></Link>
//               <Link to="/login">  <button className="btn btn-primary b"> Login</button></Link></>}

//           </CardTitle>





//         </CardBody>
//       </Card>
//     </section>
//   );

// }



// export default Home;


import React, { useContext } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import CurrentUserContext from "./CurrentUserContext";
import { Link } from "react-router-dom";
import './Home.css';

// Import images for background and decorative purposes
import muralImage from './mural.jpg';

function Home() {
  const user = useContext(CurrentUserContext);

  

  return (
    <section className="col-md-14">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h1 >SF Murals</h1>
            <h3 className="subtitle">Find The Mural You Are Looking For</h3>
            {user.currentUser ? (
              <h2>Welcome Back {user.currentUser.user.firstName}</h2>
            ) : (
              <div className="buttonGroup">
                <Link to="/signup">
                  <button className="btn btn-primary" style={styles.button}>
                    Sign Up
                  </button>
                </Link>
                <Link to="/login">
                  <button className="btn btn-primary">
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
