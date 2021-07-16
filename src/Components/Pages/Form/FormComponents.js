import React from 'react';
import styled from "styled-components";
import { useField, ErrorMessage } from 'formik';

// Styled Components Style
export const FormWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 0 0.8rem;
& form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`;

export const FromSubmitButtons = styled.button`
width: ${props => props.width ? props.width : '100%'};
font-family: titleFont;
font-size: ${props => props.font ? props.font : '1.6rem'};
font-weight: 700;
letter-spacing: .15rem;
padding: 0.6rem ${props => props.padd ? props.padd : '0'};
background-size: 200% auto;
color: white;
box-shadow: 0 0 20px #eee;
background-image: linear-gradient(-90deg, rgba(192,57,43,1) 20%, rgba(231,76,60,1) 100%);
transition: all 0.5s ease;
border: 0;
border-radius: 1.8rem;
cursor: pointer;
margin-top: 1rem;
:hover{
background-position: right center;
transition: all 0.5s ease;
}
`;

export const MutedText = styled.span`
font-size: 1rem;
font-weight: 500;
font-family: titleFont;
color: rgba(200,200,200,1);
margin: 0.5rem 0;
& a{
    color: rgba(192,57,43,1);
    margin: 0 0.1rem;
    cursor: pointer;
}
`;

//                         Text Field Component                       //

// Text Field Styles
const TextFieldWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`;

const TextFieldInp = styled.input`
width: 100%;
font-family: mainFont;
font-size: 1.2rem;
font-weight: 500;
padding: 0.4rem;
border: 2px solid rgba(200,200,200,0.3);
border-radius: 0.5rem;
::placeholder{
    color: rgba(200,200,200,1);
    font-family: titleFont;
}
`;

const InputErrorMessage = styled.span`
font-family: titleFont;
font-size: 0.9rem;
letter-spacing: 0.1;
font-weight: 900;
color: rgba(192,57,43,1);
margin: 0.4rem 0;
`;

export const FormTextField = ( { ...props } ) => {
    const [field] = useField( props );

    return (
        <TextFieldWrapper>
            <TextFieldInp {...field} {...props} />
            <InputErrorMessage>
                <ErrorMessage name={field.name} />
            </InputErrorMessage>
        </TextFieldWrapper>
    );
}