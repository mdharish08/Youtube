import hamburger from "../../Assets/Images/hamburger.png"
import { toggleSideBar } from "../../utils/AppSlice";
import { useDispatch } from "react-redux";
const Header = () => {
    const dispatch = useDispatch();
    function toggleHamburger(){
        dispatch(toggleSideBar());
    }
    return (
        <div className="flex h-14 px-5 fixed z-50 w-full bg-white">
            <div className="flex h-14 justify-center items-center">
                <img onClick={() => toggleHamburger()} className="w-9 h-11 p-2 cursor-pointer" src={hamburger} alt="hamBurgerMenu"/>
                <img className="w-20 " src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="youtubeLogo"/>
            </div>
            <div className="flex flex-row-reverse items-center flex-auto justify-center">
                <img className="p-2 h-8 mr-16 rounded-r-full border border-gray-200" src="https://cdn-icons-png.flaticon.com/512/54/54481.png" alt="searchLogo"/>
                 <input type="text" name="searchBar" className="border border-stone-400 rounded-l-full h-8 w-1/3 p-2" placeholder="Search"/>
            </div>
            <div>
                 <img className="h-12" src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="Person"/>
            </div>
        </div>
    );
}

export default Header;