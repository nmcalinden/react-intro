import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { LoginForm } from "./features/auth";
const baseURL = "http://127.0.0.1:8000/";

function App() {
    // const {user } = useAuth();

    return (
        <div className="App">
            <h1>JARVIS</h1>
            {/* {user ? <AuthRoutes /> : <UnAuthRoutes />} */}
            <LoginForm />
        </div>
    );
}
export default App;
