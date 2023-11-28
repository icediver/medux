import { PropsWithChildren, ReactNode } from 'react';
import User from './user/User';
import Sidebar from './sidebar/SideBar';
import SearchDoctors from './search-doctors/SearchDoctors';
import { cookies, headers } from 'next/headers';
import Logo from '../ui/logo/Logo';
import SidebarNavigation from './sidebar/sidebar-navigation/SidebarNavigation';
import ToggleThemeSwitcher from '../widgets/toggle-theme-widget/ToggleThemeWidget';
import { Theme } from '../widgets/toggle-theme-widget/theme.type';
import ChangeTextSize from '../ui/change-text-size/ChangeTextSize';
import { ChangeContrast } from '../ui/change-contrast/ChangeContrast';

export default function CustomLayout({ children }: PropsWithChildren<unknown>) {
	const headerList = headers();
	const pathname = headerList.get('x-pathname');

	const theme =
		cookies().get('theme')?.value === 'darkmode' ? Theme.dark : Theme.light;
	return (
		<section className="animate-opacity">
			{pathname === '/auth' ? (
				<div className="col-span-7">{children}</div>
			) : (
				<main className="mx-auto grid w-[1440px] grid-cols-7 p-10">
					<Logo />
					<div className="relative col-span-6 flex items-center justify-between">
						<SearchDoctors />
						<div className="">
							<div className="flex justify-end gap-6">
								<ToggleThemeSwitcher theme={theme} />
								<User />
							</div>
							<div className="relative top-12 flex">
								<ChangeContrast />
								<ChangeTextSize />
							</div>
						</div>
					</div>
					<Sidebar>
						<SidebarNavigation />
					</Sidebar>

					<div className="col-span-6 mt-6">{children}</div>
				</main>
			)}
		</section>
	);
}
