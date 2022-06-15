import { ArrowFatUp } from "phosphor-react";

export function NewTweet() {
  return (
    <button className="bg-cyan-200 rounded-full p-2 flex flex-row gap-1 items-center justify-between border border-gray-500">
        <span>Novos tweets</span>
        <ArrowFatUp className="text-white" weight="fill" size="20"/>
    </button>
  );
}