
import Library from "./Library"

import BookCard from "./LibraryChildComponents/BookCard"
import {motion} from "framer-motion"

function SearchArea(props){

	return (
		<motion.div initial={
			{
				borderRadius:"0.6%",
				scale:1,
				opacity:0
			}
		} 
		animate={props.leftCardAnimation}
		transition={
			{
				scale:{duration:0.6},
				type:"spring"
			}
		} class="flex flex-wrap overflow-y-auto justify-left h-inherit w-full m-10" >	
			<BookCard libraryModal={false} idno={0} imagesrc="https://img.webnovel.com/bookcover/11530348105422805/300/300.jpg?updateTime=1562664192135" bookname="My House of Horrors"/>
			</motion.div>
		)
}

export default SearchArea