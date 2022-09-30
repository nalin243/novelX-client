
import axios from "axios"

function SearchModal(props) {

	const searchResult = props.searchResult

	const bookDetails = new Map()

	try{
		bookDetails.set("title",(searchResult.volumeInfo).title)
		bookDetails.set("author",(searchResult.volumeInfo.authors)[0])
		bookDetails.set("pageCount",searchResult.volumeInfo.pageCount)
		bookDetails.set("description",searchResult.volumeInfo.description)
		bookDetails.set("cover",((searchResult.volumeInfo).imageLinks).smallThumbnail)
	}
	catch(error){
		console.log(error)
	}

	const Book = {
		name: bookDetails.get("title"),
		Pages: bookDetails.get("pageCount"),
		Author: bookDetails.get("author"),
		Description: bookDetails.get("description"),
		Cover: bookDetails.get("cover")
	}

	function addToLibrary(Book){
		const query = new URLSearchParams("?"+(window.location.href).split('?')[1])
		const username = query.get("user")

		const data = {
			username: username, 
			book: Book
		}

		axios.put(process.env.REACT_APP_SERVER_URL+"updateLibrary",data)
	}	



	return (
		<div onMouseLeave={()=>props.updateAnimation("")} class="flex flex-col w-full h-full p-2 opacity-full bg-white rounded-lg overflow-y-auto">
		    <div class="flex justify-center hover:cursor-pointer">
		    	<img onClick={()=>{
		    		addToLibrary(Book)
		    	}} style={{marginRight:95}} class="hover:h-7 hover:w-7 h-6 w-6 mr-20  rounded-full border-2 border-slate-900 p-1" src="https://cdn.iconscout.com/icon/free/png-256/library-add-1781639-1518324.png"/>
		        <img onClick={()=>{
		        	//close modal
		    	// document.querySelector("#bookDetails-modal"+props.idno).classList.add("hidden")
		    	props.updateAnimation("")
		    	}} class="hover:h-7 hover:w-7 h-6 w-6  ml-10  rounded-full border-2 border-slate-900 p-1" src="https://www.freeiconspng.com/thumbs/close-icon/close-icon-47.png"/>
		    	
		    </div>
		    <label class="block hover:cursor-pointer ml-auto mr-auto font-bold font-sans mt-4">Name: {bookDetails.get("title")}</label>
		    <label class="block hover:cursor-pointer ml-auto mr-auto font-bold font-sans mt-4">Author: {bookDetails.get("author")}</label>
		    <label class="block hover:cursor-pointer ml-auto mr-auto font-bold font-sans mt-4">Page Count: {bookDetails.get("pageCount")}</label>
		    <label class="block hover:cursor-pointer ml-auto mr-auto font-bold font-sans mt-4">{bookDetails.get("description")}</label>
		</div>
		)
}

export default SearchModal