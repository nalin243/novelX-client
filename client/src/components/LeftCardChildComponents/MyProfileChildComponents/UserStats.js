
import axios from "axios"
import {useEffect,useState} from "react"

import {motion} from "framer-motion"

function UserStats(props) {

	const [loadingState,updateLoadingState] = useState(true)

	const [bookCount,updateBookCount] = useState(0)
	const [readCount,updateReadCount] = useState(0)

	const query = new URLSearchParams("?"+(window.location.href).split('?')[1])
	const username = query.get("user")

	function getReadCount(lib){
		let count = 0
		lib.forEach((item)=>{
			if(item.Read)
				count += 1
		})
		return count
	}

	useEffect(()=>{
		axios.post(process.env.REACT_APP_SERVER_URL+"getLibrary",{username, username})
			.then((response)=>{
				updateBookCount(response.data.Library.length)
				updateReadCount(getReadCount(response.data.Library))
				updateLoadingState(false)
			})
	},[])

	if(!loadingState){
		return (
		<div class="mt-16 flex-1 flex justify-end h-inherit mr-60">
			<div class="bg-gray-300 border-2 border-slate-400 shadow-slate-400 hover:shadow-orange-400 shadow-md rounded-md h-inherit mr-10 ml-10 mt-11 h-3/6 w-11/12 mt-5">
				<h5 class="font-serif ml-5 mt-5">Number of Books: {" "+bookCount}</h5>
				<h5 class="font-serif ml-5 mt-5">Number of Books Read: {" "+readCount}</h5>
				<h5 class="font-serif ml-5 mt-5" >Favorite Genres: </h5>
			</div>
		</div>
		)
	}
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
			} class="flex flex-wrap justify-center h-inherit w-full m-10">
				<img class="h-40 w-40 m-auto" src="https://c.tenor.com/5o2p0tH5LFQAAAAi/hug.gif" />

			</motion.div>
		)

}

export default UserStats