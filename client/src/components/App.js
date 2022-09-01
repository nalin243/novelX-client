import Navbar from './Navbar'
import Footer from './Footer'

import LeftCard from './LeftCard'
import MyLibraryCard from './MyLibraryCard'

import {useState} from "react"

function App(props){

	//useState here is a hook meaning it let's us 'hook' into special react features
	
	return (
		<div class="flex flex-wrap flex-col min-h-screen min-w-screen justify-center">
			<Navbar name={props.name}/>
			<div class="flex flex-row mt-auto mb-auto h-screen">
				<MyLibraryCard />
				<LeftCard username={"nalin"}/>
			</div>
			<Footer name={props.name}/>
		</div>
	)
}

export default App