import React from 'react';
import styled from 'styled-components';
import { FormWrapper, FromSubmitButtons, FormTextField } from '../Form/FormComponents';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setModalStatus } from '../../../Redux/Actions';
import { FaTimes } from 'react-icons/fa';

// Styles
const UserEditContainer = styled.div`
position: fixed;
top: 0;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: rgba(0,0,0,0.2);
backdrop-filter: blur(2px);
z-index: 100;
`;

const EditFormWrapper = styled.div`
position: relative;
width: 500px;
max-width: 95%;
background: #fff;
border-radius: 1rem;
padding: 2rem;
`;

const EditFormTitle = styled.h1`
font-size: 2.6rem;
font-weight: 400;
text-align: center;
margin: 1rem 0;
`;

const TimesButton = styled.button`
background: transparent;
border: 0;
position: absolute;
top: 0.5rem;
right: 0.5rem;
cursor: pointer;
& svg{
    font-size: 2rem;
}
`;

const EditUser = ( { setShowEditForm } ) => {
    const dispatch = useDispatch();
    // Validate Form
    const validate = yup.object( {
        email: yup.string()
            .email( 'ایمیل وارد شده معتبر نمی باشد' ),
        name: yup.string()
            .max( 34, 'حداکثر کاراکتر ورودی 34 می باشد' ),
        password: yup.string()
            .min( 8, 'حداقل 8 کاراکتر باید وارد کنید' )
            .required( 'لطفا یک رمز وارد کنید' )
    } );

    // Handle On Submit Form
    const handleSubmitForm = ( values ) => {
        const { email, name, password } = values;
        // call patch request for update user data
        axios.patch( process.env.REACT_APP_UPDATE_USER_KEY, {
            "email": email,
            "id": "id",
            "name": name,
            "password": password
        } )
            .then( response => {
                if ( response.status === 200 ) {
                    // Set Modal Status
                    dispatch( setModalStatus( {
                        showModal: true,
                        type: 'update',
                        status: 'successfull',
                        message: `بروزرسانی اطلاعات شما با موفقیت انجام شد`,
                        btnLabel: 'باشه',
                    } ) );
                }
            } )
            .catch( error => {
                // Set Modal Status
                dispatch( setModalStatus( {
                    showModal: true,
                    type: 'update',
                    status: 'faild',
                    message: `کاربر گرامی درخواست بروزرسانی اطلاعات شما با مشکل مواجه شد`,
                    btnLabel: 'امتحان دوباره',
                } ) );
            } )
    }

    return (
        <UserEditContainer>
            <EditFormWrapper>
                <EditFormTitle>ویرایش اطلاعات</EditFormTitle>
                <TimesButton onClick={() => setShowEditForm( false )}>
                    <FaTimes />
                </TimesButton>
                <FormWrapper>
                    <Formik
                        initialValues={{
                            email: '',
                            name: '',
                            password: ''
                        }}
                        validationSchema={validate}
                        onSubmit={handleSubmitForm}>

                        {formik => (
                            <Form>
                                <FormTextField type="email" name="email" placeholder="ایمیل جدید خود را وارد کنید" />
                                <FormTextField type="text" name="name" placeholder="نام و نام خانوادگی جدید را وارد کنید" />
                                <FormTextField type="password" name="password" placeholder="رمز خود را وارد کنید" />
                                <FromSubmitButtons type="submit">بروزرسانی</FromSubmitButtons>
                            </Form>
                        )}

                    </Formik>
                </FormWrapper>
            </EditFormWrapper>
        </UserEditContainer >
    )
}

export default EditUser
