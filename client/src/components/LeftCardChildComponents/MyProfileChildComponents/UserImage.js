function UserImage(props){

	const query = new URLSearchParams("?"+(window.location.href).split('?')[1])
	const username = query.get("user")

	return (
		<div class="flex-1 flex flex-row justify-start">
			<div class="flex flex-col text-center m-2 xl:basis-5/12 h-40 ml-10 mt-20 md:basis-7/12 justify-start">
				<img class="rounded-full border-2 border-slate-400 shadow-gray-200 hover:shadow-orange-400 shadow-md" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
				<h5 class="text-white mt-7 hover:text-orange-400 hover:cursor-pointer hover:italic font-light text-4xl font-serif">{username}</h5>
			</div>
		</div>
		)

}

export default UserImage