
import {useEffect} from "react"
import axios from "axios"

function LibraryModal(props) {

	const query = new URLSearchParams("?"+(window.location.href).split('?')[1])
	const username = query.get("user")

	function handleDelete(){
		document.querySelector(`#i${props.book._id}`).classList.add("hidden")
		axios.delete(process.env.REACT_APP_SERVER_URL+"deletebook?username="+username+"&bookname="+props.bookname)
	}

	return (
		<div onMouseLeave={()=>props.updateAnimation("")} class="flex flex-col w-full h-full p-2 opacity-full bg-white rounded-lg">
		    <div class="flex justify-center hover:cursor-pointer ">
		    	{/*<span id="libmodalread" onClick={handleUpdate} style={{marginRight:75}} class="bg-red-700  h-5 w-5 border-2 rounded-full border-slate-900 p-1" />*/}
		        <img onClick={()=>{
		    	// document.querySelector("#book-modal"+props.idno).classList.add("hidden")
		    	props.updateAnimation("")
		    	}}  style={{marginLeft:165}} class=" h-5 w-5  rounded-full border-2 border-slate-900 p-1" src="https://www.freeiconspng.com/thumbs/close-icon/close-icon-47.png"/>
		    </div>
		    {/*<label class="block hover:cursor-pointer hover:underline ml-auto mr-auto font-bold font-sans mt-4">Update Book</label>*/}
		   {/* <input id="libmodalname" placeholder="Change name" class="block border-2 overflow-x-scroll overflow-y-scroll border-slate-900 text-black bg-white hover:cursor-pointer ml-auto mr-auto bg-black rounded-lg mt-3 h-1/6 w-11/12"/>*/}
		    <button  class="font-bold hover:translate-y-1  basis-1/12 w-1/2 mb-5 ml-auto mr-auto bg-green-500 px-3 py-1 rounded-lg mt-7">Update</button>
		    <button onClick={handleDelete} class="font-bold hover:translate-y-1  basis-1/12 w-1/2 ml-auto mr-auto bg-red-500 px-3 py-1 rounded-lg mt-2">Delete</button>
		</div>
		)
}

export default LibraryModal