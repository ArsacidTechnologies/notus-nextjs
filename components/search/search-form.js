import PropTypes from 'prop-types';
import { SearchIcon } from '../icons';
import Router from "next/router";
import { useState, useContext , useEffect} from "react";
import { useRouter } from 'next/router';
var myTimeout = {}

const SearchForm = ( {searchStr} ) => {

  const router = useRouter()

  const [ searchQuery, setSearchQuery ] = useState(router.query.s);
  const handleSearchFormSubmit = (event) => {
    //event.preventDefault();
    Router.push({
      pathname: '/search',
      query: { s: searchQuery, 
                 
      },
  } );
    return null;
  };
  const something=(event)=> {
    if (event.keyCode === 13) {
        //console.log('enter',searchQuery)
        handleSearchFormSubmit()
    }
}
  // useEffect(() => {
  //   const listener = event => {
  //     if (event.code === "Enter" || event.code === "NumpadEnter") {
  //       //setSearchQuery()
        
  //       handleSearchFormSubmit()
  //       // console.log("Enter key was pressed. Run your function.");
  //       event.preventDefault();
  //       // callMyFunction();
  //     }
  //   };
  //   document.addEventListener("keydown", listener);
  //   return () => {
  //     document.removeEventListener("keydown", listener);
  //   };
  // }, []);

  useEffect(() => {
    // clearTimeout(myTimeout)
    // if(searchQuery?.length>=3){
          
    // myTimeout = setTimeout(handleSearchFormSubmit(),300)
    // }


  }, [searchQuery])

  return (  
    <div className="flex w-full border-2 border-gray-400 rounded-lg   p-1 relative  text-gray-600 ">
    <button onSubmit={handleSearchFormSubmit} onClick={handleSearchFormSubmit} 
    type="submit"
    className="flex right-0 top-0  mr-0  border-l justify-start"
    >
    <SearchIcon></SearchIcon>
    </button>
    <input
    className="flex bg-white h-5 px-5 w-full justify-center text-sm focus:outline-none  font-Vazir"
    type="search"
    name="search"
    value={searchQuery}
    onChange={(event)=>setSearchQuery(event.target.value)}
    onKeyDown={(e) => something(e)}
    //onSubmit={(event)=>handleSearchFormSubmit(event)}
    placeholder="جستجو"
    />

    </div>

    // <form className="flex w-full justify-center" onSubmit={handleSearchFormSubmit}>
    //   <div className="block relative w-4/5">
    //         <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
    //           <SearchIcon className="h-4 w-4 fill-current text-gray-500"/>
    //         </span>
    //     <input
    //       placeholder="Search..."
    //       value={searchQuery}
    //       onChange={( event ) => setSearchQuery( event.target.value )}
    //       className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"/>
    //   </div>
    //   <input
    //     type="submit"
    //     value="Search"
    //     onClick={handleSearchFormSubmit}
    //     className="cursor-pointer	text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"/>
    // </form>
  );
};

SearchForm.propTypes = {
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func,
  handleSearchFormSubmit: PropTypes.func
};

SearchForm.defaultProps = {
  searchQuery: '',
  setSearchQuery: () => null,
  handleSearchFormSubmit: () => null
};

export default SearchForm;
