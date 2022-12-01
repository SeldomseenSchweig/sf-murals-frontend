import React, { useContext } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import CurrentUserContext from "../CurrentUserContext";


function NavBar({logout, suggestedMurals}) {

  const {currentUser} = useContext(CurrentUserContext)
    
  
  return (
    <div>

      {!currentUser ? <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
         SF Murals
        </NavLink>

        <Nav className="ml-auto" cl navbar>
          <NavItem>
            <NavLink to="/signup"> Signup</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/login"> Login</NavLink>
          </NavItem>
        </Nav>
      </Navbar> :

      <Navbar expand="md"><NavLink exact to="/" className="navbar-brand">
         SF Murals
        </NavLink>

        <Nav className="ml-auto" navbar>
        {!currentUser.user.isAdmin? 
              <NavItem>
                <NavLink to="/muralSuggest">Suggest a Mural</NavLink>
              </NavItem>
              :          
              <NavItem>
                  <NavLink to="/adminMurals"> Currently Suggested Murals ({suggestedMurals ? suggestedMurals.length: "" })</NavLink>
              </NavItem> 
          }

          <NavItem>
            <NavLink to="/murals">All Murals</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/profile"> Profile</NavLink>
          </NavItem>  
          <NavItem onClick={logout}> 
             <NavLink to="/"> Log out of { !currentUser ? "" : currentUser.user.username} 
            </NavLink>
          </NavItem>

          </Nav>
          </Navbar>
}

    </div>
  );
}

export default NavBar;





