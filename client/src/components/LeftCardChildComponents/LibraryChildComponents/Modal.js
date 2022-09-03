
import {motion} from 'framer-motion'

import LibraryModal from './Modals/LibraryModal'
import SearchModal from './Modals/SearchModal'

function Modal
(props){

	console.log(props.modalAnimation)

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
		} id={"book-modal"+props.idno} tabindex="-1" class="absolute inset-0 z-10 -m-3">
		{props.libraryModal ? <LibraryModal updateAnimation={props.updateAnimation}/> : <SearchModal updateAnimation={props.updateAnimation}/>  }
		    {/*	<div class="flex flex-col w-full h-full p-2 opacity-full bg-white rounded-lg">
		    		<div onClick={()=>{
		    			// document.querySelector("#book-modal"+props.idno).classList.add("hidden")
		    			props.updateAnimation("")
		    		}} class="flex justify-end hover:cursor-pointer ">
		        		<img class="hover:h-6 hover:w-6 h-5 w-5 ml-20 rounded-full border-2 border-slate-900 p-1" src="https://www.freeiconspng.com/thumbs/close-icon/close-icon-47.png"/>
		        	</div>
		        	<label class="block hover:cursor-pointer hover:underline ml-auto mr-auto font-bold font-sans mt-4">Update Book</label>
		        	<input placeholder="Change name" class="block border-2 overflow-x-scroll overflow-y-scroll border-slate-900 text-black bg-white hover:cursor-pointer ml-auto mr-auto bg-black rounded-lg mt-3 h-1/6 w-11/12"/>
		        	<button class="font-bold hover:translate-y-1  basis-1/12 w-1/2 ml-auto mr-auto bg-green-500 px-3 py-1 rounded-lg mt-7">Update</button>
		        	<button class="font-bold hover:translate-y-1  basis-1/12 w-1/2 ml-auto mr-auto bg-red-500 px-3 py-1 rounded-lg mt-2">Delete</button>
			    </div>*/}
		</motion.div>
		)
}

export default Modal
