import { useEffect, useState } from "react";
import { api } from "../../../../../lib/api";
import socket from "../../../../../lib/socketio";
import { TweetPostInfo } from "../../../../../models";
import { NewTweet } from "../../MainFeed/NewTweet";
import { Tweet } from "../Tweet/Tweet";

export function TweetFeed() {
  const [tweetList,setTweetList] = useState<TweetPostInfo[]>([])
  const [tweetListUpdate,setTweetListUpdate] = useState(0)
  const [newTweet, setNewTweet] = useState(false)

  window.addEventListener('scroll',() =>{
    onScroll(window.scrollY, window.screen.height, window.document.body.scrollHeight) 
  })
  
  function onScroll(scrollTop: number, clientHeight: number, scrollHeight: number){
      if (scrollTop + clientHeight >= 0.9*scrollHeight ){
        if(tweetList.length != tweetListUpdate)
          setTweetListUpdate(tweetList.length)
      }
  }
  useEffect(() =>{
    socket.on("new_tweet",() =>{
      setNewTweet(true)
    })
  },[socket])

  async function getNewTweet(){
    try{
      const response = await api.get("/feednew", {
        params: {
          tweetIndex: tweetList[0].id,
        }
      })

      setTweetList([...response.data.recentPosts, ...tweetList])
      setNewTweet(false)
    }
    catch (e){
      console.error(e)
    }
  }

  useEffect(() =>{
    const getTweet = async () => {
      try{
        const response = await api.get("/feed", {
          params: {
            tweetIndex: tweetList.length,
          }
        })

        setTweetList([...tweetList, ...response.data.recentPosts])
      }
      catch (e){
        console.error(e)
      }
    }
    getTweet()

  },[tweetListUpdate])
  return (
    <div className="flex flex-col items-center w-full">
      {
        newTweet ? 
        <button onClick={getNewTweet}><NewTweet /> </button>
        : <></>
      }
      <div className="flex-grow w-full">
      {
        tweetList.map((tweet) => 
          <Tweet key={tweet.id} className="hover:bg-slate-100" postInfo={tweet} />
        )
      }
      <button onClick={() => console.log(tweetList)} className="teste p-2 bg-blue-600"> oi botão aqui</button>
      </div>
    </div>
  );
}