import {Dropdown, DropdownButton} from "react-bootstrap";

export default function ChooseBuilding(props) {
    const { selectedBuilding, onSelect } = props;

    const handleSelect = (eventKey) => {
        onSelect(eventKey);
    };

    const buildings = ["A", "Б"];

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
