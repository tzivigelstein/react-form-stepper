import { CheckIcon, ParkingIcon, PetIcon } from '../Icons';
import styles from './styles.module.css';

export default function OptionChip({
  option,
  selectedOptions,
  setSelectedOptions,
}) {
  const { type, charge } = option;

  function handleChange(e) {
    setSelectedOptions((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  }

  return (
    <fieldset className={styles.fieldset}>
      <label
        className={styles.label}
        htmlFor={type}
        selected-option={`${selectedOptions[type]}`}
      >
        <div className={styles.dataContainer}>
          {type === 'parking' && <ParkingIcon />}
          {type === 'pets' && <PetIcon />}
          <span style={{ textTransform: 'capitalize' }}>
            {type} ${charge}
          </span>
        </div>
        <input
          onChange={handleChange}
          type="checkbox"
          id={type}
          name={type}
          checked={selectedOptions[type]}
          className={styles.checkbox}
        />
        <div className={styles.iconContainer}>
          <CheckIcon className={styles.icon} />
        </div>
      </label>
    </fieldset>
  );
}
