const ToggleCommentButton = ({isOpened,totalReplyCount,toggle}) => {
    return (
        <>
            <button onClick={() => toggle(!isOpened)}>{isOpened ? '^' : '>' }{totalReplyCount} Replies</button>
        </>
    ) 
}

export default ToggleCommentButton;