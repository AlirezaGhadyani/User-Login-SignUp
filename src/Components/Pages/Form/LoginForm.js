import React from 'react';
import { FormWrapper, FromSubmitButtons, MutedText, FormTextField } from './FormComponents';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

const LoginForm = ( { Switch } ) => {

    // Validate Form
    // Phone Number RegEx
    const iranPhoneRegEx = /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/ig;
    const validate = yup.object( {
        mobile: yup.string()
            .matches( iranPhoneRegEx, 'لطفا یک شماره تلفن معتبر وارد کنید' )
            .required( 'لطفا شماره تلفن خود را وارد کنید' ),
        password: yup.string()
            .min( 8, 'حداقل 8 کاراکتر باید وارد کنید' )
            .required( 'لطفا یک رمز وارد کنید' )
    } );

    // Handle On Submit Form
    const handleSubmitForm = ( values ) => {
        console.log( values );
    };

    return (
        <FormWrapper>
            <Formik
                initialValues={{
                    mobile: '',
                    password: ''
                }}
                validationSchema={validate}
                onSubmit={handleSubmitForm}>
                {formik => (
                    <Form>
                        <FormTextField type="tel" name="mobile" placeholder="شماره موبایل خود را وارد کنید" />
                        <FormTextField type="password" name="password" placeholder="رمز خود را وارد کنید" />
                        <FromSubmitButtons type="submit">ورود</FromSubmitButtons>
                        <MutedText>حساب کاربری ندارید؟ <a onClick={() => Switch()}>ایحاد حساب</a></MutedText>
                    </Form>
                )}
            </Formik>
        </FormWrapper>
    )
}

export default LoginForm
