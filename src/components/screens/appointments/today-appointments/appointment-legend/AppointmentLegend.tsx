export default function AppointmentLegend() {
	return (
		<div className="mb-1 flex w-[700px] gap-2 px-4 py-1.5">
			<div className="flex items-center text-xs uppercase">
				<div className="flex h-3 w-3 items-center justify-center  rounded-full bg-emergency-border">
					<div className="h-1.5 w-1.5 rounded-full bg-background" />
				</div>
				<span className="ml-2">Emergency</span>
			</div>
			<div className="flex items-center text-xs uppercase">
				<div className="flex h-3 w-3 items-center justify-center rounded-full bg-examination-border">
					<div className="h-1.5 w-1.5 rounded-full bg-background" />
				</div>
				<span className="ml-2">Examination</span>
			</div>
			<div className="flex items-center text-xs uppercase">
				<div className="flex h-3 w-3 items-center justify-center rounded-full bg-consultation-border">
					<div className="h-1.5 w-1.5 rounded-full bg-background" />
				</div>
				<span className="ml-2">Consultation</span>
			</div>
			<div className="flex items-center text-xs uppercase">
				<div className="flex h-3 w-3 items-center justify-center rounded-full bg-routine-border">
					<div className="h-1.5 w-1.5 rounded-full bg-background" />
				</div>
				<span className="ml-2">Routine Checkup</span>
			</div>
			<div className="flex items-center text-xs uppercase">
				<div className="flex h-3 w-3 items-center justify-center rounded-full bg-sick-border">
					<div className="h-1.5 w-1.5 rounded-full bg-background" />
				</div>
				<span className="ml-2">Sick Visit</span>
			</div>
		</div>
	);
}
