import { DateTime } from 'luxon';

export const getTime = () => {
  const past = DateTime.fromISO(process.env.DATE_TIME, {
    zone: process.env.DATE_TIMEZONE,
  });
  const now = DateTime.now();

  const diff = now.diff(past, ['years']);
  return Math.floor(diff.years);
};
