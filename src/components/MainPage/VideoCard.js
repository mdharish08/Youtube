const VideoCard = ({video}) =>{
    let snippet = video.snippet;
    let statistics = video.statistics;
    let timeStamp = new Date(snippet.publishedAt);
    let dateNow = new Date();
    let diffTime = Math.abs(dateNow - timeStamp)
    let days = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return (
       <div className="w-72">
          <img className="w-72 h-52 rounded-lg" alt={snippet.title} src={snippet?.thumbnails?.standard?.url} />
          <div className="my-1 h-6 overflow-hidden whitespace-nowrap overflow-ellipsis">
             {snippet.title}
          </div>
          <div className="my-1">
            {snippet.channelTitle}
          </div>
          <div className="flex justify-between">
            <div>{statistics.viewCount/1000}k views</div>
            <div className="mr-2">{days}days ago</div>
          </div>
       </div>
    )
}

export default VideoCard;