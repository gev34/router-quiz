import {Routes , Route} from 'react-router-dom'
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ContactPage } from './pages/ContactPage';
import { UsersPage } from './pages/UsersPage';
import { Layout } from './components/Layout';
import {RequireAuth} from './hoc/RequireAuth'
import { AuthProvider } from './hoc/AuthProvider';

function App() {
  return (
    <AuthProvider>
    <Routes>
    <Route path="/" element = {<RequireAuth><Layout/></RequireAuth>}>
    <Route index element={<HomePage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="home" element={<HomePage />} />
    <Route path="contact" element={<ContactPage/>}/>
    <Route path="users" element={<UsersPage/>}/>
    <Route path="*" element={<NotFoundPage />} />
    </Route>
    <Route path="login" element={<LoginPage/>} />
    <Route path="register" element={<RegisterPage/>} />
    </Routes>
    </AuthProvider>
  );
}

export default App;
