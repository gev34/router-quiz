import {NavLink , Outlet , useNavigate} from 'react-router-dom';
import { useAuth } from '../hook/useAuth';


export const Layout = () =>{

    const {signOut} = useAuth();
    const navigate = useNavigate();


    return (
        <>
        <nav>
           <NavLink to = "/home"> Home </NavLink> 
           <NavLink to = "/about"> About </NavLink> 
           <NavLink to = "/contact"> Contact </NavLink> 
           <NavLink to = "/users"> Users </NavLink> 
           <button onClick={() => signOut(() =>navigate("/" , {replace : true}))}>Sign Out</button>
        </nav>
        <Outlet/>
        
        </>
    )
}