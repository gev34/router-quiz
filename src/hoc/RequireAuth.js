import {useLocation , Navigate} from 'react-router-dom'
import { useAuth } from '../hook/useAuth';
import loginData from '../Datas/LoginData/loginData';

export const RequireAuth = ({children}) => {
    const location = useLocation();
    const {userLogin} = useAuth();
    const {userPassword} = useAuth();
   
    // console.log(userLogin);
    // console.log(userPassword);
   // console.log(loginData);
   
    // for(let i = 0 ; i < loginData.length ; i++){
    //     console.log(loginData[i]);
    //     if(loginData[i].email === userLogin && loginData[i].password === userPassword){
    //       return children;
    //     }
    //       return  <Navigate to = '/login' state={{from:location}}/>
        
  
        
    // }
    return (
        
      loginData.map((user) => {
            if(user.email !== userLogin && user.password !== userPassword) {
            return <Navigate to = '/login' state={{from:location}}/>  
            }  
            return children;     
               
        } )
    )
        
      
}
