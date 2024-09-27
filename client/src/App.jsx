import Signup from "./pages/signup/Signup"
import {GoogleOAuthProvider} from '@react-oauth/google'
import  {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from "./pages/Login/Login";
import PageNotFound from "./pages/404 NOT FOUND/404NotFound";
import Home from "./pages/Home/Home";



function App() {
  const ClientID = `${import.meta.env.VITE_CLIENT_ID}`;
  const GoogleAuthWrapper = ()=>{
    return(
      <GoogleOAuthProvider clientId={ClientID}>
        <Signup />
      </GoogleOAuthProvider>
    )
  }
  const GoogleLoginAuthWrapper = ()=>{
    return(
      <GoogleOAuthProvider clientId={ClientID}>
        <Login />
      </GoogleOAuthProvider>
    )
  }

  return (
    <BrowserRouter>
    <Routes>  
      <Route path='/signup' element={<GoogleAuthWrapper />}/>
      <Route path='/' element={<GoogleLoginAuthWrapper /> }/>
      <Route path='/home' element={<Home /> }/>
      <Route path='*' element={<PageNotFound /> }/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
