
import BookCard from './LibraryChildComponents/BookCard'
import BookCardModal from './LibraryChildComponents/BookCardModal'

function Library(props){

	return (
		<div class="flex flex-wrap overflow-y-auto justify-left h-inherit w-full m-10">
			{
				props.cards.map((card)=>{
					return card
				})
			}

		</div>
		)

}

export default Library