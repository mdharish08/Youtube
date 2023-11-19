import { Link } from "react-router-dom";

const SearchDropDown = ({options}) => {
    return (
        <div className="absolute bg-white w-96 max-h-96 z-30 overflow-scroll border border-gray-200 shadow-2xl rounded-lg">
            <div className="flex flex-col mt-1">
                {options && options.map( (option,index) => {
                    return (
                     <Link to={'/results?search_query='+option} key={index} className="px-2 py-1 dropDown">
                         <span>{option}</span>
                     </Link>);
              })}
            </div>
        </div>
    )
}

export default SearchDropDown;