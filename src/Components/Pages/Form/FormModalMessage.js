import React, { useState } from 'react';
import styled from 'styled-components';
import { IoCheckmarkCircleOutline, IoWarning } from 'react-icons/io5';

// Styles
const ModalContainer = styled.div`
position: fixed;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: rgba(0,0,0,0.15);
backdrop-filter: blur(2px);
z-index: 100;
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
    return (
        <ModalContainer>
            <ModalMessageWrapper>
                <ModalIcon>
                    <IoCheckmarkCircleOutline color="#2ecc71" />
                </ModalIcon>
                <ModalMessage>ورود شما به حساب کاربری <br /> با موفقیت انجام شد</ModalMessage>
                <ModalButton bg="#2ecc71">باشه</ModalButton>
            </ModalMessageWrapper>
        </ModalContainer>
    )
}

export default FormModalMessage;
