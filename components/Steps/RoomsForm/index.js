import styles from './styles.module.css';
import ROOMS from '../../../rooms';
import Button from '../../Button';
import StepsNavigationButtonContainer from '../../StepsNavigationButtonContainer';
import RoomCard from '../../RoomCard';

export default function RoomsForm({
  selectedRoom,
  setSelectedRoom,
  step,
  setStep,
  datePickerValues,
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
    <div>
      <ul className={styles.roomsContainer}>
        {ROOMS.map((room) => (
          <RoomCard
            key={room.id}
            setSelectedRoom={setSelectedRoom}
            selectedRoom={selectedRoom}
            datePickerValues={datePickerValues}
            room={room}
          />
        ))}
      </ul>
      <StepsNavigationButtonContainer>
        <Button onClick={handleBack} secondary="true">
          Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={step === 2 ? selectedRoom.id === null : ''}
          primary="true"
        >
          Next
        </Button>
      </StepsNavigationButtonContainer>
    </div>
  );
}
