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
        user: user
      })
      setTweetTextContent("")
      socket.emit("new_post")
    }
    catch (e){
      console.error(e)
    }
  }

  return (
    <div className="flex px-4 border border-slate-200 border-t-0 border-l-0 border-r-0">
        <div className="flex-grow-0 flex-1 p-2">
          <img src={user.userPhoto} className="text-cyan-200 w-10 h-10"/>
        </div>

        <form className="flex-1 px-2">
          <div>
            <input value={tweetTextContent} className="w-full h-20 focus:outline-none" placeholder="Insira seu passarinho aqui" onChange={(event) => setTweetTextContent(event.target.value)}/>
          </div>

          <div className="flex justify-between p-1">
            <div className="flex items-center">
              <Image className="text-cyan-200" weight="fill"/>
              <Gif className="text-cyan-200 border-2 rounded-sm border-cyan-200" weight="fill"/>
              <ChartBarHorizontal className="text-cyan-200" weight="fill"/>
              <Smiley className="text-cyan-200" weight="fill"/>
              <CalendarBlank className="text-cyan-200" weight="fill"/>
              <MapPin className="text-cyan-200" weight="fill"/>
            </div>

            <div>
              <button 
              className="flex items-center justify-center px-4 py-1 rounded-full border bg-cyan-100"
              onClick={(event)=>sendTweet(event)}
              >
                <span className="font-sans">Tweet</span>
              </button>
            </div>
        </div>
      </form>
    </div>
  );
}