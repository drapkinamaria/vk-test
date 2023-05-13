import {Button} from "react-bootstrap";

export default function Send(props) {
    const { selectedBuilding, selectedFloor, selectedMeetingRoom, additions, selectedDate, selectedTime,
        selectedTimeNew } = props;

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            selectedBuilding,
            selectedFloor,
            selectedMeetingRoom,
            additions,
            selectedDate,
            selectedTime,
            selectedTimeNew
        };
        const newJsonData = JSON.stringify(data);

        console.log(newJsonData);
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