"use client";

import { useState } from "react";

import { addDays } from "date-fns";
import { useRouter } from "next/navigation";
import { DateRange } from "react-day-picker";

import DateRangePicker from "./DateRangePicker";

interface TransactionStatsWithFilterProps {
  children: React.ReactNode;
}

export function TransactionStatsWithFilter({ children }: TransactionStatsWithFilterProps) {
  const router = useRouter();
  const [date, setDate] = useState<DateRange | undefined>({
    from: addDays(new Date(), -30),
    to: new Date(),
  });

  const handleDateRangeChange = (newDate: DateRange | undefined) => {
    setDate(newDate);
    
    // Обновляем URL с параметрами даты
    const params = new URLSearchParams();
    if (newDate?.from) {
      params.set('from', newDate.from.toISOString().split('T')[0]);
    }
    if (newDate?.to) {
      params.set('to', newDate.to.toISOString().split('T')[0]);
    }
    
    router.replace(`/blls?${params.toString()}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Network Statistics</h2>
        <DateRangePicker onDateChange={handleDateRangeChange} />
      </div>
      {children}
    </div>
  );
}
