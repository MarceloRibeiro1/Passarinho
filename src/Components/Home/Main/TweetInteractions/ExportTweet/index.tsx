import { Export } from "phosphor-react";

export function ExportTweet() {
  return (
    <div className="">
    <button className="flex items-center gap-1 cursor-not-allowed">
      <div className="flex items-center gap-1 hover:text-blue-600 ">
        <div className="rounded-full p-1">
        <Export />
        </div>
      </div>
    </button>
  </div>
  );
}