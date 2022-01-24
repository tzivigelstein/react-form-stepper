import styles from './styles.module.css';
import confetti from 'canvas-confetti';

const NEAR_PLACES = [
  {
    id: 0,
    name: 'Guarida Duarte',
    description: 'Brewpub',
    distance: 750,
    time: 2,
    backgroundColor: '#ff7c89',
  },
  {
    id: 1,
    name: 'Walmart',
    description: 'Supermarket',
    distance: 4600,
    time: 12,
    backgroundColor: '#5a6f88',
  },
  {
    id: 2,
    name: 'San Justo Shopping',
    description: 'Shopping mall',
    distance: 7500,
    time: 19,
    backgroundColor: '#33baa4',
  },
  {
    id: 3,
    name: 'Aerobar CUA',
    description: 'Coffee Shop',
    distance: 5300,
    time: 10,
    backgroundColor: '#9994e6',
  },
];

export default function Completed() {
  confetti();
  return (
    <div>
      <h3>Recommendations</h3>
      <p>Near places...</p>
      <ul className={styles.nearPlacesContainer}>
        {NEAR_PLACES.map(
          ({ id, name, description, distance, time, backgroundColor }) => {
            const parsedDistance =
              distance < 1000 ? `${distance}m` : `${distance / 1000}km`;

            return (
              <div
                style={{ backgroundColor }}
                key={id}
                className={styles.nearPlace}
              >
                <div className={styles.nameAndDescriptionContainer}>
                  <span className={styles.nearPlaceName}>{name}</span>
                  <span className={styles.nearPlaceDescription}>
                    {description}
                  </span>
                </div>
                <div className={styles.detailsContainer}>
                  <span className={styles.nearPlaceTime}>{time}'</span>
                  <span className={styles.nearPlaceDistance}>
                    {parsedDistance}
                  </span>
                </div>
              </div>
            );
          }
        )}
      </ul>
      <a href="">Book another room</a>
    </div>
  );
}
