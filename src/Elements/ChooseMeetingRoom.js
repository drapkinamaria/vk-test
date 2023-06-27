import { Dropdown, DropdownButton } from 'react-bootstrap'

export default function ChooseMeetingRoom (props) {
  const { selectedMeetingRoom, onSelect } = props

  const handleSelect = (eventKey) => {
    onSelect(eventKey)
  }

  const meetingRooms = []
  for (let i = 1; i <= 10; i++) {
    meetingRooms.push(i)
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
  )
}
