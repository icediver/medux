import { IconType } from 'react-icons';
import { MdOutlineWindow } from 'react-icons/md';
import { BiCalendarAlt, BiMessage, BiWallet } from 'react-icons/bi';
import { PiUsersThree } from 'react-icons/pi';
import { FaRegStar, FaStethoscope } from 'react-icons/fa';

export interface ISidebarData {
	title: string;
	Icon?: IconType;
	path: string;
	message?: boolean;
}
export const sidebarData: ISidebarData[] = [
	{
		title: 'Dashboard',
		Icon: MdOutlineWindow,
		path: '/dashboard',
	},
	{
		title: 'Appointments',
		Icon: BiCalendarAlt,
		path: '/appointments',
		message: true,
	},
	{
		title: 'Upcomming  Archive',
		path: '/archive',
	},
	{
		title: 'Patients',
		Icon: PiUsersThree,
		path: '/patients',
	},
	{
		title: 'Doctors',
		Icon: FaStethoscope,
		path: '/doctors',
	},
	{
		title: 'Messages',
		Icon: BiMessage,
		path: '/messages',
	},
	{
		title: 'Reviews',
		Icon: FaRegStar,
		path: '/reviews',
	},
	{
		title: 'Finances',
		Icon: BiWallet,
		path: '/finances',
	},
];
