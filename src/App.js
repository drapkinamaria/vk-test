import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import "./styles.css";
import { Dropdown, DropdownButton, Form, Button} from 'react-bootstrap';
import ReactDatePicker, { registerLocale } from "react-datepicker";
import { useForm, Controller } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from 'react';
import ru from 'date-fns/locale/ru';
import TimePicker from "react-time-picker";
import 'react-times/css/material/default.css';
import 'react-times/css/classic/default.css';

registerLocale('ru', ru);

function ChooseBuilding(props) {
    const { selectedBuilding, onSelect } = props;

    const handleSelect = (eventKey) => {
        onSelect(eventKey);
    };

    const buildings = ["A", "Б"].filter((building) => building !== selectedBuilding);

    return (
        <DropdownButton
            alignRight
            title={`Выбранная башня: ${selectedBuilding}`}
            onSelect={handleSelect}
            variant="primary"
        >
            <Dropdown.ItemText>Выбери башню</Dropdown.ItemText>
            <Dropdown.Divider />
            {buildings.map((building) => (
                <Dropdown.Item key={building} eventKey={building}>
                    {building}
                </Dropdown.Item>
            ))}
        </DropdownButton>
    );
}

function ChooseFloor(props) {
    const { selectedFloor, onSelect } = props;

    const handleSelect = (eventKey) => {
        onSelect(eventKey);
    };

    const floors = [];
    for (let i = 3; i <= 27; i++) {
        if (i !== selectedFloor) {
            floors.push(i);
        }
    }

    return (
        <DropdownButton
            alignRight
            title={`Выбранный этаж: ${selectedFloor}`}
            onSelect={handleSelect}
            variant="primary"
        >
            <Dropdown.ItemText>Выбери этаж</Dropdown.ItemText>
            <Dropdown.Divider />
            {floors.map((floor) => (
                <Dropdown.Item key={floor} eventKey={floor}>
                    {floor}
                </Dropdown.Item>
            ))}
        </DropdownButton>
    );
}

function ChooseMeetingRoom(props) {

    const {selectedMeetingRoom, onSelect} = props;

    const handleSelect = (eventKey) => {
        onSelect(eventKey);
    };

    const meetingRooms = [];
    for (let i = 1; i <= 10; i++) {
        meetingRooms.push(i);
    }

    return (
        <DropdownButton
            alignRight
            title={`Выбранная переговорка: ${selectedMeetingRoom}`}
            onSelect={handleSelect}
            variant="primary"
        >
            <Dropdown.ItemText>Выбери переговорку</Dropdown.ItemText>
            <Dropdown.Divider />
            {meetingRooms.map((meetingRoom) => (
                <Dropdown.Item key={meetingRoom} eventKey={meetingRoom}>
                    {meetingRoom}
                </Dropdown.Item>
            ))}
        </DropdownButton>
    );
}

function WriteAdditions(props) {
    const { additions, setAdditions } = props;

    const handleChange = (event) => {
        setAdditions(event.target.value);
    };

    return (
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Напиши дополнения</Form.Label>
            <Form.Control as="textarea" rows={3} value={additions} onChange={handleChange} />
        </Form.Group>
    );
}

function DatePickerExample(props) {
    const {selectedDate, setSelectedDate} = props;
    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data.date);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="date">Выбери дату</label>
                <Controller
                    name="date"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <ReactDatePicker
                            className="form-control"
                            selected={selectedDate}
                            onChange={(date) => {
                                setSelectedDate(date);
                                field.onChange(date);
                            }}
                            dateFormat="dd/MM/yyyy"
                            isClearable
                            locale="ru"
                            placeholderText="Выбери дату"
                        />
                    )}
                />
            </div>
        </form>
    );
}

function TimePickerForm() {
    const [time, setTime] = useState("10:00");

    const handleTimeChange = (newTime) => {
        setTime(newTime);
    };

    return (
        <div>
            <label htmlFor="time">Выберите время:</label>
            <TimePicker
                onChange={handleTimeChange}
                value={time}
                disableClock={true}
            />
        </div>
    );
}

function Send(props) {
    const { selectedBuilding, selectedFloor, selectedMeetingRoom, additions, selectedDate } = props;
    const [jsonData, setJsonData] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            selectedBuilding: selectedBuilding,
            selectedFloor: selectedFloor,
            selectedMeetingRoom: selectedMeetingRoom,
            additions: additions,
            selectedDate: selectedDate
        };
        const newJsonData = JSON.stringify(data);
        setJsonData(newJsonData);

        console.log(newJsonData);
    };

    const handleClear = () => {
        setJsonData("");
    };

    return (
        <div className="send">
            <form onSubmit={handleSubmit}>
                <Button variant="primary" type="submit">
                    Отправить
                </Button>
            </form>
        </div>
    );
}

function Clear(props) {
    const { onClear } = props;

    const handleClear = (event) => {
        event.preventDefault();
        onClear();
    };

    const handleClick = () => {
        onClear();
    };

    const ClearButton = (props) => {
        return (
            <Button variant="danger" type="button" onClick={props.onClick}>
                {props.label}
            </Button>
        );
    };

    return (
        <form onSubmit={handleClear}>
            <ClearButton label="Очистить" onClick={onClear} />
        </form>
    );
}

function App() {
    const [selectedBuilding, setSelectedBuilding] = useState("A");
    const [selectedFloor, setSelectedFloor] = useState(3);
    const [selectedMeetingRoom, setSelectedMeetingRoom] = useState(1);
    const [additions, setAdditions] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);

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

    const handleClear = () => {
        setSelectedBuilding("A");
        setSelectedFloor(3);
        setSelectedMeetingRoom(1);
        setAdditions("");
        setSelectedDate(null);
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
                <WriteAdditions setAdditions={handleAdditionsChange} onSelect={handleAdditionsChange} />
                <DatePickerExample selectedDate={selectedDate} setSelectedDate={handleDateChange} />
                <TimePickerForm></TimePickerForm>
            </div>
            <div className="buttons-row">
                <Send
                    selectedBuilding={selectedBuilding}
                    selectedFloor={selectedFloor}
                    selectedMeetingRoom={selectedMeetingRoom}
                    additions={additions}
                    selectedDate={selectedDate}
                />
                <Clear onClear={handleClear} />
            </div>
        </div>
    );
}

export default App;

