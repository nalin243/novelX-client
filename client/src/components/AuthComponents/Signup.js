import axios from "axios"
axios.defaults.withCredentials=true

import {useNavigate} from "react-router-dom"
import {useEffect} from "react"

function Signup(props){

	const navigate = useNavigate()

	function goTo(path){
		navigate(path)
	}

	function handleClick(){

	const username = document.querySelector("#username").value
	const password = document.querySelector("#password").value

	axios.post(process.env.REACT_APP_SERVER_URL+"signup",{username:username,password:password})
		.then((response)=>{
			if(response.data.status === 200){
				goTo("/login")
			}
		})
	}

	return (
			<div class="flex flex-col justify-center h-screen bg-gray-400">
				<div class="flex justify-center sm:h-1 sm:w-1/6 h-5/6 w-1/2 mr-auto ml-auto">
					<div class="flex flex-col rounded-lg bg-black justify-center m-auto border-2 border-gray-500 p-40">
						<div>
						<h3 class="text-white text-center -mt-20 text-3xl" >Signup</h3>
						</div>
						<label class="mb-3 text-white">Username</label>
						<input class="rounded-md" type="text" placeholder="Username" id="username" />

						<label class="mb-3 mt-10 text-white">Password</label>
						<input placeholder="Password" class="rounded-md" type="password" id="password" />

						<button class="hover:shadow-orange-500 hover:shadow-md hover:translate-x-0.5 hover:translate-y-0.5 hover:text-orange-500 bg-white border-2 py-2 text-lg border-gray-500 rounded-md mt-10 w-1/2 m-auto" onClick={handleClick}>Sign Up</button>
					</div>
				</div>
				
			</div>

		)

}

export default Signup