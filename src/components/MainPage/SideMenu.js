import { useSelector } from "react-redux";

const SideMenu = () => {
    const isMenuOpen = useSelector((store) => {
        return store.app.isSideBarShowed
    });

    if(!isMenuOpen){
        return <></>
    }
    return (
       <div className="col-span-1 h-screen">
        <div className="flex flex-col p-3 ml-3">
            <ul className="shadow-sm">
                <li className="flex items-center">
                    <i className="fa fa-home text-lg"></i>
                    <div className="inline-block ml-3 p-2 w-full">Home</div>
                </li>
                <li className="flex items-center">
                    <i className="fa fa-youtube-play text-lg"></i>
                    <div className="inline-block ml-3 p-2 w-full">Shorts</div>
                </li>
                <li className="flex items-center">
                    <i className="fa fa-credit-card text-lg"></i>
                    <div className="inline-block ml-3 p-2 w-full">Subscription</div>
                </li>
            </ul>
            <ul className="shadow-sm border-b border-gray-300 mt-3 pt-2">
                <li className="flex items-center">
                    <i className="fa fa-book text-lg"></i>
                    <div className="inline-block ml-3 p-2 w-full">Library</div>
                </li>
                <li className="flex items-center">
                    <i className="fa fa-youtube-play text-lg"></i>
                    <div className="inline-block ml-3 p-2 w-full">History</div>
                </li>
                <li className="flex items-center">
                    <i className="fa fa-clipboard text-lg"></i>
                    <div className="inline-block ml-3 p-2 w-full">Watch later</div>
                </li>
                <li className="flex items-center">
                    <i className="fa fa-thumbs-up text-lg"></i>
                    <div className="inline-block ml-3 p-2 w-full">Liked videos</div>
                </li>
                <li className="flex items-center">
                    <i className="fa fa-plus text-lg"></i>
                    <div className="inline-block ml-3 p-2 w-full">New</div>
                </li>
            </ul>
            <ul className="shadow-sm border-b border-gray-300 mt-3 pt-2">
                <li className="flex items-center">
                    <i className="fa fa-book text-lg"></i>
                    <div className="inline-block ml-3 p-2 w-full">Library</div>
                </li>
                <li className="flex items-center">
                    <i className="fa fa-youtube-play text-lg"></i>
                    <div className="inline-block ml-3 p-2 w-full">History</div>
                </li>
                <li className="flex items-center">
                    <i className="fa fa-clipboard text-lg"></i>
                    <div className="inline-block ml-3 p-2 w-full">Watch later</div>
                </li>
                <li className="flex items-center">
                    <i className="fa fa-thumbs-up text-lg"></i>
                    <div className="inline-block ml-3 p-2 w-full">Liked videos</div>
                </li>
                <li className="flex items-center">
                    <i className="fa fa-plus text-lg"></i>
                    <div className="inline-block ml-3 p-2 w-full">New</div>
                </li>
            </ul>
        </div>
       </div>
    );
}

export default SideMenu;