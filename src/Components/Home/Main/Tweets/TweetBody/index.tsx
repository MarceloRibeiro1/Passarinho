import { TweetPostInfo } from "../../../../../models";

interface TweetBodyProps {
    postInfo: TweetPostInfo
}

export function TweetBody({postInfo}: TweetBodyProps) {
    return ( 
    <div className="flex">
        <div className="flex-shrink-0">
          <img src={postInfo.userPhoto} className="w-20 p-3 rounded-full" />
        </div>
        
        
        <div className="flex flex-col">



          <div className="flex gap-2">
            <button className="font-sans font-bold hover:underline">{postInfo.name}</button>
            <span className="font-sans font-light">@{postInfo.username}</span>
            <span className="font-sans font-light hover:underline">30 min</span>
          </div>

          <div  className="font-sans font-light text-sm">{postInfo.responseTo ? "resposta" : ""}</div>

          <div className="">
            {postInfo.content}
          </div>
        </div>
    </div> );
}

