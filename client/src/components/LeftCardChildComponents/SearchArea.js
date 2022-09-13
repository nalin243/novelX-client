
import Library from "./Library"

import BookCard from "./LibraryChildComponents/BookCard"
import {motion} from "framer-motion"

function SearchArea(props){

	const searchResult = props.searchResult.items
	const cards = []	

	if(searchResult!==undefined){
		for(let i=0;i<searchResult.length;i++){
			try{
				cards.push(<BookCard libraryModal={false} idno={i} imagesrc={((searchResult[i].volumeInfo).imageLinks).smallThumbnail} bookname={searchResult[i].volumeInfo.title} />)
			}
			catch(error){
				cards.push(<BookCard libraryModal={false} idno={i} imagesrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_qQAlRv5ygvOfyRvSdF7QLsRsubnYqsnCSBasaNznTbz1bFM7ZjO4D9mi_4FwE8Dwz0&usqp=CAU"} bookname={searchResult[i].volumeInfo.title} />)
			}
		}
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