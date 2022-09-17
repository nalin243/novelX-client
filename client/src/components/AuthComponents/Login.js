import axios from "axios"
axios.defaults.withCredentials=true

import {useNavigate} from "react-router-dom"
import {useEffect} from "react"

function Login(props){

	const navigate = useNavigate()

	function goTo(path){
		navigate(path)
	}

	function handleClick(){

	const username = document.querySelector("#username").value
	const password = document.querySelector("#password").value

	axios.post(process.env.REACT_APP_SERVER_URL+"login",{username:username,password:password})
		.then((response)=>{
			if(response.data.user !== undefined){
				console.log(response)
				console.log("goooo")
				goTo("/home?user="+response.data.user.name)
			}
		})
		.catch((err)=>{
			if(err.response !==undefined){
			if(err.response.status === 401){
				console.log(err)
				alert("Wrong password")
			}
		}
		})
	}
	return (
			<div class="flex flex-col justify-center h-screen bg-gray-400">
				<div class="flex justify-center h-5/6 w-1/2 mr-auto ml-auto">
					<div class="flex flex-col rounded-lg bg-black justify-center m-auto border-2 border-gray-500 p-40">
						<div>
						<h3 class="text-white text-center -mt-20 text-4xl" >Login</h3>
						</div>
						<label class="mb-3 text-white">Username</label>
						<input class="rounded-md" type="text" placeholder="Username" id="username" />

						<label class="mb-3 mt-10 text-white">Password</label>
						<input placeholder="Password" class="rounded-md" type="password" id="password" />

						<div class="flex">
						<button class="hover:shadow-orange-500 hover:shadow-md hover:translate-x-0.5 hover:translate-y-0.5 hover:text-orange-500 bg-white border-2 py-2 text-lg border-gray-500 rounded-md mt-20 mr-6 -mb-0.5 w-1/2 m-auto" onClick={handleClick}>Sign In</button>
						<button class="hover:shadow-orange-500 hover:shadow-md hover:translate-x-0.5 hover:translate-y-0.5 hover:text-orange-500 bg-white border-2 py-2 text-lg border-gray-500 rounded-md -mb-0.5 w-1/2 m-auto" onClick={()=>goTo("/signup")}>Register</button>
						</div>
					</div>
				</div>
				
			</div>

		)

}

export default Login