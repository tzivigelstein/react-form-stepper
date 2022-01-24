import styles from './styles.module.css';
import Button from '../../Button';
import StepsNavigationButtonContainer from '../../StepsNavigationButtonContainer';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import useDirection from '../../../hooks/useDirection';

export default function DatesForm({
  datePickerValues,
  setDatePickerValues,
  setStep,
}) {
  const direction = useDirection();

  function handleCalendarChange({ selection }) {
    setDatePickerValues({ ...selection });
  }

  function handleNext(e) {
    e.preventDefault();
    setStep((prev) => prev + 1);
  }

  return (
    <>
      <form className={styles.form}>
        <DateRangePicker
          className={styles.calendar}
          ranges={[datePickerValues]}
          minDate={new Date()}
          rangeColors={['#0099ff99']}
          months={2}
          shownDate={new Date()}
          direction={direction}
          onChange={handleCalendarChange}
          showMonthAndYearPickers={false}
          staticRanges={[]}
          inputRanges={[]}
        />
      </form>
      <StepsNavigationButtonContainer>
        <Button onClick={handleNext} primary="true">
          Next
        </Button>
      </StepsNavigationButtonContainer>
    </>
  );
}
