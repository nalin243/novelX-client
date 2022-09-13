import Modal from "./Modal"

import {useState} from 'react'

function BookCard(props){

	const [modalAnimation,updateAnimation] = useState({
		opacity:0,
		scale: 0.1,
	})

	//console.log(props.libraryModal)

	return (
		<div class="block h-3/6 bg-gray-300 xl:basis-2/12 m-3 md:basis-4/12 rounded-lg border-2 border-slate-300 shadow-lg drop-shadow-xl">
				<div class="flex flex-col text-center justify-center h-full w-inherit">
				{
					<Modal searchResult={props.searchResult} libraryModal={props.libraryModal} updateAnimation={updateAnimation} modalAnimation={modalAnimation} idno={props.idno}/>
				}
				<div class="flex flex-col text-center justify-center h-full w-inherit rounded-xl border-2 border-red-500">
				
				<img onClick={()=>{
				// document.querySelector("#book-modal"+props.idno).classList.remove("hidden")
				updateAnimation({
					scale:[0,1,1.1,1,1],
					opacity:1
				})
				}}  class="object-contain hover:cursor-pointer h-4/6 w-4/6 ml-auto mr-auto" src={props.imagesrc} />
			
				<h4 class="mt-1 text-black font-serif mt-3">{props.bookname}</h4>
				</div>
			</div>
		</div>
		)
}

export default BookCard