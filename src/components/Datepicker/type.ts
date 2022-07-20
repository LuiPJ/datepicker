export type customHeader = {
  date: Date;
  changeYear: (year: string) => void;
  changeMonth: (year: number) => void;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
};
