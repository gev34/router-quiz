import {useNavigate , useLocation} from 'react-router-dom'
import { useAuth } from '../hook/useAuth';

export const LoginPage = () =>{

    const navigate = useNavigate();
    const location = useLocation();
    const {signIn} = useAuth();

    const fromPage = location.state.from.pathname;
    console.log(fromPage);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const userLogin = form.username.value;
        const userPassword = form.password.value;

        signIn(userLogin , userPassword ,() => navigate(fromPage , {replace : true}));
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name : <input name = "username"/>
                </label>
                <label>
                    password : <input type="password" name = "password"/>
                </label>
                <button type = "submit">Log In</button>
            </form>
        </div>
    )
}