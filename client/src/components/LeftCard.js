
import MyLibrary from './LeftCardChildComponents/MyLibrary'
import MyProfile from './LeftCardChildComponents/MyProfile'
import SearchArea from './LeftCardChildComponents/SearchArea'

function LeftCard(props){

	const childComponents = new Map()
	
	childComponents.set("My Library",(<MyLibrary/>))
	childComponents.set("My Profile",(<MyProfile/>))
	childComponents.set("Search Area",(<SearchArea searchText={props.searchText}/>))

	return (
		<div class="flex flex-3 bg-black justify-center w-3/4 h-4/6 md:h-4/6 xl:h-4/6  mr-auto mr-1 ml-6 mt-12 overflow rounded-lg border-2 border-gray-300 shadow-slate-500 shadow-2xl drop-shadow-3xl">
			{
				childComponents.get(props.display)
			}
		</div>
		)
}

export default LeftCard