import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/landingPage/home";
import Businesses from "./pages/BusinessPage/BusinessPage";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUpPage/SignupPage";
import Form from "./pages/CreateBusiness/CreateBusiness";
import SmallBusinessHome from "./pages/SmallBusinessHome.jsx/SmallBusinessHome";
import ViewBusinessPage from "./pages/ViewBusiness/ViewBusiness";
import Chat from "./pages/ChatPage/Chat";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import AdminHome from "./pages/AdminHome/AdminHome";
import AdminBusinesses from "./pages/AdminBusinesses/AdminBusinesses";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/businesses" element={<Businesses />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/create" element={<Form />} />
          <Route exact path="/smallbusiness" element={<SmallBusinessHome />} />
          <Route exact path="/business/:id" element={<ViewBusinessPage />} />
          <Route exact path="/chat/:OwnerId" element={<Chat />} />
          <Route exact path="/admin/login" element={<AdminLogin />} />
          <Route exact path="/admin/home" element={<AdminHome />} />
          <Route exact path="/admin/businesses" element={<AdminBusinesses />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
