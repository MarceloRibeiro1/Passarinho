import { TweetPostInfo } from "../../../../../models";
import { Comment } from "../../TweetInteractions/Comment";
import { ExportTweet } from "../../TweetInteractions/ExportTweet";
import { Like } from "../../TweetInteractions/Like";
import { Repost } from "../../TweetInteractions/Repost";

interface TweetInteractButtonsProps{
    postInfo: TweetPostInfo,
}
export function TweetInteractButtons({postInfo}: TweetInteractButtonsProps) {

  return (
    <div className="flex justify-between pt-1 pr-32 gap-4 w-[400px]">
      <Comment PrimaryTweet={postInfo}/> 
      <Repost />
      <Like postId={postInfo.id}/>
      <ExportTweet />
    </div>
  );
}