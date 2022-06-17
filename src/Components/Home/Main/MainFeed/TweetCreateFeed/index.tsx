import { CalendarBlank, ChartBarHorizontal, Gif, Image, MapPin, Smiley, TwitterLogo } from "phosphor-react";
import { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { api } from "../../../../../lib/api";
import socket from "../../../../../lib/socketio";
import { selectUser } from "../../../../../reducers/user";

export function TweetCreateFeed() {
  const[tweetTextContent, setTweetTextContent] = useState("")
  const user = useSelector(selectUser)

  function sendTweet(event: FormEvent){
    event.preventDefault()
    
    try{
      api.post('/tweet',{
        content: tweetTextContent,
        image: undefined,
        user: {
          userId: user.userId,
          username: user.username,
          auth_token: user.auth_token,
        }
      })
      setTweetTextContent("")
      socket.emit("new_post")
    }
    catch (e){
      console.error(e)
    }
  }

  return (
    <article className="flex px-4 border border-slate-200 border-t-0 border-l-0 border-r-0">
        <div className="flex-grow-0 p-2 py-4 flex-shrink-0 rounded-full flex justify-center">
          <img src={user.userPhoto} className="w-14 h-14 rounded-full"/>
        </div>

        <form className="flex-1 px-2" onSubmit={sendTweet}>

          <input value={tweetTextContent} className="w-full h-20 focus:outline-none" placeholder="Insira seu passarinho aqui" onChange={(event) => setTweetTextContent(event.target.value)}/>


          <div className="flex justify-between p-1 gap-3">
            <div className="flex items-center">
              <button className="hover:bg-cyan-50 rounded-full p-2 cursor-not-allowed"><Image className=" text-cyan-300 w-5 h-5" weight="bold"/></button>
              <button className="hover:bg-cyan-50 rounded-full p-2 cursor-not-allowed"><Gif className=" text-cyan-300 w-5 h-5 border-2 rounded-sm border-cyan-200" weight="bold"/></button>
              <button className="hover:bg-cyan-50 rounded-full p-2 cursor-not-allowed"><ChartBarHorizontal className=" text-cyan-300 w-5 h-5" weight="bold"/></button>
              <button className="hover:bg-cyan-50 rounded-full p-2 cursor-not-allowed"><Smiley className=" text-cyan-300 w-5 h-5" weight="bold"/></button>
              <button className="hover:bg-cyan-50 rounded-full p-2 cursor-not-allowed"><CalendarBlank className=" text-cyan-300 w-5 h-5" weight="bold"/></button>
              <button className="hover:bg-cyan-50 rounded-full p-2 cursor-not-allowed"><MapPin className=" text-cyan-300 w-5 h-5" weight="bold"/></button>
            </div>

            <div>
              <button 
              className="flex items-center justify-center px-4 py-1 rounded-full border bg-cyan-100"
              >
                <span className="font-sans">Tweet</span>
              </button>
            </div>
        </div>
      </form>
    </article>
  );
}