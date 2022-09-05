import About from "./routeComponents/About"
import Contact from "./routeComponents/Contact"

import Home from "./Home"

import {Route,Routes} from "react-router-dom"

function App(props){

	return (
		<div class="flex flex-wrap flex-col min-h-screen min-w-screen justify-center">
			<Routes>
				<Route path="/" element={<Home name={props.name}/>}/>
				<Route path="about" element={<About name={props.name}/>}/>
				<Route path="contact" element={<Contact name={props.name}/>}/>
			</Routes>	
		</div>
	)
}

export default App