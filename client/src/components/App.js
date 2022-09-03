import Navbar from './Navbar'
import Footer from './Footer'

import ProfileNavigationCard from './ProfileNavigationCard'
import LeftCard from './LeftCard'

import {useState} from "react"
import {motion} from 'framer-motion'

function App(props){

	//useState here is a hook meaning it let's us 'hook' into special react features
	
	const [displayItem,updateDisplayItem] = useState("")
	const [searchText,updateSearchText] = useState("")

	const[leftCardAnimation,updateLeftCardAnimation] = useState("")

	return (
		<div class="flex flex-wrap flex-col min-h-screen min-w-screen justify-center">
			<Navbar updateSearch={updateSearchText} updateDisplay={updateDisplayItem} name={props.name}/>
			<div class="flex flex-row mt-auto mb-auto h-screen">
				<LeftCard leftCardAnimation={leftCardAnimation} updateLeftCardAnimation={updateLeftCardAnimation} searchText={searchText} display={displayItem}/>
				<ProfileNavigationCard  updateLeftCardAnimation={updateLeftCardAnimation} updateDisplay={updateDisplayItem} username={"nalin"}/>
			</div>
			<Footer name={props.name}/>
		</div>
	)
}

export default App