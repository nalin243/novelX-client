import BookCardModal from "./BookCardModal"
function BookCard(props){

	return (
		<div class="block h-3/6 xl:basis-2/12 m-3 md:basis-4/12 rounded-lg border-2 border-slate-300 shadow-lg drop-shadow-xl">
				<div class="flex flex-col text-center justify-center h-full w-inherit">
				<BookCardModal idno={props.idno}/>
				<div class="flex flex-col text-center justify-center h-full w-inherit">
				<img onClick={(event)=>{
				document.querySelector("#book-modal"+props.idno).classList.remove("hidden")
				}}  class="hover:cursor-pointer h-5/6 w-5/6 ml-auto mr-auto rounded-3xl" src={props.imagesrc} />
				<h4 class="mt-1 text-white font-serif">{props.bookname}</h4>
				</div>
			</div>
		</div>
		)
}

export default BookCard