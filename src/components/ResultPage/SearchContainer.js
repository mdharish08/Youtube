import { useEffect , useState} from "react";
import { useSearchParams } from "react-router-dom";
import { youtubeApiKey } from "../../utils/Constants"; 
import { Link } from "react-router-dom";
import SearchCard from "./SearchCard";
import ButtonList from "../MainPage/ButtonList";

const SearchButtonList = () => {
    return (
     <div className="flex">
         {<ButtonList/>}
     </div> 
    )
 }

const SearchContainer = () => {
    const [searchParams] = useSearchParams();
    const searchKey = searchParams.get('search_query');
    const [searchResults,setSearchResults] = useState([]);

    async function getSearchResults(){
        try{
            const response = await fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q='+searchKey +'&type=video&key=' + youtubeApiKey );
            const jsonResponse = await response.json();
            setSearchResults(jsonResponse?.items);
        }catch(error){
            //Need to do error handling
        }
    }
    
    useEffect(() => {
        getSearchResults();
    },[searchKey])

    return (
        <div className="col-span-11 flex flex-col max-h-screen overflow-scroll ml-4">
        {<SearchButtonList/>}
        { 
            searchResults.length > 0 && searchResults.map((item) => {
                return (
                    <Link to={'/watch?v='+ item?.id?.videoId} key={item?.id?.videoId}>
                        <SearchCard config={item?.snippet || {}}/>
                    </Link>
                )
           })
        }
        </div>
    )
}

export default SearchContainer;