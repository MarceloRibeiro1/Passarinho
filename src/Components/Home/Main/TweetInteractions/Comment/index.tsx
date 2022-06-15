import { ChatCircle } from "phosphor-react";
import { useDispatch } from "react-redux";
import { TweetPostInfo } from "../../../../../models";
import { select } from "../../../../../reducers/tweet";

interface CommentProps{
  PrimaryTweet: TweetPostInfo,
}

export function Comment({PrimaryTweet}: CommentProps) {
  const dispatch = useDispatch()
  function openCommentSection(){
    dispatch(select(PrimaryTweet))
  }


  return (
    <div className="">
      <button className="flex items-center gap-1" onClick={openCommentSection}>
        <div className="flex items-center gap-1 hover:text-blue-600 ">
          <div className="rounded-full p-1">
          <ChatCircle />
          </div>
          <div>{PrimaryTweet.comments}</div>
        </div>
      </button>
    </div>
  );
}