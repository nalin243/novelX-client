
import {useEffect} from "react"
import axios from "axios"

function LibraryModal(props) {

	function handleUpdate(){
		axios.post("http://localhost:3001/api/post",{
			content: document.querySelector("#libmodalname").value
		},{
			headers:{
				"Access-Control-Allow-Origin":"*"
			}
		}).then((response)=>{
			console.log(response)
		})
	}

	return (
		<div onMouseLeave={()=>props.updateAnimation("")} class="flex flex-col w-full h-full p-2 opacity-full bg-white rounded-lg">
		    <div onClick={()=>{
		    	// document.querySelector("#book-modal"+props.idno).classList.add("hidden")
		    	props.updateAnimation("")
		    	}} class="flex justify-end hover:cursor-pointer ">
		        <img class="hover:h-6 hover:w-6 h-5 w-5 ml-20 rounded-full border-2 border-slate-900 p-1" src="https://www.freeiconspng.com/thumbs/close-icon/close-icon-47.png"/>
		    </div>
		    <label class="block hover:cursor-pointer hover:underline ml-auto mr-auto font-bold font-sans mt-4">Update Book</label>
		    <input id="libmodalname" placeholder="Change name" class="block border-2 overflow-x-scroll overflow-y-scroll border-slate-900 text-black bg-white hover:cursor-pointer ml-auto mr-auto bg-black rounded-lg mt-3 h-1/6 w-11/12"/>
		    <button onClick={handleUpdate} class="font-bold hover:translate-y-1  basis-1/12 w-1/2 ml-auto mr-auto bg-green-500 px-3 py-1 rounded-lg mt-7">Update</button>
		    <button class="font-bold hover:translate-y-1  basis-1/12 w-1/2 ml-auto mr-auto bg-red-500 px-3 py-1 rounded-lg mt-2">Delete</button>
		</div>
		)
}

export default LibraryModal