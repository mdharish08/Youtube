import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideMenu = () => {
    const isMenuOpen = useSelector((store) => {
        return store.app.isSideBarShowed
    });

    if(!isMenuOpen){
        return <></>
    }
    return (
       <div className="w-56">
        <div className="flex flex-col p-3 ml-3">
            <ul className="shadow-sm">
                <li className="flex items-center">
                    <i className="fa fa-home text-lg"></i>
                   <Link to="/"><div className="inline-block ml-3 p-2 w-full hover:font-bold hover:cursor-pointer">Home</div></Link>
                </li>
                <li className="flex items-center">
                    <i className="fa fa-youtube-play text-lg"></i>
                    <div className="inline-block ml-3 p-2 w-full hover:font-bold hover:cursor-pointer">Shorts</div>
                </li>
                <li className="flex items-center">
                    <i className="fa fa-credit-card text-lg"></i>
                    <div className="inline-block ml-3 p-2 w-full hover:font-bold hover:cursor-pointer">Subscription</div>
                </li>
            </ul>
            <ul className="shadow-sm border-b border-gray-300 mt-7 pt-2">
                <li className="flex items-center">
                    <i className="fa fa-book text-lg"></i>
                    <div className="inline-block ml-3 p-2 w-full hover:font-bold hover:cursor-pointer">Library</div>
                </li>
                <li className="flex items-center">
                    <i className="fa fa-youtube-play text-lg"></i>
                    <div className="inline-block ml-3 p-2 w-full hover:font-bold hover:cursor-pointer">History</div>
                </li>
                <li className="flex items-center">
                    <i className="fa fa-clipboard text-lg"></i>
                    <div className="inline-block ml-3 p-2 w-full hover:font-bold hover:cursor-pointer">Watch later</div>
                </li>
                <li className="flex items-center">
                    <i className="fa fa-thumbs-up text-lg"></i>
                    <div className="inline-block ml-3 p-2 w-full hover:font-bold hover:cursor-pointer">Liked videos</div>
                </li>
                <li className="flex items-center">
                    <i className="fa fa-plus text-lg"></i>
                    <div className="inline-block ml-3 p-2 w-full hover:font-bold hover:cursor-pointer">New</div>
                </li>
            </ul>
            <ul className="shadow-sm border-b border-gray-300 mt-7 pt-2">
                <li className="flex items-center">
                    <i className="fa fa-book text-lg"></i>
                    <div className="inline-block ml-3 p-2 w-full hover:font-bold hover:cursor-pointer">Library</div>
                </li>
                <li className="flex items-center">
                    <i className="fa fa-youtube-play text-lg"></i>
                    <div className="inline-block ml-3 p-2 w-full hover:font-bold hover:cursor-pointer">History</div>
                </li>
                <li className="flex items-center">
                    <i className="fa fa-clipboard text-lg"></i>
                    <div className="inline-block ml-3 p-2 w-full hover:font-bold hover:cursor-pointer">Watch later</div>
                </li>
                <li className="flex items-center">
                    <i className="fa fa-thumbs-up text-lg"></i>
                    <div className="inline-block ml-3 p-2 w-full hover:font-bold hover:cursor-pointer">Liked videos</div>
                </li>
                <li className="flex items-center">
                    <i className="fa fa-plus text-lg"></i>
                    <div className="inline-block ml-3 p-2 w-full hover:font-bold hover:cursor-pointer">New</div>
                </li>
            </ul>
        </div>
       </div>
    );
}

export default SideMenu;