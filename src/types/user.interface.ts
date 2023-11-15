export enum EnumSortOptions {
	NEW = 'newest',
	OLD = 'oldest',
}
export enum RoleTypeEnum {
	DOCTOR = 'DOCTOR',
	PATIENT = 'PATIENT',
	ADMIN = 'ADMIN',
}
export interface IUser {
	id: number;
	email: string;
	name: string;
	avatarPath: string;
	phone: string;
	role: RoleTypeEnum;
	speciality?: string;
}
export interface ISortUsers {
	perPage?: string;
	page?: number;
	searchTerm?: string;
	sort?: EnumSortOptions;
	role?: RoleTypeEnum;
	letter?: string;
}

export interface IUsers {
	users: IUser[];
	length: number;
}
