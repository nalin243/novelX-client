import {motion} from "framer-motion"
import {useState,useEffect} from "react"

import axios from "axios"

function ProfileNavigationListItem(props){

	const [navAnimation,updateNavAnimation] = useState({
					y:0,
					z:0,
					x:0
				})

	return (
		<motion.div onMouseEnter={
			()=>{
				document.querySelector("#"+props.id).classList.remove("hover:shadow-green-500")
				document.querySelector("#"+props.id).classList.add("hover:shadow-orange-500")
				updateNavAnimation({
					y:3,
					z:3,
					x:3
				})

			}
		}  
		onMouseLeave={
			()=>{
				updateNavAnimation("")
			}
		}
		onClick={()=>{
			document.querySelector("#"+props.id).classList.remove("hover:shadow-orange-500")
			document.querySelector("#"+props.id).classList.add("hover:shadow-green-500")
			props.updateDisplay(props.content)
			props.updateLeftCardAnimation({
				opacity:[0,1]
			})
		}}
		initial={
			{
				y:0,
				x:0,
				z:0
			}
		}
		animate={navAnimation}
		transition={
			{
				layout: {duration: 0.3}
			}
		}
		id={props.id} class="flex flex-row justify-center w-full hover:shadow-orange-500 hover:text-orange-500 hover:cursor-pointer my-4 w-full p-2 m-2 py-4 hover:bg-gray-100 hover:shadow-md hover:font-bold" >
			<li class="font-serif text-xl mr-10">{props.content}</li>
			<img class="h-8 -ml-7  rounded-full border-2 border-stone-900" src={props.iconsrc} />
		</motion.div>
		)
}

export default ProfileNavigationListItem