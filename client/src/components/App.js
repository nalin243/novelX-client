import About from "./routeComponents/About"
import Contact from "./routeComponents/Contact"

import Home from "./Home"

import {Route,Routes,useNavigate} from "react-router-dom"
import {useEffect} from "react"

import axios from "axios"
axios.defaults.withCredentials=true

function App(props){

	return (
		<div class="flex flex-wrap flex-col min-h-screen min-w-screen justify-center">
			<Home name={props.name}/>
			{/*<Routes>
				<Route path="/" element={<Home name={props.name}/>}/>
				<Route path="about" element={<About name={props.name}/>}/>
				<Route path="contact" element={<Contact name={props.name}/>}/>
			</Routes>	*/}
		</div>
	)
}

export default App