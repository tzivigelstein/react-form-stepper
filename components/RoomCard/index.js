import { CheckIcon } from '../Icons';
import styles from './styles.module.css';

export default function RoomCard({
  room,
  selectedRoom,
  setSelectedRoom,
  datePickerValues,
}) {
  const { id, image, title, price } = room;

  const { startDate, endDate } = datePickerValues;

  return (
    <button
      onClick={() => setSelectedRoom(room)}
      selected-room={id === selectedRoom.id ? 'true' : 'false'}
      className={styles.roomContainer}
    >
      <picture className={styles.roomImageContainer}>
        <img
          className={styles.roomImage}
          src={image}
          alt={`${title} room image`}
        />
      </picture>
      <header className={styles.dataWrapper}>
        <section className={styles.dataContainer}>
          <span className={styles.roomTitle}>{title}</span>
          <span className={styles.roomPrice}>
            <span className={styles.roomPriceAccent}>
              ${price.toLocaleString()}
            </span>{' '}
            / night
          </span>
        </section>
      </header>
      {id === selectedRoom.id && (
        <div className={styles.iconContainer}>
          <CheckIcon className={styles.icon} />
        </div>
      )}
    </button>
  );
}
