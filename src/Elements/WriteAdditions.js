import { Form } from 'react-bootstrap'

export default function WriteAdditions (props) {
  const { additions, setAdditions } = props

  const handleChange = (event) => {
    setAdditions(event.target.value)
  }

  return (
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Напиши дополнения</Form.Label>
            <Form.Control as="textarea" rows={3} value={additions} onChange={handleChange} />
        </Form.Group>
  )
}
