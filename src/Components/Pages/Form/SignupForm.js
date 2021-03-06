import React from 'react';
import { FormWrapper, FromSubmitButtons, MutedText, FormTextField } from './FormComponents';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setModalStatus } from '../../../Redux/Actions';

const SignupForm = ( { Switch } ) => {
    //Redux Setup
    const dispatch = useDispatch();

    // Validate Form
    // Phone Number RegEx
    const iranPhoneRegEx = /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/ig;
    const validate = yup.object( {
        name: yup.string()
            .max( 34, 'حداکثر کاراکتر ورودی 34 می باشد' )
            .required( 'لطفا نام کامل خود را وارد کنید' ),
        email: yup.string()
            .email( 'ایمیل وارد شده معتبر نمی باشد' )
            .required( 'لطفا ایمیل خود را وارد کنید' ),
        mobile: yup.string()
            .matches( iranPhoneRegEx, 'لطفا یک شماره تلفن معتبر وارد کنید' )
            .required( 'لطفا شماره تلفن خود را وارد کنید' ),
        password: yup.string()
            .min( 8, 'حداقل 8 کاراکتر باید وارد کنید' )
            .required( 'لطفا یک رمز وارد کنید' )
    } );

    // Handle On Submit Form
    const handleSubmitForm = ( values ) => {
        const { email, mobile, name, password } = values;
        // Post User Information To Server As Signup
        axios.post( 'https://api-test.nikdiba.com/nikdiba/api/test/register', {
            "email": email,
            "mobile": mobile,
            "name": name,
            "password": password
        } )
            .then( response => {
                const { name } = response.data.data.user;
                const { token } = response.data.data;

                if ( response.status === 200 ) {
                    // Set Modal Status
                    dispatch( setModalStatus( {
                        showModal: true,
                        type: 'signup',
                        status: 'successfull',
                        message: `${name} عزیز حساب شما با موفقیت ایجاد شد`,
                        btnLabel: 'باشه',
                    } ) );

                    //Set User Token In LocalStoreage
                    localStorage.setItem( "userToken", token );
                }
            } )
            .catch( error => {
                // Set Modal Status
                dispatch( setModalStatus( {
                    showModal: true,
                    type: 'signup',
                    status: 'faild',
                    message: `کاربر گرامی در فرایند ایجاد حساب با مشکل مواجه شد`,
                    btnLabel: 'امتحان دوباره',
                } ) );
            } )
    };

    return (
        <FormWrapper>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    mobile: '',
                    password: ''
                }}
                validationSchema={validate}
                onSubmit={handleSubmitForm}>
                {formik => (
                    <Form>
                        <FormTextField type="text" name="name" placeholder="نام و نام خانوادگی خود را وارد کنید" />
                        <FormTextField type="email" name="email" placeholder="ایمیل خود را وارد کنید" />
                        <FormTextField type="tel" name="mobile" placeholder="شماره موبایل خود را وارد کنید" />
                        <FormTextField type="password" name="password" placeholder="رمز خود را وارد کنید" />
                        <FromSubmitButtons type="submit">ایجاد حساب</FromSubmitButtons>
                        <MutedText>قبلا ثبت نام کرده اید؟<a href="#" onClick={() => Switch()}>ورود به حساب</a></MutedText>
                    </Form>
                )}
            </Formik>
        </FormWrapper>
    )
}

export default SignupForm
