function Navbar(props){
	return (

		<nav class="flex-2  bg-black border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900 ">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <a href="#" class="flex items-center">
        <img src="https://media.istockphoto.com/vectors/book-icon-on-black-background-black-flat-style-vector-illustration-vector-id1161092529?k=20&m=1161092529&s=170667a&w=0&h=5V6SrBU8z5LBC5k-lsfn4FohaNlGJCTYreD4njNbXBE=" class="mr-4 h-6 hover:border-red-700 sm:h-9 rounded-full bg-white border border-white-50 shadow-3xl"/>
        <span class="text-white self-center text-xl font-semibold whitespace-nowrap dark:text-white">{props.name}</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 bg-black rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a id="home" href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:hover:text-orange-500 md:p-0 dark:text-white" aria-current="page">Home</a>
        </li>
        <li>
          <a id="about" href="#" class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a id="contact" href="#" class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
        <div class="flex">
        <input id="search-bar" class="rounded-md  p-1" />
        <div class="flex bg-white rounded-full items-center px-1 ml-2">
        <img onClick={()=>{
          //CODE FOR SEARCHING ONCLICK STUFF
          props.updateDisplay("Search Area")
          props.updateLeftCardAnimation({
            opacity:[0,1]
          })

          const searchResult = (document.querySelector("#search-bar").value).split(" ").join("+")

          if(searchResult!==""){

            fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchResult}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
              .then((response)=>response.json())
              .then((data)=>props.updateSearchResult(data))
          }
          else
            alert("Type something you moron...")
          
          document.querySelector("#search-bar").value = ""//clean up search bar after search
          props.updateSearchResult("")//clean up searchText after search
        }
      }

        class="hover:cursor-pointer h-5 rounded-xl border-1 border-gray-100 bg-white" src="data:image/png;base64,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"/>
        </div>
        </div>
      </ul>
    </div>
  </div>
</nav>

		)
}

export default Navbar