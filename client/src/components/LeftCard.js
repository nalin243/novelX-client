
import Library from './LeftCardChildComponents/Library'
import MyProfile from './LeftCardChildComponents/MyProfile'
import SearchArea from './LeftCardChildComponents/SearchArea'

import BookCard from './LeftCardChildComponents/LibraryChildComponents/BookCard'

function LeftCard(props){

	const childComponents = new Map()

	const cards = []

	for(let i=0;i<3;i++){
		cards.push(<BookCard idno={i} imagesrc="https://img.webnovel.com/bookcover/11530348105422805/300/300.jpg?updateTime=1562664192135" bookname="My House of Horrors"/>)
	}
	
	childComponents.set("My Library",(<Library cards={cards} />))
	childComponents.set("My Profile",(<MyProfile/>))
	childComponents.set("Search Area",(<SearchArea searchText={props.searchText}/>))

	return (
		<div class="flex flex-3 bg-black justify-center w-3/4 h-4/6 md:h-4/6 xl:h-4/6  mr-auto mr-1 ml-6 mt-12 overflow rounded-lg border-2 border-gray-300 shadow-slate-500 shadow-2xl drop-shadow-3xl">
			{
				childComponents.get(props.display)
			}
		</div>
		)
}

export default LeftCard