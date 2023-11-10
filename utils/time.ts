import { DateTime } from 'luxon';

export const getTime = () => {
  try {
    console.log('DATE_TIME:', process.env.DATE_TIME);
    const past = DateTime.fromObject(
      JSON.parse(process.env.DATE_TIME as string),
      { zone: process.env.DATE_TIMEZONE }
    );
    const now = DateTime.now();

    const diff = now.diff(past, ['years']);
    return Math.floor(diff.years);
  } catch (error) {
    console.error('Error parsing DATE_TIME:', error);
    return 0; // or handle the error in a way that fits your application
  }
};
