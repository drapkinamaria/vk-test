import moment from 'moment'
import { Controller, useForm } from 'react-hook-form'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'moment/locale/ru'

moment.locale('ru')

export default function DatePickerExample (props) {
  const { selectedDate, setSelectedDate } = props
  const { control, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data.date)
  }

  const handleClear = () => {
    setSelectedDate(null)
  }

  return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-section">
                <div>
                    <div>Выбери дату</div>
                    <Controller
                        name="date"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <ReactDatePicker
                                className="form-control"
                                selected={selectedDate ? moment(selectedDate).utcOffset(0, true).toDate() : null}
                                onChange={(date) => {
                                  if (date) {
                                    const adjustedDate = moment(date).utcOffset(0, true).toDate()
                                    setSelectedDate(adjustedDate)
                                    field.onChange(adjustedDate)
                                  } else {
                                    setSelectedDate(null)
                                    field.onChange(null)
                                  }
                                }}
                                onClear={handleClear}
                                dateFormat="dd/MM/yyyy"
                                isClearable
                                locale="ru"
                                placeholderText="Выбери дату"
                            />
                        )}
                    />
                </div>
            </div>
        </form>
  )
}
