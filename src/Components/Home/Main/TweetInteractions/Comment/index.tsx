import { ChatCircle } from "phosphor-react";
import { useDispatch } from "react-redux";
import { api } from "../../../../../lib/api";
import { TweetPostInfo } from "../../../../../models";
import { select } from "../../../../../reducers/tweet";

interface CommentProps{
  PrimaryTweet: TweetPostInfo,
}

export function Comment({PrimaryTweet}: CommentProps) {
  const dispatch = useDispatch()

  async function openCommentSection(){
    try {
      const response = await api.get("/tweetdialog", {
        params: { postId: PrimaryTweet.id },
      });

      dispatch(select(response.data.post))
    } catch (e) {
      console.error(e);
    }
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