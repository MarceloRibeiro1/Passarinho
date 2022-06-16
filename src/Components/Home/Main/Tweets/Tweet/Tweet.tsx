import { TweetPostInfo } from "../../../../../models";
import { TweetInteractButtons } from "../TweetInteractButtons";
import dayjs from 'dayjs';
interface TweetProps extends React.BaseHTMLAttributes<HTMLDivElement>{
  postInfo: TweetPostInfo
}

export function Tweet({postInfo}: TweetProps){


  function getTimeDifference(){
    const timeDifference = dayjs(new Date()).diff(postInfo.createdAt, "seconds")
    if ( timeDifference < 60)
      return ". " + timeDifference + "sec"
    else if ( timeDifference < 3600 )
      return ". " + dayjs(new Date()).diff(postInfo.createdAt, "minute") + " min"
    else if ( timeDifference < 3600*24 )
      return ". " + dayjs(new Date()).diff(postInfo.createdAt, "hour") + " h"
    else
      return ". " + dayjs(new Date()).diff(postInfo.createdAt, "day") + " d"

  }

  const time = getTimeDifference()

  return(
    <article className="border border-x-0 border-t-0 border-slate-200 pb-2">
      <div className="flex mx-4">
        
        <div className="flex-shrink-0">
          <img src={postInfo.userPhoto} className="w-20 p-3 rounded-full" />
        </div>
        
        
        <div className="flex flex-col pt-2">


          <div className="flex gap-2">
            <button className="font-sans font-bold hover:underline">{postInfo.name}</button>
            <span className="font-sans font-light">@{postInfo.username}</span>
            <span className="font-sans font-light hover:underline">{time}</span>
          </div>

          <div  className="font-sans font-light">{postInfo.responseTo ? "resposta" : ""}</div>

          <div className="">
            {postInfo.content}
          </div>

          <TweetInteractButtons postInfo={postInfo} />
        </div>
      </div>
    </article>
  )

}