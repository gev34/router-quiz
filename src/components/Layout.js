import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import "./Layout.css";

export const Layout = () => {

    const {signOut} = useAuth();
    const navigate = useNavigate();
  
   //console.log("layout called")
    return (
        <>
        <nav>
        <NavLink to = "/home"><ion-icon name="home-outline"></ion-icon> Home </NavLink> 
        <NavLink to = "/about"><ion-icon name="information-circle-outline"></ion-icon> About </NavLink> 
        <NavLink to = "/contact"><ion-icon name="call-outline"></ion-icon> Contact </NavLink> 
        <NavLink to = "/users"><ion-icon name="people-outline"></ion-icon> Users </NavLink> 
        <button onClick={() => signOut(() =>navigate("/" , {replace : true}))}> <ion-icon name="log-out-outline"></ion-icon>Sign Out</button>
        </nav>
        <main>
          <Outlet/>
        </main>
        
        
        </>
    )
}

  const navigate = useNavigate();

  return (
    <>
      <nav>
        <NavLink to="/home">
          <ion-icon name="home-outline"></ion-icon> Home
        </NavLink>
        <NavLink to="/about">
          <ion-icon name="information-circle-outline"></ion-icon> About
        </NavLink>
        <NavLink to="/contact">
          <ion-icon name="call-outline"></ion-icon> Contact
        </NavLink>
        <NavLink to="/users">
          <ion-icon name="people-outline"></ion-icon> Users
        </NavLink>
        <button onClick={() => navigate("/", { replace: true })}>
          <ion-icon name="log-out-outline"></ion-icon>Sign Out
        </button>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );


