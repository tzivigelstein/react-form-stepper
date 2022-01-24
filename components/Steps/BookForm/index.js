import Button from '../../Button';
import { DownArrowIcon, ParkingIcon, PetIcon, UpArrowIcon } from '../../Icons';
import StepsNavigationButtonContainer from '../../StepsNavigationButtonContainer';
import styles from './styles.module.css';

export default function BookForm({
  datePickerValues,
  selectedRoom,
  selectedOptions,
  setStep,
}) {
  const { startDate, endDate } = datePickerValues;

  function handleNext(e) {
    e.preventDefault();
    setStep((prev) => prev + 1);
  }

  function handleBack(e) {
    e.preventDefault();
    setStep((prev) => prev - 1);
  }

  console.log(selectedOptions);

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.dataContainer}>
            <div className={styles.dateContainer}>
              <DownArrowIcon />
              <div style={{ display: 'grid' }}>
                <span className={styles.helper}>Check in</span>
                <span className={styles.date}>
                  {startDate.toLocaleDateString([], {
                    hour: 'numeric',
                    minute: 'numeric',
                  })}
                </span>
              </div>
            </div>
            <div className={styles.dateContainer}>
              <UpArrowIcon />
              <div style={{ display: 'grid' }}>
                <span className={styles.helper}>Check out</span>
                <span className={styles.date}>
                  {endDate.toLocaleDateString([], {
                    hour: 'numeric',
                    minute: 'numeric',
                  })}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.dataContainer}>
            <picture className={styles.roomImageContainer}>
              <img
                className={styles.roomImage}
                src="https://media.istockphoto.com/photos/bohemian-living-room-interior-3d-render-picture-id1182454657?k=20&m=1182454657&s=612x612&w=0&h=1xEsm7BqeicA8jYk9KlerUtGsAgzzo530l5Ak1HJdnc="
              />
            </picture>
            <span className={styles.roomTitle}>{selectedRoom.title}</span>
          </div>
          <div className={styles.dataContainer}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <ParkingIcon
                width={44}
                height={44}
                parking={selectedOptions.parking ? 'true' : 'false'}
                className={`${styles.icon} ${styles.parkingIcon}`}
              />
              <PetIcon
                width={34}
                height={34}
                pets={selectedOptions.pets ? 'true' : 'false'}
                className={`${styles.icon} ${styles.petIcon}`}
              />
            </div>
            {}
          </div>
          <div className={styles.dataContainer}>
            <span className={styles.helper}>Total</span>
          </div>
        </header>
      </div>
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
