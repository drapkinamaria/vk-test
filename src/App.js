import 'bootstrap/dist/css/bootstrap.css';
import "./styles.css";
import { useState} from 'react';
import ChooseBuilding from './Elements/ChooseBuilding'
import ChooseFloor from './Elements/ChooseFloor'
import ChooseMeetingRoom from './Elements/ChooseMeetingRoom'
import WriteAdditions from  './Elements/WriteAdditions'
import TimePickerExample from './Elements/TimePickerExample'
import TimePickerExampleNew from './Elements/TimePickerExampleNew'
import Send from './Elements/Send'
import Clear from './Elements/Clear'
import DatePickerExample from './Elements/DatePickerExample'
import 'moment/locale/ru';
import moment from "moment";

moment.locale('ru');

function App() {
    const [selectedBuilding, setSelectedBuilding] = useState("A");
    const [selectedFloor, setSelectedFloor] = useState(3);
    const [selectedMeetingRoom, setSelectedMeetingRoom] = useState(1);
    const [additions, setAdditions] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedTimeNew, setSelectedTimeNew] = useState(null);

    const handleBuildingSelect = (value) => {
        setSelectedBuilding(value);
    };

    const handleFloorSelect = (value) => {
        setSelectedFloor(value);
    };

    const handleMeetingRoomSelect = (eventKey) => {
        setSelectedMeetingRoom(eventKey);
    };

    const handleAdditionsChange = (value) => {
        setAdditions(value);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleTimeChange = (time) => {
        setSelectedTime(time);
    };

    const handleTimeChangeNew = (time) => {
        setSelectedTimeNew(time);
    };

    const handleClear = () => {
        setSelectedBuilding("A");
        setSelectedFloor(3);
        setSelectedMeetingRoom(1);
        setAdditions("");
        setSelectedDate(null);
        setSelectedTime(null);
        setSelectedTimeNew(null);
    };

    return (
        <div className="choose">
            <h1>Форма бронирования переговорной</h1>
            <div className="choose-options">
                <ChooseBuilding selectedBuilding={selectedBuilding} onSelect={handleBuildingSelect} />
                <ChooseFloor selectedFloor={selectedFloor} onSelect={handleFloorSelect} />
                <ChooseMeetingRoom selectedMeetingRoom={selectedMeetingRoom} onSelect={handleMeetingRoomSelect} />
            </div>
            <div className="additions">
                <div className="time">
                    <WriteAdditions additions={additions} setAdditions={handleAdditionsChange} />
                </div>
                <div className="time">
                    <DatePickerExample selectedDate={selectedDate} setSelectedDate={handleDateChange} />
                </div>
                <TimePickerExample selectedTime={selectedTime} setSelectedTime={handleTimeChange} />
                <TimePickerExampleNew selectedTimeNew={selectedTimeNew} setSelectedTimeNew={handleTimeChangeNew} />
            </div>
            <div className="buttons-row">
                <Send
                    selectedBuilding={selectedBuilding}
                    selectedFloor={selectedFloor}
                    selectedMeetingRoom={selectedMeetingRoom}
                    additions={additions}
                    selectedDate={selectedDate}
                    selectedTime={selectedTime}
                    selectedTimeNew={selectedTimeNew}
                />
                <Clear onClear={handleClear} />
            </div>
        </div>
    );
}

export default App;

