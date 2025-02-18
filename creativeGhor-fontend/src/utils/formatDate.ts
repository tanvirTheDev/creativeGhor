import dayjs from "dayjs";

export const formatDate = (isoString: string): string => {
  if (!isoString) return "";

  return dayjs(isoString).format("YYYY-MM-DD"); // Formats date as YYYY-MM-DD
};
