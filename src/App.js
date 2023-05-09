import React from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";

class App extends React.Component{

  render(){
    return <Routes>
      <Route path="/" element={<Chat/>}/>
      <Route path="login" element={<Login/>}/>
    </Routes>
  }
}

export default App;