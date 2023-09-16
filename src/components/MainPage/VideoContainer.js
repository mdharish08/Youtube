import { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import VideoCard from "./VideoCard";
import { youtubeApiKey } from "../../utils/Constants";
import { Link } from "react-router-dom";

const VideoContainer = () =>{
    const [allVideos,setAllVideos] = useState([]);
    async function getVideos(){
        const rawResponse = await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=' + youtubeApiKey+ '&maxResults=50');
        const response = await rawResponse.json();
        setAllVideos(response.items);
    }
    useEffect(() => {
       getVideos();
    },[]);
    return (
        <div className="col-span-11 ml-6 overflow-scroll h-screen">
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