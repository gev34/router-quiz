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
   
    for(let i = 0 ; i < loginData.length ; i++){
        if(loginData[i].email === userLogin && loginData[i].password === userPassword){
          //  console.log(loginData[i]);
          return children;
        }
        
        return <Navigate to = '/login' state={{from:location}}/>;

        
    }
       
}   
