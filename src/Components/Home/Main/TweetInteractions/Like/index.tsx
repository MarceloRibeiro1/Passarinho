import { Heart, IconWeight } from "phosphor-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { api } from "../../../../../lib/api";
import { selectUser } from "../../../../../reducers/user";

interface LikeProps{
  postId: number
}

export function Like({postId}: LikeProps) {
  const[isLiked, setIsLiked] = useState(false)
  const[likesNumber, setLikesNumber] = useState(0)
  const user = useSelector(selectUser)
  const[hearthWeight, setHearthWeight] = useState<IconWeight | undefined>("regular")
  const[hearthColor, setHearthColor] = useState("")
  
  useEffect(() =>{
    if (user.loggedIn){
      getLike()
    }
    async function getLike() {
      try {
        const response = await api.get("/getlike",{
          params: {
            id: [user.userId, postId]
          }
        })
        setLikesNumber(response.data.likes)
        if (response.data.liked === false){
          setIsLiked(false) 
          setHearthWeight("regular")
          setHearthColor("")
        }else{
          setIsLiked(true)
          setHearthWeight("fill")
          setHearthColor("text-red-600")
        }
      }
      catch (e){
        console.error(e)
      }
    }
  },[isLiked])

  async function ToggleLike(){
    if (user.loggedIn){
      isLiked ?
      await doDislike() :
      await doLike()
    }
  }
  async function doLike(){
    try {
      api.post("/like", {        
        user: {
          userId: user.userId,
          username: user.username,
          auth_token: user.auth_token,
        },
        postId})
      setIsLiked(true)
      setHearthWeight("fill")
      setHearthColor("text-red-600")
    } 
    catch (e){
      console.error(e)
    }
  }
  async function doDislike(){
    try {
      api.post("/dislike", {        
        user: {
          userId: user.userId,
          username: user.username,
          auth_token: user.auth_token,
        },
        postId})
      setIsLiked(false)
      setHearthWeight("regular")
      setHearthColor("")
    } 
    catch (e){
      console.error(e)
    }
  }

  return (
    <div className="">
    <button className="flex items-center gap-1" onClick={ToggleLike}>
      <div className="flex items-center gap-1 hover:text-red-600"  >
        <div className="rounded-full p-1">
          <Heart className={hearthColor} weight={hearthWeight} />
        </div>
        <div>{likesNumber}</div>
      </div>
    </button>
  </div>
  );
}