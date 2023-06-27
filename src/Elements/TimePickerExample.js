import { useState } from 'react'
import TimePicker from 'react-times'
import 'react-times/css/material/default.css'
import 'react-times/css/classic/default.css'

export default function TimePickerExample (props) {
  const { selectedTime, setSelectedTime } = props
  const [focused, setFocused] = useState(false)

  const handleTimeChange = (options) => {
    setSelectedTime(JSON.stringify(options))
  }

  return (
        <div className="time">
            <div className="">Выбери время начала брони переговорки</div>
            <TimePicker
                focused={focused}
                onFocusChange={({ focused }) => setFocused(focused)}
                onTimeChange={handleTimeChange}
                time={selectedTime}
                theme="material"
                timeMode="24"
            />
        </div>
  )
}
