'use client';
import { useEffect, useState } from 'react';

import { FaGlasses } from 'react-icons/fa6';

export function ChangeContrast() {
	const [contrast, setContrast] = useState(100);
	function clickHandler() {
		if (contrast < 200) {
			setContrast((prevState) => prevState + 20);
		} else setContrast(0);
	}
	useEffect(() => {
		document.getElementsByTagName(
			'html'
		)[0].style.filter = `contrast(${contrast}%)`;
	}, [contrast]);
	return (
		<button className="flex items-center gap-3" onClick={clickHandler}>
			<span className="text-xs">Increase contrast</span>
			<FaGlasses size={18} />
			<span>|</span>
		</button>
	);
}
