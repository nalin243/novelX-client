function BookCard(props){

	return (
		<div class=" h-3/6 xl:basis-2/12 m-3 md:basis-4/12 hover:translate-y-1 hover:cursor-pointer hover:border-orange-300 rounded-md hover:rounded-xl hover:shadow-3xl hover:shadow-orange-500 border-2 border-slate-300 shadow-lg drop-shadow-xl"> 
			<div class="flex flex-col text-center justify-center h-full w-inherit">
				<img class="h-5/6 w-5/6 ml-auto mr-auto rounded-3xl" src={props.imagesrc} />
				<h4 class="mt-1 font-serif">{props.bookname}</h4>
			</div>
		</div>
		)
}

export default BookCard