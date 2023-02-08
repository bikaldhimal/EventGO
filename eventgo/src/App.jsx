import Login from "./components/authentication/login";
import Signup from "./components/authentication/signup";
import Recovery from "./components/authentication/recovery";
import Otp from "./components/authentication/otp";
import Reset from "./components/authentication/reset";
import Landingnav from "./components/landing/landingnav";
import Home from "./components/landing/home";
import Support from "./components/landing/support";
import Features from "./components/landing/features";
import Contact from "./components/landing/contact";
// import Navbar from "./components/actor/navbar";
import Events from "./components/actor/events";
// import Profile from "./components/actor/profile";
// import Followers from "./components/actor/followers";
// import Message from "./components/actor/message";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingnav />}>
          <Route path="/" element={<Home />} exact />
          <Route path="/support" element={<Support />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/reset" element={<Reset />} />

        <Route path="/actor/events" element={<Events />} />
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/actor/navbar" element={<Navbar />} />
        <Route path="/actor/profile" element={<Profile />} />
        <Route path="/actor/events" element={<Events />} />
        <Route path="/actor/followers" element={<Followers />} />
        <Route path="/actor/message" element={<Message />} /> */}
        {/* <Route path="/" element={<Home />}>
          <Route path="profile" element={<Profile />} />
          <Route path="events" element={<Events />} />
          <Route path="followers" element={<Followers />} />
          <Route path="message" element={<Message />} />
        </Route> */}
      </Routes>
    </Router>
  );
}
export default App;
