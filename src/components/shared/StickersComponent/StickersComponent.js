import React, { useState, useEffect, } from 'react'
import './StickersComponent.css'
import './ToolTip.css'

import ContactUsModalComponent from '../ContactUsModalComponent/ContactUsModalComponent'
import SubscribeModalComponent from '../SubscribeModalComponent/SubscribeModalComponent'
import { createPopper } from '@popperjs/core';







function StickersComponent() {



    useEffect(() => {
        const popcorn = document.querySelector('#popcorn');
        const tooltip = document.querySelector('#tooltip');
        const popperInstance = createPopper(popcorn, tooltip, {
            placement: 'left',
            modifiers: [
                {

                    name: 'offset',
                    options: {
                        offset: [3, 8],
                    },
                },
            ],
        });
        function show() {
            tooltip.setAttribute('data-show', '');

            // We need to tell Popper to update the tooltip position
            // after we show the tooltip, otherwise it will be incorrect
            popperInstance.update();
        }

        function hide() {
            tooltip.removeAttribute('data-show');
        }

        const showEvents = ['mouseenter', 'focus'];
        const hideEvents = ['mouseleave', 'blur'];

        showEvents.forEach(event => {
            popcorn.addEventListener(event, show);
        });
        hideEvents.forEach(event => {
            popcorn.addEventListener(event, hide);
        });
    }, [])


    useEffect(() => {
        const popcorn2 = document.querySelector('#popcorn2');
        const tooltip2 = document.querySelector('#tooltip2');
        const popperInstance = createPopper(popcorn2, tooltip2, {
            placement: 'left',
            modifiers: [
                {

                    name: 'offset',
                    options: {
                        offset: [0, 4],
                    },
                },
            ],
        });
        function show() {
            tooltip2.setAttribute('data-show', '');

            // We need to tell Popper to update the tooltip position
            // after we show the tooltip, otherwise it will be incorrect
            popperInstance.update();
        }

        function hide() {
            tooltip2.removeAttribute('data-show');
        }

        const showEvents = ['mouseenter', 'focus'];
        const hideEvents = ['mouseleave', 'blur'];

        showEvents.forEach(event => {
            popcorn2.addEventListener(event, show);
        });
        hideEvents.forEach(event => {
            popcorn2.addEventListener(event, hide);
        });
    }, [])

    const [ModalIsOpen, setModalIsOpen] = useState(false)
    function toggle_contact_modal() {
        setModalIsOpen(state => !state)
    }


    const [SubscribeModalIsOpen, setSubscribeModalIsOpen] = useState(false)
    function toggle_subscribe_modal() {
        setSubscribeModalIsOpen(state => !state)
    }

    useEffect(() => {
        setTimeout(toggle_subscribe_modal, 5000);

    }, [])







    return (
        <>
            <SubscribeModalComponent toggle={toggle_subscribe_modal} ModalIsOpen={SubscribeModalIsOpen} />
            <ContactUsModalComponent toggle={toggle_contact_modal} ModalIsOpen={ModalIsOpen} />
            <div className='sticke_div' >
                <div className='subcripe-sticker'>
                    <div id="popcorn" aria-describedby="tooltip" className='sticker_body' onClick={toggle_subscribe_modal} >
                        <i class="fas fa-envelope"></i>

                    </div>
                    <div id="tooltip" role="tooltip">
                        subscribe to our mailing list
                         <div id="arrow" data-popper-arrow></div>
                    </div>
                </div>




                <div className='contact_us-sticker'>
                    <div onClick={toggle_contact_modal} id="popcorn2" aria-describedby="tooltip" className='sticker_body'>
                        <i class="fas fa-paper-plane"></i>
                    </div>
                    <div id="tooltip2" role="tooltip">
                        conact us
                        <div id="arrow" data-popper-arrow></div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default StickersComponent
