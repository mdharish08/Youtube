import Reply from "./Reply"

const Replies = ({replies}) => {
    if(replies.length === 0){
        return <></>
    }
    return (
        <div className="ml-2">
            {replies.map((reply) => {
                return  <Reply key={reply.id} config={reply}/>
            })}
        </div>
    )
}
export default Replies;