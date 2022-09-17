import Modal from "./Modal"

import {useState,useEffect} from 'react'
import axios from "axios"


function BookCard(props){

	const [modalAnimation,updateAnimation] = useState({
		opacity:0,
		scale: 0.1,
	})

	const query = new URLSearchParams("?"+(window.location.href).split('?')[1])
	const username = query.get("user")

	const [readStatus,updateReadStatus] = useState(false)
	let id = ""

	const readelement = <span onClick={()=>handleReadUpdation(true)} id="libmodalread"style={{marginRight:75}} class="bg-green-500 my-auto h-5 w-5 border-2 rounded-full border-slate-900 p-1" />
	const unreadelement = <span onClick={()=>handleReadUpdation(false)} id="libmodalread"style={{marginRight:75}} class="bg-red-500 my-auto h-5 w-5 border-2 rounded-full border-slate-900 p-1" />

	function handleReadUpdation(read){
		props.book.Read = !(read)
		updateReadStatus(!(read))
		axios.post("http://localhost:3001/updatebook",{username: username, updatedBook: props.book})
	}

	//console.log(props.libraryModal)
	if(props.libraryModal){

		id = "i"+props.book._id

		if(props.book!==undefined){

			useEffect(()=>{
				if(props.book.Read){
					updateReadStatus(true)
				}
				else {
					updateReadStatus(false)
			}
			},[])
			// axios.post("http://localhost:3001/updatebook",{username: username, updatedBook: props.book})
		}

	return (
		<div id={id} class="block h-3/6 bg-gray-300 xl:basis-2/12 m-3 md:basis-4/12 rounded-lg border-2 border-slate-300 shadow-lg drop-shadow-xl">
				<div class="flex flex-col text-center justify-center h-full w-inherit">
				{
					<Modal book={props.book} bookname={props.bookname} searchResult={props.searchResult} libraryModal={props.libraryModal} updateAnimation={updateAnimation} modalAnimation={modalAnimation} idno={props.idno}/>
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
				 <div   class="flex flex-row mt-1 hover:cursor-pointer  justify-center">
		    <label class="block hover:cursor-pointer  font-bold font-sans ml-20">Read</label>
		    <div class="hover:cursor-pointer flex justify-end ml-5">
		    {readStatus? readelement : unreadelement}
		    </div>
		    </div>
				</div>
			</div>
		</div>
		)
	}
	return (
		<div id={id}  class="block h-3/6 bg-gray-300 xl:basis-2/12 m-3 md:basis-4/12 rounded-lg border-2 border-slate-300 shadow-lg drop-shadow-xl">
				<div class="flex flex-col text-center justify-center h-full w-inherit">
				{
					<Modal book={props.book} bookname={props.bookname} searchResult={props.searchResult} libraryModal={props.libraryModal} updateAnimation={updateAnimation} modalAnimation={modalAnimation} idno={props.idno}/>
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