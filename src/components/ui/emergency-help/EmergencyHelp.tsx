import { TiMicrophoneOutline } from "react-icons/ti";
export default function EmergencyHelp() {
  return (
    <button className="flex mt-10 ">
      <div className="h-10 w-10 flex justify-center items-center text-white bg-emergency rounded-lg text-1.5xl">
        <TiMicrophoneOutline />
      </div>
      <div className="ml-4 text-base font-medium text-white">
        <div className="">Emergency</div>
        <div className=" text-start leading-none">help</div>
      </div>
    </button>
  );
}
