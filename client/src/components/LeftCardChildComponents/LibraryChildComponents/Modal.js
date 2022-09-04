
import {motion} from 'framer-motion'

import LibraryModal from './Modals/LibraryModal'
import SearchModal from './Modals/SearchModal'

function Modal (props){

	//console.log(props.modalAnimation)

	return (
		<motion.div animate={props.modalAnimation} initial={
			{
				opacity:0,
				scale: 0.1,
			}
			} transition={
			{
				type:"ease",
				stiffness:100,
				scale: {duration: 0.5},
				default: {type:"tween"}
			}
		} id={"book-modal"+props.idno} tabIndex="-1" class="absolute inset-0 z-10 -m-3">
		{props.libraryModal ? <LibraryModal updateAnimation={props.updateAnimation}/> : <SearchModal updateAnimation={props.updateAnimation}/>  }
		</motion.div>
		)
}

export default Modal
