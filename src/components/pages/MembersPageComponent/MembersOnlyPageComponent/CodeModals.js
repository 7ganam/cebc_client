import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap';

const CodeModals = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            {/* <Button color="danger" onClick={toggle}> {buttonLabel}</Button> */}

            <Button onClick={toggle} style={{ marginTop: '5px', width: '90%' }} color="warning">members discount code</Button>


            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Discount Code</ModalHeader>
                <ModalBody>
                    <Alert color="success">
                        {props.event.discount_code}
                    </Alert>
                </ModalBody>
                <ModalFooter>
                    {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '} */}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default CodeModals;