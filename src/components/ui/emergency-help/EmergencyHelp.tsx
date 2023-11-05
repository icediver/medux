import { TiMicrophoneOutline } from 'react-icons/ti';
export default function EmergencyHelp() {
	return (
		<button className="mt-10 flex ">
			<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emergency text-1.5xl text-white">
				<TiMicrophoneOutline />
			</div>
			<div className="ml-4 text-base font-medium text-emergency-text">
				<div className="">Emergency</div>
				<div className=" text-start leading-none">help</div>
			</div>
		</button>
	);
}
