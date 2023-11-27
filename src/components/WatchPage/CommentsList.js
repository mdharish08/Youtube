import { useState, useEffect, useRef} from "react";
import { youtubeApiKey } from "../../utils/Constants";
import Comment from "./Comment";

const CommentsList = ({id}) => {
    const [commentsList,setCommentsList] = useState([]);
    const commentsRef = useRef([]);
    const nextPageToken = useRef(null);
    const isFetching = useRef(false);
    function  attachScrollEvent(){
        const el = document.querySelector('[data-api="comment"]');
        if(!!el){
            el.addEventListener("scroll",(e) => {
                console.log(e.target.scrollHeight - e.target.scrollTop, e.target.clientHeight)
                if(e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight && !isFetching.current){
                    getCommentsList();
                }
            });
        }

    }
    async function getCommentsList(){
        if(!id){
            return;
        }
        isFetching.current = true;
        let url = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=" + id + "&key=" + youtubeApiKey;
        if(!!nextPageToken.current){
            url += "&pageToken=" + nextPageToken.current;
        }
        const response = await fetch(url);
        const json = await response.json();
        nextPageToken.current = json?.nextPageToken;
        commentsRef.current = commentsRef.current.concat(json.items);
        setCommentsList(commentsRef.current);
        isFetching.current = false;
    }
    useEffect(() => {
        getCommentsList();
        attachScrollEvent();
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