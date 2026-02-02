import type { TEventColor } from "@/features/calendar/types";

// Member status types for church members
export type TMemberStatus = "member" | "leader" | "youth" | "visitor";

// Church member interface
export interface IMember {
	id: string;
	firstName: string;
	lastName: string;
	dob: string; // ISO string (e.g., "1990-03-15")
	status: TMemberStatus;
	phone: string;
	photo: string | null;
}

export interface IUser {
	id: string;
	name: string;
	picturePath: string | null;
}

export interface IEvent {
	id: number;
	startDate: string;
	endDate: string;
	title: string;
	color: TEventColor;
	description: string;
	user: IUser;
	// Birthday-specific fields
	turningAge?: number;
	memberId?: string;
}

export interface ICalendarCell {
	day: number;
	currentMonth: boolean;
	date: Date;
}
