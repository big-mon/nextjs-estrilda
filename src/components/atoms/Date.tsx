import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

export const Date = ({ dateString }: Props) => {
  const date: Date = parseISO(dateString);
  const text: string = format(date, "yyyy-MM-dd");

  return <time dateTime={dateString}>{text}</time>;
};
