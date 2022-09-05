import Navbar from "../Navbar"
import Footer from "../Footer"

function About(props){

	return (
		<div>
			<Navbar location="about" name={props.name}/>
			<div class="flex flex-row mt-auto mb-auto h-screen">
				<h1>This is the aboutpage of novelx</h1>
			</div>
			<Footer />
		</div>
		)
}

export default About