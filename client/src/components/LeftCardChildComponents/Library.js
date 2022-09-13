
import BookCard from './LibraryChildComponents/BookCard'
import Modal from './LibraryChildComponents/Modal'

import {motion} from 'framer-motion'

function Library(props){

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
		} class="flex flex-wrap  justify-left h-inherit w-full m-10">
			{
				props.cards.map((card)=>{
					return card
				})
			}

		</motion.div>
		)

}

export default Library