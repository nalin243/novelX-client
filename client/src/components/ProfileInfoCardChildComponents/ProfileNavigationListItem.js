function ProfileNavigationListItem(props){
	return (
		<div onClick={()=>{props.updateDisplay(props.content)}} id={props.id} class="w-full hover:shadow-orange-500 hover:text-orange-500 hover:cursor-pointer my-4 w-full p-2 m-2 py-4 hover:bg-gray-100 hover:shadow-md hover:font-bold" >
			<li class="font-serif text-xl mr-10">{props.content}</li>
		</div>
		)
}

export default ProfileNavigationListItem