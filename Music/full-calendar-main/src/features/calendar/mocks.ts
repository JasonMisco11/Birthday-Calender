import type { IMember, IUser } from "@/features/calendar/interfaces";

export const USERS_MOCK: IUser[] = [
	{
		id: "f3b035ac-49f7-4e92-a715-35680bf63175",
		name: "Michael Doe",
		picturePath: null,
	},
	{
		id: "3e36ea6e-78f3-40dd-ab8c-a6c737c3c422",
		name: "Alice Johnson",
		picturePath: null,
	},
	{
		id: "a7aff6bd-a50a-4d6a-ab57-76f76bb27cf5",
		name: "Robert Smith",
		picturePath: null,
	},
	{
		id: "dd503cf9-6c38-43cf-94cc-0d4032e2f77a",
		name: "Emily Davis",
		picturePath: null,
	},
];

// ================================== //
// Church Members Mock Data
// ================================== //

export const MEMBERS_MOCK: IMember[] = [
	{
		id: "m1",
		firstName: "James",
		lastName: "Anderson",
		dob: "1985-02-14", // Valentine's Day baby
		status: "leader",
		phone: "+1 555-0101",
		photo: null,
	},
	{
		id: "m2",
		firstName: "Sarah",
		lastName: "Williams",
		dob: "1990-03-22",
		status: "member",
		phone: "+1 555-0102",
		photo: null,
	},
	{
		id: "m3",
		firstName: "Michael",
		lastName: "Brown",
		dob: "1978-04-05",
		status: "leader",
		phone: "+1 555-0103",
		photo: null,
	},
	{
		id: "m4",
		firstName: "Emily",
		lastName: "Davis",
		dob: "2008-05-18",
		status: "youth",
		phone: "+1 555-0104",
		photo: null,
	},
	{
		id: "m5",
		firstName: "David",
		lastName: "Martinez",
		dob: "1995-06-30",
		status: "member",
		phone: "+1 555-0105",
		photo: null,
	},
	{
		id: "m6",
		firstName: "Jessica",
		lastName: "Garcia",
		dob: "2010-07-12",
		status: "youth",
		phone: "+1 555-0106",
		photo: null,
	},
	{
		id: "m7",
		firstName: "Robert",
		lastName: "Johnson",
		dob: "1982-08-25",
		status: "member",
		phone: "+1 555-0107",
		photo: null,
	},
	{
		id: "m8",
		firstName: "Lisa",
		lastName: "Wilson",
		dob: "1988-09-08",
		status: "leader",
		phone: "+1 555-0108",
		photo: null,
	},
	{
		id: "m9",
		firstName: "Christopher",
		lastName: "Moore",
		dob: "2024-10-15",
		status: "visitor",
		phone: "+1 555-0109",
		photo: null,
	},
	{
		id: "m10",
		firstName: "Amanda",
		lastName: "Taylor",
		dob: "1992-11-28",
		status: "member",
		phone: "+1 555-0110",
		photo: null,
	},
	{
		id: "m11",
		firstName: "Daniel",
		lastName: "Thomas",
		dob: "2006-12-03",
		status: "youth",
		phone: "+1 555-0111",
		photo: null,
	},
	{
		id: "m12",
		firstName: "Rachel",
		lastName: "Jackson",
		dob: "1975-01-20",
		status: "leader",
		phone: "+1 555-0112",
		photo: null,
	},
];
