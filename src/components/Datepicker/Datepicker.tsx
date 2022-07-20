import { useState } from 'react';
import { customHeader } from './type';
import DatePicker, { registerLocale } from 'react-datepicker';
import getYear from 'date-fns/getYear';
import getMonth from 'date-fns/getYear';
import ru from 'date-fns/locale/ru';

import logo from './static/Vector.png';
import larrow from './static/left_arrow.png';
import rarrow from './static/right_arrow.png';

import 'react-datepicker/dist/react-datepicker.css';
import './DatePickerCustom.scss';
import styles from './Datepicker.module.scss';

registerLocale('ru', ru);

export default function Datepicker(): JSX.Element {
  const DatePickerCustomInput = (onClick: any): JSX.Element => (
    <div className={styles.calendar_icon}>
      <img src={logo} alt="logo" onClick={onClick} />
    </div>
  );
  const currentDate: Date = new Date();
  const [startDate, setStartDate] = useState(new Date());
  const range = (start: number, end: number): number[] => {
    let ans = [];
    for (let i = start; i <= end; i++) {
      ans.push(i);
    }
    return ans;
  };
  const years: number[] = range(1990, getYear(new Date()));
  const months: string[] = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  return (
    <div className={styles.datepicker_conteiner}>
      <DatePicker
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }: customHeader): React.ReactElement => (
          <div className={styles.calender_header}>
            <button
              className={styles.calendar_button}
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              <img src={larrow} alt="larrow" />
            </button>

            <select
              className={styles.calendar_select}
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option: string) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <select
              className={styles.calendar_select}
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option: number) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button
              className={styles.calendar_button}
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              <img src={rarrow} alt="rarrow" />
            </button>
          </div>
        )}
        className={styles.datapicker}
        calendarClassName={styles.calendar}
        locale={ru}
        dateFormat="d MMM yyyy,h:mm:ss"
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        dayClassName={(date: Date) =>
          date.getMonth() === currentDate.getMonth()
            ? styles.current_mounth
            : styles.uncurrent_mounth
        }
      />
      <DatePickerCustomInput />
    </div>
  );
}
