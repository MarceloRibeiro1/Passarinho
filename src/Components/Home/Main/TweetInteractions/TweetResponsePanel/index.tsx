import { FormEvent, useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { TweetPostInfo } from "../../../../../models";
import { ArrowUpLeft, PaperPlaneTilt, X } from "phosphor-react";
import { api } from "../../../../../lib/api";
import { Tweet } from "../../Tweets/Tweet/Tweet";
import { useDispatch, useSelector } from "react-redux";
import { back, newComment, select, selecttweet } from "../../../../../reducers/tweet";
import { selectUser } from "../../../../../reducers/user";
import socket from "../../../../../lib/socketio";



export function TweetResponsePanel() {
	const [tweetList, setTweetList] = useState<TweetPostInfo[]>([]);
	const dispatch = useDispatch()
	const tweet = useSelector(selecttweet)
	
	const[tweetTextContent, setTweetTextContent] = useState("")
	const user = useSelector(selectUser)
  
	function sendTweet(event: FormEvent){
	  event.preventDefault()
	  
	  try{
		api.post('/tweetresponse',{
		  content: tweetTextContent,
		  image: undefined,
		  responseTo: tweet.id,
		  user: user
		})
		setTweetTextContent("")
		dispatch(newComment())
		socket.emit("new_post")
	  }
	  catch (e){
		console.error(e)
	  }
	}

	async function getTweetResponse(){
		const getTweet = async () => {
			try {
                console.log(tweet)
				const response = await api.get("/tweetdialog", {
					params: { postId: tweet.responseTo },
				});

				dispatch(select(response.data.post))
			} catch (e) {
				console.error(e);
			}
		};
		getTweet();
	}

	useEffect(() => {
		const getTweet = async () => {
			try {
				const response = await api.get("/tweetdialog", {
					params: { postId: tweet.id , indexNumber: tweetList.length},
				});

				setTweetList(response.data.responseRecentPostsList);
			} catch (e) {
				console.error(e);
			}
		};
		if (tweet.isOpen == true)
			getTweet();
	},[tweet]);

	return (
		<Dialog
			open={tweet.isOpen === true}
			onClose={() => dispatch(back())}
			className="fixed inset-0 flex items-center justify-center bg-opacity-70 bg-slate-200"
		>
			<Dialog.Panel className="relative flex flex-col content-center justify-center bg-white rounded-lg p-5 max-h-[80vh] max-w-xl">
				<Dialog.Title className="relative top-0 flex flex-row justify-between items-center">
					{tweet.responseTo ? <button onClick={getTweetResponse}><ArrowUpLeft className="w-8 h-8"/>Resposta</button> : <div/>}
					<span className="text-lg font-sans font-bold">Tweet</span>
					<button onClick={() => dispatch(back())}><X className="w-8 h-8"/></button>
				</Dialog.Title>
				<article className="pb-2 flex flex-col max-h-[80%]">
					<div className="flex mx-4 relative top-6 bg-white">
						<Tweet postInfo={tweet} />
					</div>

					<div className="overflow-y-auto max-h-96 my-4">
						{tweetList.map((tweet, i) => (
							<div key={i} className="border-slate-200 py-1">
								<Tweet postInfo={tweet} />
							</div>
						))}
					</div>

					<form className=" border-slate-200 p-1 flex flex-row items-center gap-2 py-2 bottom-0 sticky">
						<input
							type="Resposta"
							className="rounded-full bg-slate-200 p-2 flex-grow"
							onChange={(event) => setTweetTextContent(event.target.value)}
							value={tweetTextContent}
						/>
						<button onClick={sendTweet}>
							<PaperPlaneTilt className=" w-8 h-8 " />
						</button>
					</form>
				</article>
			</Dialog.Panel>
		</Dialog>
	);
}
