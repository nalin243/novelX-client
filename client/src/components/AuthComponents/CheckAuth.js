import axios from "axios"
axios.defaults.withCredentials=true

import {useNavigate} from "react-router-dom"
import {useEffect} from "react"

function CheckAuth(props){

	const navigate = useNavigate()

	function goTo(path){
		navigate(path)
	}

	useEffect(()=>{
		axios.get("http://localhost:3001/checkauth").then((response)=>{
			console.log(`User authentication status: ${response.data.authenticated}`)
			if(response.data.authenticated){
				goTo("/home?user="+response.data.user.name)
			}
			else {
				goTo("/login")
			}
		},[])
	})

}

export default CheckAuth