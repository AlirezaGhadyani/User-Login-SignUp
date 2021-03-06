import React from 'react';
import styled from 'styled-components';
import { IoCheckmarkCircleOutline, IoWarning } from 'react-icons/io5';
import { useSelector, useDispatch } from 'react-redux';
import { setModalStatus } from '../../../Redux/Actions';
import { useHistory } from 'react-router-dom';

// Styles
const ModalContainer = styled.div`
position: fixed;
top: 0;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: rgba(0,0,0,0.15);
backdrop-filter: blur(2px);
z-index: 1000;
`;

const ModalMessageWrapper = styled.div`
position: relative;
width: 700px;
max-width: 95%;
background: #fff;
border-radius: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
padding: 2rem 0;
`;

const ModalIcon = styled.span`
& svg{
font-size: 8rem;
color: ${props => props.color};
}
`;

const ModalMessage = styled.p`
font-size: 1.6rem;
font-weight: 400;
font-family: titleFont;
letter-spacing: 0.12;
`;

const ModalButton = styled.button`
border: 0;
border-radius: 2rem;
font-size: 1.8rem;
font-weight: 400;
font-family: titleFont;
letter-spacing: 0.12;
padding: 0.6rem 2.4rem;
background: ${props => props.bg};
color: #fff;
cursor: pointer;
margin-top: 1.8rem;
`;

const FormModalMessage = () => {
    // Get Modal Status
    const ModalStatus = useSelector( state => state.modalStatus );
    const { showModal, status, message, btnLabel, type } = ModalStatus;
    // Use Dispatch For Hide Modal
    const dispatch = useDispatch();
    // Use Histry for rich the profile page
    let history = useHistory();

    // Modal Btn Click
    const handleModalBtnClick = () => {
        dispatch( setModalStatus( { showModal: false } ) );
        if ( status === 'successfull' )
            history.push( '/profile' );

        if ( type === 'logout' && status === 'successfull' )
            history.push( '/' );
    }

    return (
        <>
            {showModal && (
                <ModalContainer onClick={() => dispatch( setModalStatus( { showModal: false } ) )}>
                    <ModalMessageWrapper onClick={( event ) => event.stopPropagation()}>
                        <ModalIcon>
                            {status === 'successfull' ? (
                                <IoCheckmarkCircleOutline color="#2ecc71" />
                            ) : (
                                <IoWarning color="#e74c3c" />
                            )}
                        </ModalIcon>
                        <ModalMessage>{message}</ModalMessage>
                        <ModalButton
                            bg={status === 'successfull' ? '#2ecc71' : '#e74c3c'}
                            onClick={handleModalBtnClick}>
                            {btnLabel}
                        </ModalButton>
                    </ModalMessageWrapper>
                </ModalContainer>
            )
            }
        </>

    )
}

export default FormModalMessage;
