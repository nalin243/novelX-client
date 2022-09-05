import Navbar from "../Navbar"
import Footer from "../Footer"

function Contact(props){

	return (
		<div>
			<Navbar location="Contact" name={props.name}/>
			<div class="flex flex-row mt-auto mb-auto h-screen">
				<h1>This is the Contactpage of novelx</h1>
			</div>
			<Footer />
		</div>
		)
}

export default Contact