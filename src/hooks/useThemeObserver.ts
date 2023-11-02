import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

interface IMutationCallback {
	(mutations: MutationRecord[], observer: MutationObserver): void;
}

export const useThemeObserver = () => {
	const isDark = Cookies.get('theme') === 'darkmode';
	const [isDarkMode, setIsDarkMode] = useState<boolean>(isDark);
	const element = document.body;

	useEffect(() => {
		const observer = new MutationObserver((mutations, observer) => {
			mutations.forEach((mutation) => {
				if (
					mutation.type === 'attributes' &&
					mutation.attributeName === 'class' &&
					mutation.target.nodeName === 'BODY'
				) {
					const isDark = element.classList.contains('darkmode');
					setIsDarkMode(isDark);
				}
			});
		});
		observer.observe(element, { attributes: true });
		return () => observer.disconnect();
	}, []);
	return { isDarkMode };
};
