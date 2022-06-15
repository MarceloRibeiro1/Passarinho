import { MainHeader } from "../../Components/Home/Headder/MainHeader";
import { MainPage } from "../../Components/Home/Main/MainPage";
import { TweetResponsePanel } from "../../Components/Home/Main/TweetInteractions/TweetResponsePanel";


export function HomePage(){
  return (
    <div className="flex gap-4 relative">
      <MainHeader />
      <main className="flex justify-between relative flex-grow-[2]">
        <MainPage />
      </main>
      <TweetResponsePanel />
    </div>
  )
}