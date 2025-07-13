export const formatSecondsToMMSS = (seconds: number): string => {
  const min = String(Math.floor(seconds / 60));
  const sec = String(seconds % 60).padStart(2, "0");
  return `${min}:${sec}`;
};

export const formatISODurationToTime = (isoDuration: string): string => {
  const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;

  const matches = isoDuration.match(regex);
  if (!matches) return "00 : 00 : 00";

  const hours = parseInt(matches[1] || "0", 10);
  const minutes = parseInt(matches[2] || "0", 10);
  const seconds = parseInt(matches[3] || "0", 10);

  const pad = (num: number) => String(num).padStart(2, "0");

  return `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`;
};

export const formatISODurationToHourMinute = (isoDuration: string): string => {
  const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;

  const matches = isoDuration.match(regex);
  if (!matches) return "00 : 00";

  const hours = parseInt(matches[1] || "0", 10);
  const minutes = parseInt(matches[2] || "0", 10);

  const pad = (num: number) => String(num).padStart(2, "0");

  return `${pad(hours)} : ${pad(minutes)}`;
};
