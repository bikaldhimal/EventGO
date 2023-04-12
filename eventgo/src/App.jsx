import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import ActorNav from "./components/actor/actorNav";
import Events from "./components/actor/events";
import Profile from "./components/actor/profile";
// import Follower from "./components/actor/follower";
import Message from "./components/actor/message";
import Chat from "./components/actor/chat";
import ActorHelp from "./components/actor/actorHelp";
import Ticket from "./components/actor/ticket";
import ManagerNav from "./components/eventManager/managerNav";
import ManagerEvent from "./components/eventManager/managerEvent";
import ManagerMessage from "./components/eventManager/managerMessage";
import ManagerChat from "./components/eventManager/managerChat";
import AddEvent from "./components/eventManager/addEvent";
import ViewEvent from "./components/eventManager/viewEvent";
import Todo from "./components/eventManager/todo";
import ManagerHelp from "./components/eventManager/managerHelp";
import ManagerProfile from "./components/eventManager/managerProfile";
import Overview from "./components/eventManager/overview";
import Artist from "./components/eventManager/artist";
import AdminNav from "./components/admin/adminNav";
import AdminDashboard from "./components/admin/adminDashboard";
import AdminFeedback from "./components/admin/adminFeedback";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";
import GoogleRole from "./components/authentication/googleRole";
import UserNav from "./components/user/userNav";
import UserEvents from "./components/user/userEvents";
import UserTicket from "./components/user/userTicket";
import UserProfile from "./components/user/userProfile";
import UserRequest from "./components/user/userRequest";
import UserMessage from "./components/user/userMessage";
import UserChat from "./components/user/userChat";
import UserHelp from "./components/user/userHelp";
import QrCode from "./components/actor/qrCode";
import UserQR from "./components/user/userQR";
import Request from "./components/actor/request";
import ManagerRequests from "./components/eventManager/managerRequests";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Routes */}
        <Route path="/" element={<Landingnav />}>
          <Route path="" element={<Home />} />
          <Route path="support" element={<Support />} />
          <Route path="features" element={<Features />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/google/:id" element={<GoogleRole />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/reset" element={<Reset />} />

        <Route element={<ProtectedRoute />}>
          {/* User Routes */}
          <Route path="/user/" element={<UserNav />}>
            <Route path="" element={<UserEvents />}>
              <Route path="event/ticket" element={<UserTicket />} />
            </Route>
            <Route path="profile" element={<UserProfile />} />
            <Route path="request" element={<UserRequest />} />
            <Route path="message" element={<UserMessage />} />
            <Route path="chat" element={<UserChat />} />
            <Route path="ticket" element={<UserQR />} />
            <Route path="help" element={<UserHelp />} />
          </Route>
          {/* Artist Routes */}
          <Route path="/actor/" element={<ActorNav />}>
            <Route path="" element={<Events />}>
              <Route path="event/ticket" element={<Ticket />} />
            </Route>
            <Route path="profile" element={<Profile />} />
            <Route path="request" element={<Request />} />
            <Route path="message" element={<Message />} />
            <Route path="chat" element={<Chat />} />
            <Route path="ticket" element={<QrCode />} />
            <Route path="help" element={<ActorHelp />} />
          </Route>
          {/* Event Manager Routes */}
          <Route path="/manager/" element={<ManagerNav />}>
            <Route path="overview" element={<Overview />} />
            <Route path="" element={<ManagerEvent />}>
              <Route path="event/add" element={<AddEvent />} />
              <Route path="event/view" element={<ViewEvent />} />
              <Route path="event/todo" element={<Todo />} />
            </Route>
            <Route path="artist" element={<Artist />} />
            <Route path="invite" element={<ManagerRequests />} />
            <Route path="profile" element={<ManagerProfile />} />
            <Route path="message" element={<ManagerMessage />} />
            <Route path="chat" element={<ManagerChat />} />
            <Route path="help" element={<ManagerHelp />} />
          </Route>
          0{/* Admin Routes */}
          <Route path="/admin/" element={<AdminNav />}>
            <Route path="" element={<AdminDashboard />} />
            <Route path="feedback" element={<AdminFeedback />} />
          </Route>
        </Route>

        <Route />
      </Routes>
    </Router>
  );
}
export default App;
