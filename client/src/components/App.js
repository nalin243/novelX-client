import Navbar from './Navbar'
import Footer from './Footer'

function App(props){

	//

	return (
		<div class="flex flex-wrap flex-col min-h-screen">
			<Navbar name={props.name}/>

			<Footer name={props.name}/>
		</div>
	)
}

export default App