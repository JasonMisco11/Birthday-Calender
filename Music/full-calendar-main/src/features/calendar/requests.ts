import type { TEventColor } from "@/features/calendar/types";
import { MEMBERS_MOCK, USERS_MOCK } from "@/features/calendar/mocks";
import type { IEvent, TMemberStatus } from "@/features/calendar/interfaces";

// Map member status to event color
const statusColorMap: Record<TMemberStatus, TEventColor> = {
	leader: "purple",
	youth: "yellow",
	member: "blue",
	visitor: "orange",
};

// Generate birthday events for all members
export const getEvents = async (): Promise<IEvent[]> => {
	const events: IEvent[] = [];
	let eventId = 1;

	// Current year is 2026, generate for 5-year window: 2024, 2025, 2026, 2027, 2028
	const years = [2024, 2025, 2026, 2027, 2028];

	for (const member of MEMBERS_MOCK) {
		const birthDate = new Date(member.dob);
		const birthYear = birthDate.getFullYear();
		const birthMonth = birthDate.getMonth();
		const birthDay = birthDate.getDate();

		for (const year of years) {
			// Calculate turning age
			const turningAge = year - birthYear;

			// Skip if age would be negative (future birth)
			if (turningAge < 0) continue;

			// Create birthday event date for this year
			const eventDate = new Date(year, birthMonth, birthDay);
			const eventDateStr = eventDate.toISOString();

			// Create end date (same day, just for display)
			const endDate = new Date(year, birthMonth, birthDay, 23, 59, 59);

			// Create a corresponding user for the event
			const user = {
				id: member.id,
				name: `${member.firstName} ${member.lastName}`,
				picturePath: member.photo,
			};

			events.push({
				id: eventId++,
				startDate: eventDateStr,
				endDate: endDate.toISOString(),
				title: `(${turningAge}) ${member.firstName} ${member.lastName}`,
				color: statusColorMap[member.status],
				description: `🎂 Birthday celebration for ${member.firstName} ${member.lastName}! Turning ${turningAge} years old. Status: ${member.status}. Phone: ${member.phone}`,
				user,
				turningAge,
				memberId: member.id,
			});
		}
	}

	return events;
};

export const getUsers = async () => {
	return USERS_MOCK;
};
