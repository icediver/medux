import { FiHeart } from 'react-icons/fi';
import Widget from '../widget/Widget';
import Cardio from 'react-cardiogram';
import styles from './Cardiogram.module.scss';
import clsx from 'clsx';

interface ICardiogram {}
export default function Cardiogram({}: ICardiogram) {
	return (
		<Widget size="xl" title="">
			<div className="">
				<div className="mx-6 my-2 flex items-center gap-2 text-[#ff0000]">
					<FiHeart size={20} strokeWidth={3} className={styles.heartBeat} />
					<div>
						<span className="text-1.75xl font-semibold">94</span>
						<span className="text-xss text-logo">BPM</span>
					</div>
				</div>
				<Cardio
					height={329}
					color="#ff0000"
					thickness={2}
					beatFrequency={900}
					scale={50}
				/>
			</div>
		</Widget>
	);
}
