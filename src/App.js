import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Offers from "./pages/offers";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/forgotPassword";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/signIn" element={<SignIn/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/offers" element={<Offers/>}/>
          <Route path="/forgotPassword" element={<ForgotPassword/>}/>


          

          

        </Routes>
      </Router>
    </div>
  );
}

export default App;
