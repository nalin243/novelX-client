function ProfileNavigationListItem(props){
	return (
		<div onClick={()=>{props.updateDisplay(props.content)}} id={props.id} class="flex flex-row justify-center w-full hover:shadow-orange-500 hover:text-orange-500 hover:cursor-pointer my-4 w-full p-2 m-2 py-4 hover:bg-gray-100 hover:shadow-md hover:font-bold" >
			<li class="font-serif text-xl mr-10">{props.content}</li>
			<img class="h-8 -ml-7  rounded-full border-2 border-stone-900" src={props.iconsrc} />
		</div>
		)
}

export default ProfileNavigationListItem