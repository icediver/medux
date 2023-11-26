import clsx from 'clsx';
import { FiFilter } from 'react-icons/fi';
import Select, { ActionMeta, SingleValue } from 'react-select';
interface ISelectDepartment {
	selectDepartmentHandler: (department: string) => void;
}
interface ISortedOption {
	value: string;
	label: string;
}
const options: ISortedOption[] = [
	{ value: 'surgent', label: 'surgent' },
	{ value: 'pediatrician', label: 'pediatrician' },
	{ value: 'family practice', label: 'family practice' },
	{ value: 'dentist', label: 'dentist' },
];
export default function SelectDepartment({
	selectDepartmentHandler,
}: ISelectDepartment) {
	function changeSelectHandler(
		newValue: SingleValue<ISortedOption>,
		actionMeta: ActionMeta<ISortedOption>
	) {
		if (newValue) selectDepartmentHandler(newValue?.value);
		if (newValue === null) selectDepartmentHandler('');
	}
	return (
		<div className="ml-px capitalize">
			<div className="relative">
				<Select
					options={options}
					onChange={changeSelectHandler}
					placeholder={'All Departments'}
					isClearable
					// menuPortalTarget={document.body}
					menuPosition={'fixed'}
					classNames={{
						control: ({ isFocused, menuIsOpen }) =>
							clsx(
								'w-60 !flex-row-reverse !rounded-md !bg-bg-light  !text-start text-start',

								isFocused
									? '!border !border-solid !border-transparent !shadow-none'
									: '!border !border-transparent ',
								menuIsOpen && '!rounded-b-none'
							),
						indicatorSeparator: () => 'hidden',
						indicatorsContainer: () => '!w-10 !p-0 !justify-end !text-logo',
						clearIndicator: () => '!p-0 !text-logo',
						dropdownIndicator: () => '!p-0 !text-logo',
						valueContainer: () => '!pl-1',
						input: () => '',
						singleValue: () => '!text-gray-400',
						menu: (menuIsOpen) =>
							clsx(
								'!mt-0 !overflow-hidden rounded-md !bg-bg-light !p-0',
								menuIsOpen && '!rounded-t-none'
							),

						menuList: () => {
							return '!p-0 ';
						},
						option: ({ isFocused, isSelected, isDisabled }) =>
							clsx(
								isFocused && '!bg-background !text-white ',
								isSelected && !isFocused && '!bg-bg-light !text-white/50'
								// isSelected && isFocused && '!bg-secondary !text-white'
							),
					}}
				/>
			</div>
		</div>
	);
}
