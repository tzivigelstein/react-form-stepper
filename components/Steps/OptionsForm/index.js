import styles from './styles.module.css';
import Button from '../../Button';
import OPTIONS from '../../../options';
import OptionChip from '../../OptionChip';
import StepsNavigationButtonContainer from '../../StepsNavigationButtonContainer';

export default function OptionsForm({
  selectedOptions,
  setSelectedOptions,
  setStep,
}) {
  function handleNext(e) {
    e.preventDefault();
    setStep((prev) => prev + 1);
  }

  function handleBack(e) {
    e.preventDefault();
    setStep((prev) => prev - 1);
  }

  return (
    <>
      <form className={styles.form}>
        {OPTIONS.map((option) => (
          <OptionChip
            key={option.id}
            option={option}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
        ))}
      </form>
      <StepsNavigationButtonContainer>
        <Button onClick={handleBack} secondary>
          Back
        </Button>
        <Button onClick={handleNext} primary>
          Next
        </Button>
      </StepsNavigationButtonContainer>
    </>
  );
}
