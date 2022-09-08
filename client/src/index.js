
//STARTED ON 31st AUGUST

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './components/App'
import Login from "./components/AuthComponents/Login"
import Signup from "./components/AuthComponents/Signup"
import CheckAuth from "./components/AuthComponents/CheckAuth"

import {BrowserRouter} from "react-router-dom"

import {Route,Routes,Navigate} from "react-router-dom"

import {useState} from "react"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Navigate to="authcheck"/>} />
			<Route path="/authcheck" element={<CheckAuth/>} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Signup />} /> 
			<Route path="/home" element={<App name="NovelX" />} /> 
		</Routes>
	</BrowserRouter>
	)