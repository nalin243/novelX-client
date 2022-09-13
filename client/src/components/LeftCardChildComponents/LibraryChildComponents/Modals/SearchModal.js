function SearchModal(props) {

	const searchResult = props.searchResult

		const book = new Map()

		try{
		book.set("title",(searchResult.volumeInfo).title)
		book.set("author",(searchResult.volumeInfo.authors)[0])
		book.set("pageCount",searchResult.volumeInfo.pageCount)
		book.set("description",searchResult.volumeInfo.description)
		}
		catch(error){
			console.log(error)
		}

	return (
		<div onMouseLeave={()=>props.updateAnimation("")} class="flex flex-col w-full h-full p-2 opacity-full bg-white rounded-lg overflow-y-auto">
		    <div onClick={()=>{
		    	// document.querySelector("#book-modal"+props.idno).classList.add("hidden")
		    	props.updateAnimation("")
		    	}} class="flex justify-end hover:cursor-pointer ">
		        <img class="hover:h-6 hover:w-6 h-5 w-5 ml-20 rounded-full border-2 border-slate-900 p-1" src="https://www.freeiconspng.com/thumbs/close-icon/close-icon-47.png"/>
		    </div>
		    <label class="block hover:cursor-pointer ml-auto mr-auto font-bold font-sans mt-4">Name: {book.get("title")}</label>
		    <label class="block hover:cursor-pointer ml-auto mr-auto font-bold font-sans mt-4">Author: {book.get("author")}</label>
		    <label class="block hover:cursor-pointer ml-auto mr-auto font-bold font-sans mt-4">Page Count: {book.get("pageCount")}</label>
		    <label class="block hover:cursor-pointer ml-auto mr-auto font-bold font-sans mt-4">{book.get("description")}</label>
		</div>
		)
}

export default SearchModal