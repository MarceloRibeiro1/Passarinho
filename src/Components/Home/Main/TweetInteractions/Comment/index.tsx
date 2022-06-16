import { ChatCircle } from "phosphor-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { api } from "../../../../../lib/api";
import socket from "../../../../../lib/socketio";
import { TweetPostInfo } from "../../../../../models";
import { select } from "../../../../../reducers/tweet";

interface CommentProps{
  PrimaryTweet: TweetPostInfo,
}

export function Comment({PrimaryTweet}: CommentProps) {
  const dispatch = useDispatch()
  const [commentNumber, setCommentNumber] = useState(0)

  function openCommentSection(){
    dispatch(select(PrimaryTweet))
  }
  
  useEffect(() =>{
    async function getcommentnumber() {
      try {
        const response = await api.get("/commentnumber",{
          params: {
            id: PrimaryTweet.id
          }
        })
        setCommentNumber(response.data)
      }
      catch (e){
        console.error(e)
      }
    }
    getcommentnumber()
    socket.on("new_tweet",() =>{
      getcommentnumber()
    })
  },[socket])

  return (
    <div className="">
      <button className="flex items-center gap-1" onClick={openCommentSection}>
        <div className="flex items-center gap-1 hover:text-blue-600 ">
          <div className="rounded-full p-1">
          <ChatCircle />
          </div>
          <div>{commentNumber}</div>
        </div>
      </button>
    </div>
  );
}