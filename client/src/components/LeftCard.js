
import axios from "axios"
import {useEffect,useState} from "react"

import Library from './LeftCardChildComponents/Library'
import MyProfile from './LeftCardChildComponents/MyProfile'
import SearchArea from './LeftCardChildComponents/SearchArea'

import BookCard from './LeftCardChildComponents/LibraryChildComponents/BookCard'

function LeftCard(props){

	const childComponents = new Map()
	
	childComponents.set("MyLibrary",(<Library leftCardAnimation={props.leftCardAnimation} updateLeftCardAnimation={props.updateLeftCardAnimation} cards={[]} library={true}/>))
	childComponents.set("MyProfile",(<MyProfile leftCardAnimation={props.leftCardAnimation} updateLeftCardAnimation={props.updateLeftCardAnimation}/>))
	childComponents.set("Search Area",(<SearchArea updateSearchLoading={props.updateSearchLoading} searchLoading={props.searchLoading} leftCardAnimation={props.leftCardAnimation} updateLeftCardAnimation={props.updateLeftCardAnimation} searchResult={props.searchResult}/>))

	return (
		<div 
		class="flex flex-3  bg-black border-2 justify-center w-3/4 h-4/6 md:h-4/6 xl:h-5/6 mb-10 sm:my-auto xl:ml-auto sm:mx-16 xl:mr-4 xl:ml-6 mt-11 overflow rounded-lg border-2 border-gray-300 shadow-slate-500 shadow-2xl drop-shadow-3xl">
			{
				childComponents.get(props.display)
			}
		</div>
		)
}

export default LeftCard