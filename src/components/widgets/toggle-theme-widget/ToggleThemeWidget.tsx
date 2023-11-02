'use client';

import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { Theme } from './theme.type';
import { useToggleTheme } from './useToggleTheme';
import { useEffect } from 'react';

interface IToggleThemeSwitcher {
	theme: Theme;
}

export default function ToggleThemeSwitcher({
	theme: currentTheme,
}: IToggleThemeSwitcher) {
	const { theme, toogleTheme } = useToggleTheme(currentTheme);
	return (
		<button onClick={toogleTheme}>
			{theme === Theme.dark ? (
				<BsFillSunFill className="h-5 w-5 text-yellow-500" />
			) : (
				<BsFillMoonStarsFill className="h-5 w-5" />
			)}
		</button>
	);
}
