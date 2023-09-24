import hamburger from "../../Assets/Images/hamburger.png"
import { toggleSideBar } from "../../utils/AppSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import SearchDropDown from "./SearchDropDown";
import { useSearchParams } from "react-router-dom";

const Header = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const searchKey = searchParams.get('search_query');
    const [searchValue,setSearchValue] = useState('');
    const [suggestions,setSuggestions] = useState([]);
    const [showSuggestions,setShowSuggestions] = useState(true);
    function toggleHamburger(){
        dispatch(toggleSideBar());
    }

    async function getAutoSuggestion(){
        try{
          const response = await fetch('http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='+ searchValue);
          const jsonResponse = await response.json();
          setSuggestions(jsonResponse?.[1]);

        }catch(error){
            console.log(error);
        }
    }

    function searchOnBlur(e){
         setTimeout(() => setShowSuggestions(false),200);
    }

    useEffect(() => {
       setSearchValue(searchKey);
    },[searchKey])

    useEffect(() => {
        const id = setTimeout(() => {
            getAutoSuggestion();
        },300);

        return () => clearTimeout(id);
    },[searchValue]);

    return (
        <div className="flex h-14 px-5 fixed z-50 w-full bg-white">
            <div className="flex h-14 justify-center items-center">
                <img onClick={() => toggleHamburger()} className="w-9 h-11 p-2 cursor-pointer" src={hamburger} alt="hamBurgerMenu"/>
                <img className="w-20 " src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="youtubeLogo"/>
            </div>
            <div className="flex flex-row-reverse items-center flex-auto justify-center">
                <div>
                <img className="p-2 h-8 rounded-r-full border border-gray-200" src="https://cdn-icons-png.flaticon.com/512/54/54481.png" alt="searchLogo"/>
                </div>
                <div className="flex flex-col w-96">
                    <input onChange={(e) => setSearchValue(e.target.value)} onFocus={() => setShowSuggestions(true)} onBlur={searchOnBlur} type="text" name="searchBar" className="border border-stone-400 rounded-l-full w-96 h-8  p-2" placeholder="Search" value={searchValue} autoComplete="off"/>
                    <div className="relative">
                        {showSuggestions && suggestions.length > 0 && <SearchDropDown options={suggestions}/>}
                    </div>
                </div>
            </div>
            <div>
                 <img className="h-12" src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="Person"/>
            </div>
        </div>
    );
}

export default Header;