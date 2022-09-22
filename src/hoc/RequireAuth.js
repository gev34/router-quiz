import {useLocation , Navigate} from 'react-router-dom'
import { useAuth } from '../hook/useAuth';
import loginData from '../Datas/LoginData/loginData';

export const RequireAuth = ({children}) => {
    const location = useLocation();
    const {userLogin} = useAuth();
    const {userPassword} = useAuth();
   

        loginData.map((user) => {
            // console.log(user.email);
            // console.log(userLogin)
            if(user.email === userLogin && user.password === userPassword) {
                return children;
            }
        })
        return <Navigate to = '/login' state={{from:location}}/>
       
}
