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
    //    // console.log(loginData[i]);
    //     if(loginData[i].email === userLogin && loginData[i].password === userPassword){
    //         console.log('true')
    //       return children;
    //     } 
    //     console.log('false')
    //       return  <Navigate to = '/login' state={{from:location}}/>
        
  
        
    // }

    
    return (
        
      loginData.map((user) => {
            if(user.email !== userLogin || user.password !== userPassword) {
            console.log('false')
            return <Navigate to = '/login' state={{from:location}}/>  
            }  
                console.log('true')
                return children;        
        } )
    )
        
      
// 
// let i = 0 ;
// while(i < loginData.length) {
//     if(loginData[i].email !== userLogin ||loginData[i].password !== userPassword){
//                console.log('false')
//               return  <Navigate to = '/login' state={{from:location}}/>
//             } else{
//                 console.log('true')
//                 return children;
//             }       
// }
// 
}
