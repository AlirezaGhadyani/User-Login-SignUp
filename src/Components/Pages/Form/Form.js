import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { motion } from 'framer-motion';

// Styles
const FormContainer = styled.section`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
@media (max-width:320px){
    margin: 6rem;
}
`;

const FormWrapper = styled.div`
position: relative;
display: flex;
flex-direction: column;
width: 320px;
max-width: 95%;
background: #fff;
border-radius: 1.4rem;
box-shadow: 0 0 15px rgba(15,15,15,0.15);
overflow: hidden;
`;

const TopWrapper = styled.div`
width: 100%;
height: 200px;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 0 1.8rem;
padding-bottom: 5rem;
`;

const BackDrop = styled( motion.div )`
position: absolute;
width: 180%;
height: 550px;
top: -350px;
left: -150px;
border-radius: 50%;
background: rgb(192,57,43);
background: linear-gradient(90deg, rgba(192,57,43,1) 20%, rgba(231,76,60,1) 100%);
`;

const TopWrapperHeader = styled.div`
width: 100%;
display: flex;
flex-direction: column;
font-family: titleFont;
letter-spacing: .06rem;
color: #fff;
z-index: 10;
`;

const HeaderText = styled.h1`
font-size: 2rem;
font-weight: 700;
`;

const HeaderTextSub = styled.h2`
font-size: 1rem;
font-family: 400;
`;

const InnerForm = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 2rem;
margin-bottom: 1rem;
`;

// Animation Styling
const backDropVariants = {
    expended: {
        width: "250%",
        height: "1050px",
        borderRadius: "20%",
    },
    collapsed: {
        width: "180%",
        height: "550px",
        borderRadius: "50%",
    }
};

const expendingTransition = {
    type: 'spring',
    duration: 2.3,
    stiffness: 30
};

const Form = () => {
    const [isExpended, setExpended] = useState( false );
    const [activeForm, setActiveForm] = useState( 'login' );

    // Play the Changing Animation
    const playBackDropAnimation = () => {
        setExpended( true );
        setTimeout( () => {
            setExpended( false );
        }, expendingTransition.duration * 1000 - 1500 );
    }

    // Switch Form to Signup
    const switchToSignup = () => {
        playBackDropAnimation();
        setTimeout( () => {
            setActiveForm( 'signup' );
        }, 500 )
    }
    // Switch Form to Login
    const switchToLogin = () => {
        playBackDropAnimation();
        setTimeout( () => {
            setActiveForm( 'login' );
        }, 500 )
    }

    return (
        <FormContainer>
            <FormWrapper>
                <TopWrapper>
                    <BackDrop initial={false} transition={expendingTransition} animate={isExpended ? 'expended' : 'collapsed'} variants={backDropVariants} />
                    <TopWrapperHeader>
                        <HeaderText>خوش آمدید</HeaderText>
                        {activeForm === 'login' ? (
                            <HeaderTextSub>برای ادامه وارد حساب کاربری خود شوید</HeaderTextSub>
                        ) : (
                            <HeaderTextSub>برای خود یک حساب کاربری ایجاد کنید</HeaderTextSub>
                        )}
                    </TopWrapperHeader>
                </TopWrapper>
                <InnerForm>
                    {activeForm === 'login' ? (
                        <LoginForm Switch={switchToSignup} />
                    ) : (
                        <SignupForm Switch={switchToLogin} />
                    )}
                </InnerForm>
            </FormWrapper>
        </FormContainer>
    )
}

export default Form
