import { getUiDate } from "../Utilities/Common";

const SearchCard = ({config}) => {
    return (
        <div className="flex w-full h-[250px]">
            <img className="w-[360px] h-[200px] border rounded-xl" src={config?.thumbnails?.medium?.url} alt="videoDetails"/>
            <div className="w-full flex flex-col ml-3">
                <div className="text-xl max-h-14 w-3/4 line-clamp-2">{config?.title}</div>
                <div>{getUiDate(config?.publishedAt)}</div>
                <div className="my-3">{config?.channelTitle}</div>
                <div className="line-clamp-3 text-sm w-3/4">{config?.description}</div>
            </div>
        </div>
    )
}

export default SearchCard;