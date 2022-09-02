
import UserImage from './MyProfileChildComponents/UserImage'
import UserStats from './MyProfileChildComponents/UserStats'

function MyProfile(props){
	return (
		<div class="flex flex-row flex-wrap h-inherit w-full m-1 overflow-y-scroll">
			<UserImage />
			<UserStats />
		</div>
		)
}

export default MyProfile