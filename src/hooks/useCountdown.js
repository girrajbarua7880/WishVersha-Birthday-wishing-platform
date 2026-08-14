import { useEffect, useState } from "react";

function getTargetDate(date) {
  if (!date) return null;

  // Important:
  // YYYY-MM-DD ko directly new Date() mein dene se UTC issue ho sakta hai.
  // Isliye local midnight explicitly create kar rahe hain.
  const [year, month, day] = date.split("-").map(Number);

  return new Date(year, month - 1, day, 0, 0, 0, 0);
}

function calculateTimeLeft(date) {
  const target = getTargetDate(date);

  if (!target) {
    return null;
  }

  const difference = target.getTime() - Date.now();

  if (difference <= 0) {
    return {
      expired: true,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    expired: false,
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
    seconds: Math.floor(
      (difference / 1000) % 60
    ),
  };
}

function useCountdown(date) {
  const [timeLeft, setTimeLeft] = useState(() =>
    calculateTimeLeft(date)
  );

  useEffect(() => {
    if (!date) {
      setTimeLeft(null);
      return;
    }

    const updateCountdown = () => {
      setTimeLeft(calculateTimeLeft(date));
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [date]);

  return timeLeft;
}

export default useCountdown;