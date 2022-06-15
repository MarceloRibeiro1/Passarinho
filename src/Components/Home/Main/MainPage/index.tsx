import { AsideSubjects } from "../AsideSubjects";
import { FeedSpace } from "../MainFeed/FeedSpace";

export function MainPage(){
    return (
    <div className="flex justify-between relative ">
      <FeedSpace />
      <AsideSubjects />
    </div>
    )
}