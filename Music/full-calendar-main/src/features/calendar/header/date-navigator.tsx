"use client";

import { formatDate, setMonth } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { buttonHover, transition } from "@/features/calendar/animations";
import { useCalendar } from "@/features/calendar/contexts/calendar-context";

import {
  getEventsCount,
  navigateDate,
  rangeText,
} from "@/features/calendar/helpers";

import type { IEvent } from "@/features/calendar/interfaces";
import type { TCalendarView } from "@/features/calendar/types";

interface IProps {
  view: TCalendarView;
  events: IEvent[];
}

const MotionButton = motion.create(Button);
const MotionBadge = motion.create(Badge);

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function DateNavigator({ view, events }: IProps) {
  const { selectedDate, setSelectedDate } = useCalendar();
  const [monthPickerOpen, setMonthPickerOpen] = useState(false);

  const month = formatDate(selectedDate, "MMMM");
  const year = selectedDate.getFullYear();

  const eventCount = useMemo(
    () => getEventsCount(events, selectedDate, view),
    [events, selectedDate, view],
  );

  const handlePrevious = () =>
    setSelectedDate(navigateDate(selectedDate, view, "previous"));
  const handleNext = () =>
    setSelectedDate(navigateDate(selectedDate, view, "next"));

  const handleMonthSelect = (monthIndex: number) => {
    // Set to the 1st of the selected month while preserving the year
    const newDate = setMonth(selectedDate, monthIndex);
    newDate.setDate(1);
    setSelectedDate(newDate);
    setMonthPickerOpen(false);
  };

  return (
    <div className="space-y-0.5">
      <div className="flex items-center gap-2">
        <Popover open={monthPickerOpen} onOpenChange={setMonthPickerOpen}>
          <PopoverTrigger asChild>
            <motion.button
              type="button"
              className="text-lg font-semibold hover:text-primary cursor-pointer transition-colors rounded-md px-2 py-1 hover:bg-muted"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={transition}
            >
              {month} {year}
            </motion.button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-3" align="start">
            <div className="grid grid-cols-3 gap-2">
              {MONTHS.map((monthName, index) => (
                <Button
                  key={monthName}
                  variant={
                    selectedDate.getMonth() === index ? "default" : "ghost"
                  }
                  size="sm"
                  className="h-9"
                  onClick={() => handleMonthSelect(index)}
                >
                  {monthName}
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
        <AnimatePresence mode="wait">
          <MotionBadge
            key={eventCount}
            variant="secondary"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={transition}
          >
            {eventCount} {eventCount === 1 ? "birthday" : "birthdays"}
          </MotionBadge>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-2">
        <MotionButton
          variant="outline"
          size="icon"
          className="h-6 w-6"
          onClick={handlePrevious}
          variants={buttonHover}
          whileHover="hover"
          whileTap="tap"
        >
          <ChevronLeft className="h-4 w-4" />
        </MotionButton>

        <motion.p
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={transition}
        >
          {rangeText(view, selectedDate)}
        </motion.p>

        <MotionButton
          variant="outline"
          size="icon"
          className="h-6 w-6"
          onClick={handleNext}
          variants={buttonHover}
          whileHover="hover"
          whileTap="tap"
        >
          <ChevronRight className="h-4 w-4" />
        </MotionButton>
      </div>
    </div>
  );
}
