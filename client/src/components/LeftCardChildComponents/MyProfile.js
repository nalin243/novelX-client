
import UserImage from './MyProfileChildComponents/UserImage'
import UserStats from './MyProfileChildComponents/UserStats'

import {motion} from 'framer-motion'

function MyProfile(props){
	return (
		<motion.div initial={
			{
				borderRadius:"0.6%",
				scale:1,
				opacity:0
			}
		} 
		animate={props.leftCardAnimation}
		transition={
			{
				scale:{duration:0.6},
				type:"spring"
			}
		} class="flex flex-row flex-wrap h-inherit w-full m-1 overflow-y-scroll">
			<UserImage />
			<UserStats />
		</motion.div>
		)
}

export default MyProfile