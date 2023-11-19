const Reply = ({config}) => {
    const snippet = config?.snippet;
    return (
        <div className="flex h-28 mt-4">
            <img className="w-10 h-10 rounded-full" alt="dp" src={snippet?.authorProfileImageUrl}/>
            <div className="ml-5 flex flex-col">
                <div>{snippet?.authorDisplayName}</div>
                <div className="line-clamp-2">{snippet?.textDisplay}</div>
                <div className="flex mt-3 items-center">
                    <i className="fa fa-thumbs-up cursor-pointer"> {" " + snippet?.likeCount || 0}</i>
                    <i className="fa fa-thumbs-down ml-5 cursor-pointer">{" " + (snippet?.dislikeCount || 0)}</i>
                    <div className="ml-6 cursor-pointer">Reply</div>
                </div>
            </div>
        </div>
    )
}

export default Reply;