import Navbar from './Navbar'
import Footer from './Footer'

import ProfileNavigationCard from './ProfileNavigationCard'
import LeftCard from './LeftCard'

import {useState,useEffect} from "react"
import {motion} from 'framer-motion'

function Home(props){

	const [displayItem,updateDisplayItem] = useState("")
	const [searchResult,updateSearchResult] = useState("")

	const [searchLoading,updateSearchLoading] = useState(true)

	const[leftCardAnimation,updateLeftCardAnimation] = useState("")

	return (

		<div>
		<Navbar updateSearchLoading={updateSearchLoading} location={"home"}updateLeftCardAnimation={updateLeftCardAnimation} updateSearchResult={updateSearchResult} updateDisplay={updateDisplayItem} name={props.name}/>
			<div class="flex flex-row mt-auto mb-auto h-screen">
				<LeftCard updateSearchLoading={updateSearchLoading} searchLoading={searchLoading} leftCardAnimation={leftCardAnimation} updateLeftCardAnimation={updateLeftCardAnimation} searchResult={searchResult} display={displayItem}/>
				<ProfileNavigationCard  updateSearchLoading={updateSearchLoading} updateLeftCardAnimation={updateLeftCardAnimation} updateDisplay={updateDisplayItem} username={"nalin"}/>
			</div>
			<Footer name={props.name}/>
		</div>
		)
}

export default Home