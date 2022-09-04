
import Library from "./Library"

import BookCard from "./LibraryChildComponents/BookCard"
import {motion} from "framer-motion"

function SearchArea(props){

	const cards = []

	for(let i=0;i<3;i++){
		cards.push(<BookCard libraryModal={false} idno={i} imagesrc="https://img.webnovel.com/bookcover/11022733006234505/600/600.jpg?coverUpdateTime=1618827991884&imageMogr2/quality/40" bookname="Lord of mysteries"/>)
	}

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
		} class="flex flex-wrap overflow-y-auto justify-left h-inherit w-full m-1" >	
			{/*<BookCard libraryModal={false} idno={0} imagesrc="https://img.webnovel.com/bookcover/11022733006234505/600/600.jpg?coverUpdateTime=1618827991884&imageMogr2/quality/40" bookname="My House of Horrors"/>*/}
			<Library leftCardAnimation={props.leftCardAnimation} updateLeftCardAnimation={props.updateLeftCardAnimation} cards={cards} />
			</motion.div>
		)
}

export default SearchArea