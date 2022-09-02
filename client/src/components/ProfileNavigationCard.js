
import ProfileNavigationListItem from './ProfileInfoCardChildComponents/ProfileNavigationListItem'

function ProfileNavigationCard(props){

	const listitems = []
	const contents = ["My Profile","My Library","Sign Out"]
	for(let i=0;i<3;i++){
		listitems.push(<ProfileNavigationListItem updateDisplay={props.updateDisplay}id={contents[i]} content={contents[i]}/>)
	}
	return (
		<div class="lg:flex-2 flex-1 h-4/6 md:h-4/6 xl:h-4/6 mb-10 w-1/5 ml-auto ml-1 mr-6 mt-12 rounded rounded-lg overflow-y-auto w-full lg:block lg:w-auto border-2 border-gray-300 shadow-slate-700 shadow-2xl drop-shadow-3xl">
			{/*<div class="m-40">
			</div>*/}

			<div class="text-right mr-4">
			<div class="mt-10">
				<h1 class="font-serif text-2xl">{props.username}</h1>
			</div>
				<ul class="flex flex-col justify-center mt-10">
					{listitems.map((item)=>{
						return item
					})}
				</ul>
			</div>

		</div>


		)
}

export default ProfileNavigationCard