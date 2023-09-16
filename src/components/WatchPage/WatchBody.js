
import { useSearchParams } from "react-router-dom";
import VideoDetails from "./VideoDetails";
import CommentsList from "./CommentsList";
import WatchPageSidebar from "./WatchPageSidebar";

const WatchBody = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get('v');
    return (
        <div className="col-span-11 ml-8 mt-4 overflow-scroll h-screen">
            <div className="grid grid-flow-col">
                <div className="col-span-8">
                    <iframe width="900" height="500" src={"https://www.youtube.com/embed/" + searchParams.get('v')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                     <VideoDetails id={videoId}/>
                     <CommentsList id={videoId}/>
                 </div>
                 <div className="col-span-4">
                    <WatchPageSidebar/>
                 </div>
            </div>
        </div>
    )
}

export default WatchBody;