import { ArrowsCounterClockwise } from "phosphor-react";

export function Repost() {
  return (
    
    <div className="">
    <button className="flex items-center gap-1 cursor-not-allowed">
      <div className="flex items-center gap-1 hover:text-green-600 ">
        <div className="rounded-full p-1">
        <ArrowsCounterClockwise />
        </div>
        <div></div>
      </div>
    </button>
  </div>
  )
}