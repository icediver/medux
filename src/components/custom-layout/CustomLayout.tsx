import { PropsWithChildren, ReactNode } from 'react';
import User from './user/User';
import Sidebar from './sidebar/SideBar';
import SearchDoctors from './search-doctors/SearchDoctors';
import { cookies, headers } from 'next/headers';
import Logo from '../ui/logo/Logo';
import SidebarNavigation from './sidebar/sidebar-navigation/SidebarNavigation';
import ToggleThemeSwitcher from '../widgets/toggle-theme-widget/ToggleThemeWidget';
import { Theme } from '../widgets/toggle-theme-widget/theme.type';

export default function CustomLayout({ children }: PropsWithChildren<unknown>) {
	const headerList = headers();
	const pathname = headerList.get('x-pathname');

	const theme =
		cookies().get('theme')?.value === 'dark' ? Theme.dark : Theme.light;
	return (
		<section className="animate-opacity">
			{pathname === '/auth' ? (
				<div className="col-span-7">{children}</div>
			) : (
				<main className="mx-auto grid w-[1440px] grid-cols-7 p-10">
					<Logo />
					<div className="col-span-6 flex items-center justify-between">
						<SearchDoctors />
						<div className="flex gap-8 ">
							<ToggleThemeSwitcher theme={theme} />
							<User />
						</div>
					</div>
					<Sidebar>
						<SidebarNavigation />
					</Sidebar>

					<div className="col-span-6 mt-10">{children}</div>
				</main>
			)}
		</section>
	);
}
