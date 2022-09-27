<<<<<<< HEAD
import {Routes , Route , Navigate} from 'react-router-dom'
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { LoginPage } from './pages/LoginPage';
import { ContactPage } from './pages/ContactPage';
import { UsersPage } from './pages/UsersPage';
import { Layout } from './components/Layout';
import {RequireAuth} from './hoc/RequireAuth'
import { AuthProvider } from './hoc/AuthProvider';
=======
import { Routes, Route } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { LoginPage } from "./pages/LoginPage";
import { ContactPage } from "./pages/ContactPage";
import { UsersPage } from "./pages/UsersPage";
import { Layout } from "./components/Layout";
import { RequireAuth } from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";
>>>>>>> b9c663b06a3b74ec588bf902fe904860881c49e0

function App() {
  return (
    <AuthProvider>
<<<<<<< HEAD
    <Routes>
    <Route path="/" element = {<LoginPage><Layout/></LoginPage>}>
    <Route index element={<HomePage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="home" element={<HomePage />} />
    <Route path="contact" element={<ContactPage/>}/>
    <Route path="users" element={<UsersPage/>}/>
    <Route path="*" element={<NotFoundPage />} />
    </Route>
    <Route path="login" element={<LoginPage/>} />
    </Routes>
=======
      <Routes>
        <Route path="layout" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/" element={<LoginPage />} />
      </Routes>
>>>>>>> b9c663b06a3b74ec588bf902fe904860881c49e0
    </AuthProvider>
  );
}

export default App;
