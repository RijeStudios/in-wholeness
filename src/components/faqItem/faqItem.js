import Accordion from 'react-bootstrap/Accordion';

function FaqItem() {
    return (
        <Accordion alwaysOpen >
            <Accordion.Item>
                <Accordion.Header>
                    I think I want a genetic consult.
                    What does it involve?
                </Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat.
                 
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    )
}

export default FaqItem;