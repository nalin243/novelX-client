import {motion} from "framer-motion"
import {useState,useEffect} from "react"

import {useNavigate} from "react-router-dom"

import axios from "axios"
axios.defaults.withCredentials=true

function ProfileNavigationListItem(props){

	const navigate = useNavigate()

	function goTo(path){
		navigate(path)
	}

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
			if(props.id === "SignOut"){
				axios.get(process.env.REACT_APP_SERVER_URL+"signout").then((response)=>{
					if(response.data.status)
						goTo("/authcheck")
				})
			}
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
			<img class="h-8 -mr-7  rounded-full border-2 border-stone-900" src={props.iconsrc} />
			<li class="font-serif text-xl ml-10">{props.content}</li>
		</motion.div>
		)
}

export default ProfileNavigationListItem