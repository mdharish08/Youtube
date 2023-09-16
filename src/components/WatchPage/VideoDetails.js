import { useEffect,useState } from "react";
import { youtubeApiKey } from "../../utils/Constants";

const VideoDetails = ({id}) => {
    const [videoDetails,setVideoDetails] = useState({});
    const [channelDetails,setChannelDetails] = useState({});
    const [channelId,setChannelId] = useState(null);
    async function getVideoDetails(){
        const result = await fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id='+  id + '&key=' + youtubeApiKey);
        const json = await result.json();
        console.log(json.items[0]);
        setChannelId(json?.items?.[0]?.snippet?.channelId);
        setVideoDetails(json?.items?.[0]);
    }

    function getDateString(param){
        const monthNames = ["January", "February", "March", "April", "May", "June",
         "July", "August", "September", "October", "November", "December"
        ];
        let date = new Date(param);
        return monthNames[date.getMonth()] + ' ' +  date.getDay() + ', ' + date.getFullYear();
    }
    async function getChannelDetails(channelId){
        const result = await fetch('https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics%2CcontentOwnerDetails&id='+ channelId +'&key=' + youtubeApiKey);
        const json = await result.json();
        setChannelDetails(json.items[0]);
    }
    useEffect(() => {
        getVideoDetails();
    },[]);

    useEffect(() => {
        if(channelId != null){
           getChannelDetails(channelId);
        }
    },[channelId]);

    if(Object.keys(videoDetails).length === 0 ){
        return (
            <div className="w-[900px] p-2 mt-6 bg-slate-200 h-48 rounded-lg">
            </div>
        )
    }
    return (
            <>
             <div className="w-[900px] p-2 mt-6 h-20">
                 <div className="text-2xl line-clamp-2">{videoDetails?.snippet?.title}</div>
            </div>
            {
                Object.keys(channelDetails).length > 0 ?
                 <div className="flex w-[900px] p-2 mt-2 h-16">
                    <img className="w-12 h-12 rounded-full"alt="cnl logo" src={channelDetails?.snippet?.thumbnails?.default?.url}/>
                    <div className="ml-3 flex flex-col w-34">
                        <div className="">{channelDetails?.snippet?.title}</div>
                        <div className="text-sm">{channelDetails?.statistics?.subscriberCount ? channelDetails?.statistics?.subscriberCount/1000 + 'K' : '0'} Subscribers</div>
                    </div>
                    <div className="ml-10">
                        <button className="p-3 w-46 bg-black text-white rounded-full">Subscribe</button>
                    </div>
                 </div> :  <div className="flex w-[900px] p-2 mt-2 h-7 bg-slate-200">
                 </div>
            }
            <div className="w-[900px] whitespace-pre-wrap mt-3">
              <div className="flex font-semibold text-lg">
                <div>{Number(videoDetails?.statistics?.viewCount).toLocaleString()} views</div>
                <div className="ml-2">{getDateString(videoDetails?.snippet?.publishedAt)}</div>

              </div>
              <div className="mt-1">
                {videoDetails?.snippet?.description}
              </div>
              <div className="mt-2 text-lg flex">
                <div>{videoDetails?.statistics?.commentCount} Comments</div>
                <div className="ml-5">Sort by</div>
              </div>
            </div>
            </>
            
    )
}

export default VideoDetails;