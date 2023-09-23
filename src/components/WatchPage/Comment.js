import { useState } from "react";
import Replies from "./Replies";
import HTMLReactParser from "html-react-parser";

const Comment = ({config,isReply}) => {
    const snippet = config?.snippet;
    const replies = config?.replies?.comments || [];
    const totalReplyCount = snippet?.totalReplyCount || 0;
    const topLevelComment = snippet?.topLevelComment || {};
    const [showReplies,setShowReplies] = useState(false);

    function toggleButton(){
        setShowReplies(!showReplies);
    }
    return (
        <div className="flex mt-4 mb-2">
            <img className="w-10 h-10 rounded-full" alt="dp" src={topLevelComment?.snippet?.authorProfileImageUrl}/>
            <div className="ml-5 flex flex-col">
                <div>{topLevelComment?.snippet?.authorDisplayName}</div>
                <div className="line-clamp-2">{HTMLReactParser(topLevelComment?.snippet?.textDisplay)}</div>
                <div className="flex mt-3 items-center">
                    <i className="fa fa-thumbs-up cursor-pointer"> {" " + topLevelComment?.snippet?.likeCount || 0}</i>
                    <i className="fa fa-thumbs-down ml-5 cursor-pointer">{" " + (topLevelComment?.snippet?.dislikeCount || 0)}</i>
                    <div className="ml-6 cursor-pointer">Reply</div>
                </div>
                <div className="mt-1 text-start">
                    {replies.length > 0 ? (<button onClick={toggleButton}>{totalReplyCount} Replies</button>) : <></>}
                </div>
                {showReplies ? <Replies replies={replies}/> : <></>}
            </div>
        </div>
    )
}

export default Comment;