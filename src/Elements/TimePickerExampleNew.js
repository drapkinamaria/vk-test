import {useState} from 'react';
import TimePicker from "react-times";
import 'react-times/css/material/default.css';
import 'react-times/css/classic/default.css';

export default function TimePickerExampleNew(props) {
    const { selectedTimeNew, setSelectedTimeNew } = props;
    const [focused, setFocused] = useState(false);

    const handleTimeChange = (options) => {
        setSelectedTimeNew(JSON.stringify(options));
    };

    return (
        <div className="time">
            <div>Выбери время окончания брони переговорки</div>
            <TimePicker
                focused={focused}
                onFocusChange={({ focused }) => setFocused(focused)}
                onTimeChange={handleTimeChange}
                time={selectedTimeNew}
                theme="material"
                timeMode="24"
            />
        </div>
    );
}