import { useState } from 'react';
import DatesForm from '../components/Steps/DatesForm';
import RoomsForm from '../components/Steps/RoomsForm';
import OptionsForm from '../components/Steps/OptionsForm';
import BookForm from '../components/Steps/BookForm';
import Completed from '../components/Steps/Completed';
import Stepper from '../components/Stepper';

const DEFAULT_DATE_PICKER_VALUES = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection',
};

const DEFAULT_SELECTED_OPTIONS = {
  pets: false,
  parking: false,
};

export default function Home() {
  const [selectedRoom, setSelectedRoom] = useState({ id: null });
  const [datePickerValues, setDatePickerValues] = useState(
    DEFAULT_DATE_PICKER_VALUES
  );
  const [selectedOptions, setSelectedOptions] = useState(
    DEFAULT_SELECTED_OPTIONS
  );

  return (
    <Stepper selectedRoom={selectedRoom}>
      <DatesForm
        title="Dates"
        datePickerValues={datePickerValues}
        setDatePickerValues={setDatePickerValues}
      />
      <RoomsForm
        title="Rooms"
        selectedRoom={selectedRoom}
        setSelectedRoom={setSelectedRoom}
        datePickerValues={datePickerValues}
      />
      <OptionsForm
        title="Options"
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />
      <BookForm
        title="Book"
        selectedRoom={selectedRoom}
        datePickerValues={datePickerValues}
        selectedOptions={selectedOptions}
      />
      <Completed title="Completed" />
    </Stepper>
  );
}
