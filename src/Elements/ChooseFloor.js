import {Dropdown, DropdownButton} from "react-bootstrap";

export default function ChooseFloor(props) {
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