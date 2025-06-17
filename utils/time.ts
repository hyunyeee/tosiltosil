export const formatSecondsToMMSS = (seconds: number): string => {
  const min = String(Math.floor(seconds / 60));
  const sec = String(seconds % 60).padStart(2, "0");
  return `${min}:${sec}`;
};
