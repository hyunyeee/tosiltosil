import { useParams } from "next/navigation";

export const useRecordDate = () => {
  const params = useParams();
  const fullDate = params.fullDate as string | undefined;

  const [year, month, day] = fullDate?.split("-") ?? [];

  return {
    year,
    month: month?.padStart(2, "0"),
    day: day?.padStart(2, "0"),
  };
};
