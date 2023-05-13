import {Button} from "react-bootstrap";

export default function Clear(props) {

    const { onClear } = props;

    const handleClear = (event) => {
        event.preventDefault();
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