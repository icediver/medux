export function convertDate(createdAt: string) {
	const date = new Date(createdAt);
	const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
	const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
	const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
	const time = new Intl.DateTimeFormat('en', { timeStyle: 'short' }).format(
		date
	);

	return `${day} ${month} ${year} / ${time.replace(' ', '')}`;
}

interface IGetMonthExamShedule {
	date: Date;
	selectedDate: Date;
}
export const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
export const weekdaysLong = [
	'Sunday',
	'Monday',
	'Tuethday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];
export const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
export const hours = [
	{ key: '09:00 am', value: 9 },
	{ key: '10:00 am', value: 10 },
	{ key: '11:00 am', value: 11 },
	{ key: '12:00 pm', value: 12 },
	{ key: '01:00 pm', value: 13 },
	{ key: '02:00 pm', value: 14 },
	{ key: '03:00 pm', value: 15 },
	{ key: '04:00 pm', value: 16 },
	{ key: '05:00 pm', value: 17 },
	{ key: '06:00 pm', value: 18 },
];

export function getMonthShedule({ date, selectedDate }: IGetMonthExamShedule) {
	let firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
	let weekdayOfFirstDay = firstDayOfMonth.getDay();
	let currentDays = [];
	for (let day = 1; day < 43; day++) {
		if (day === 1 && weekdayOfFirstDay === 1) {
			firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
		} else if (day === 1) {
			firstDayOfMonth.setDate(
				firstDayOfMonth.getDate() + (day - weekdayOfFirstDay)
			);
		} else {
			firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
		}

		const calendarDay = {
			currentMonth: firstDayOfMonth.getMonth() === date.getMonth(),
			date: new Date(firstDayOfMonth),
			month: firstDayOfMonth.getMonth(),
			number: firstDayOfMonth.getDate(),
			selected: firstDayOfMonth.toDateString() === selectedDate.toDateString(),
			year: firstDayOfMonth.getFullYear(),
		};

		currentDays.push(calendarDay);
	}
	return currentDays;
}

export function getCurrentDays(selectedDate: Date) {
	const calculatedDates = [];

	// Calculate the four required dates
	for (let i = -3; i <= 3; i++) {
		const newDate = new Date(selectedDate);

		newDate.setDate(newDate.getDate() + i);

		const formattedDate = {
			day: new Intl.DateTimeFormat('en', { day: '2-digit' }).format(newDate),
			weekday: new Intl.DateTimeFormat('en', { weekday: 'short' }).format(
				newDate
			),
			selected: newDate.toDateString() === selectedDate.toDateString(),
		};

		calculatedDates.push(formattedDate);
	}
	return calculatedDates;
}

export interface IWeekDay {
	day: string;
	weekday: string;
	weekdayLong: string;
	selected: boolean;
	date: Date;
}

export function getCurrentWeek(selectedDate: Date): {
	week: IWeekDay[];
	months: string;
} {
	let calculatedDates = [];
	let months: string[] = [];
	// If no date object supplied, use current date
	// Copy date so don't modify supplied date
	// const now = selectedDate ? new Date(selectedDate) : new Date();
	// set time to some convenient value
	selectedDate.setHours(0, 0, 0, 0);

	// Get the previous Monday
	const monday = new Date(selectedDate);
	// monday.setDate(monday.getDate() - monday.getDay() + 1);
	// monday.setDate(monday.getDate() - ((1 + 7 - monday.getDay()) % 7));
	monday.setDate(
		monday.getDate() - monday.getDay() + (monday.getDay() == 0 ? -6 : 1)
	);

	for (let i = 0; i <= 6; i++) {
		const newDate = new Date(monday);

		newDate.setDate(newDate.getDate() + i);

		const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(
			newDate
		);

		if (!months.some((m) => m === month)) months.push(month);

		const formattedDate = {
			day: new Intl.DateTimeFormat('en', { day: '2-digit' }).format(newDate),
			weekday: new Intl.DateTimeFormat('en', { weekday: 'short' }).format(
				newDate
			),
			weekdayLong: new Intl.DateTimeFormat('en', { weekday: 'long' }).format(
				newDate
			),
			selected: newDate.toDateString() === selectedDate.toDateString(),
			date: newDate,
		};

		calculatedDates.push(formattedDate);
	}
	return { week: calculatedDates, months: months.join('-') };
}
