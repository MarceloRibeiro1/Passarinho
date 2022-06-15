import { FeedHeader } from "../FeedHeader";
import { TweetCreateFeed } from "../TweetCreateFeed";
import { TweetFeed } from "../../Tweets/TweetFeed";

export function FeedSpace(){
  return (
    <div className="w-4/6 flex flex-col gap-1 border-slate-100 border flex-shrink-0 flex-grow">
      <FeedHeader />

      <div>
        <TweetCreateFeed />

        <TweetFeed />
      </div>
    </div>
  )
}
