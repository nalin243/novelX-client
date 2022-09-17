
import BookCard from './LibraryChildComponents/BookCard'
import Modal from './LibraryChildComponents/Modal'

import {motion} from 'framer-motion'

import axios from "axios"
import {useState,useEffect} from "react"

function Library(props){

	if(props.library){
		const [loadingState,updateLoadingState] = useState(true)//start in loading mode
		const [lib,updateLib] = useState()

		const childComponents = new Map()

		// for(let i=0;i<3;i++){
		// 	cards.push(<BookCard libraryModal={true} idno={i} imagesrc="https://img.webnovel.com/bookcover/11530348105422805/300/300.jpg?updateTime=1562664192135" bookname="My House of Horrors"/>)
		// }

		const query = new URLSearchParams("?"+(window.location.href).split('?')[1])
		const username = query.get("user")

		useEffect(()=>{//after component has mounted and displayed loading state then fetch data from api
			axios.post(process.env.REACT_APP_SERVER_URL+"getlibrary",{username: username})
				.then((response)=>{
					updateLib(response.data.Library)
					updateLoadingState(false)
				})
				.catch((err)=>{
					console.log("error in getting library")
					console.log(err)
				})
		},[])

		if(!loadingState){//if not in loading state then push library data to display
			for(let i=0;i<lib.length;i++){
				props.cards.push(<BookCard libraryModal={true} idno={i} book={lib[i]} imagesrc={lib[i].Cover} bookname={lib[i].name} />)
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
				} class="flex flex-wrap  justify-left h-inherit w-full m-10">
					{
						props.cards
					}

				</motion.div>
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
			} class="flex flex-wrap  justify-center h-inherit w-full m-10">
				<img class="h-40 w-40 m-auto" src="https://c.tenor.com/5o2p0tH5LFQAAAAi/hug.gif" />

			</motion.div>
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
				} class="flex flex-wrap  justify-left h-inherit w-full m-10">
					{
						props.cards
					}

				</motion.div>
			)


}

export default Library