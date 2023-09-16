import { useState,useEffect } from "react";
import { youtubeApiKey } from "../../utils/Constants";
import Comment from "./Comment";

const CommentsList = ({id}) => {
    const [commentsList,setCommentsList] = useState([]);

    async function getCommentsList(){
        const response = await fetch("https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=" + id + "&key=" + youtubeApiKey);
        const json = await response.json();
        console.log(json.items)
        setCommentsList(json.items);
    }
    useEffect(() => {
        getCommentsList();
    },[]);
    return (
        <div className="w-[900px] mt-3">
            {
                commentsList.map((comment) => {
                   return  <Comment key={comment.id} config={comment}/>
                })
            }
        </div>
    )
}

export default CommentsList;