
import BookCard from './MyLibraryChildComponents/BookCard'
import BookCardModal from './MyLibraryChildComponents/BookCardModal'

function MyLibrary(props){

	const cards = []

	for(let i=0;i<3;i++){
		cards.push(<BookCard idno={i} imagesrc="https://img.webnovel.com/bookcover/11530348105422805/300/300.jpg?updateTime=1562664192135" bookname="My House of Horrors"/>)
	}

	return (
		<div class="flex flex-wrap overflow-y-auto justify-left h-inherit w-full m-10">
			{
				cards.map((card)=>{
					return card
				})
			}

		</div>
		)

}

export default MyLibrary