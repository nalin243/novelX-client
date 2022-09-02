
import BookCard from './BookCard'

function MyLibrary(props){

	return (
		<div class="flex flex-wrap overflow-y-auto justify-left h-inherit w-full m-5">
			<BookCard imagesrc="https://img.webnovel.com/bookcover/11530348105422805/300/300.jpg?updateTime=1562664192135" bookname="My House of Horrors"/>
		</div>
		)

}

export default MyLibrary