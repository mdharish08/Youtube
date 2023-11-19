import { useEffect, useState ,useRef } from "react";
import ButtonList from "./ButtonList";
import VideoCard from "./VideoCard";
import { youtubeApiKey } from "../../utils/Constants";
import { Link } from "react-router-dom";

const VideoContainer = () =>{
    const [allVideos,setAllVideos] = useState([]);
    const isVideoFetching = useRef(false);
    const nextPageToken = useRef(null);

    async function getVideos(){
        isVideoFetching.current = true;
        let url = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=' + youtubeApiKey+ '&maxResults=50';
        if(!!nextPageToken.current){
            url += "&pageToken="+ nextPageToken.current;
        }
        const rawResponse = await fetch(url);
        const response = await rawResponse.json();
        nextPageToken.current = response.nextPageToken;
        setAllVideos((oldValue) => oldValue.concat(response.items));
        isVideoFetching.current = false;
    }
    function getVideosOnScroll(e){
        if(e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight && !isVideoFetching.current){
            getVideos();
        }
    }
    useEffect(() => {
       getVideos();
    },[]);
    return (
        <div className="col-span-11 ml-6 overflow-scroll h-screen" onScroll={getVideosOnScroll}>
            <ButtonList/>
            <div className="flex flex-wrap gap-7">
                { allVideos.map((video) => {
                    return<Link to={'/watch?v=' + video.id} key={video.id}> <VideoCard  video={video}/></Link>;
                })}
            </div>
        </div>
    )
}

export default VideoContainer;