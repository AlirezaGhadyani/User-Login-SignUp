import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FromSubmitButtons } from '../Form/FormComponents';
import { useDispatch } from 'react-redux';
import { setModalStatus } from '../../../Redux/Actions';
import EditUser from './EditUser';
import FormModalMessage from '../Form/FormModalMessage';
import axios from 'axios';

// Styles
const NoDataContainer = styled.div`
width: 100%;
height: 100vh;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
& span{
    font-size: 2.4rem;
    font-family: titleFont;
    font-weight: 500;
    letter-spacing: 0.1;
    & a{
        color: rgba(192,57,43,1);
    }
}
`;

const UserDataContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 4rem;
text-align: center;
`;

const ProfileTitle = styled.h1`
font-size: 3.4rem;
font-weight: 600;
margin-bottom: 1rem;
border-bottom: 2px solid rgba(0,0,0,0.1);
width: 768px;
max-width: 95%;
padding: 1rem;
@media (max-width:410px){
    font-size: 3rem;
}
`;

const DataName = styled.span`
font-size: 2rem;
font-weight: 200;
`;

const DataEmailMobile = styled.span`
font-size: 1.6rem;
font-weight: 200;
`;

const EditBtnWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
& button{
    margin: 1.6rem .6rem;
}
@media (max-width:520px){
    flex-direction: column;
    margin-top: 1rem;
    & button{
    margin: 0.5rem 0rem;
}
}
`;

const Profile = () => {
    // Show Edit form state
    const [showEditForm, setShowEditForm] = useState( false );
    // set user data
    const dispatch = useDispatch();

    // Handle Authorize User
    const handleAuthorizeUser = () => {
        axios.get( process.env.REACT_APP_AUTHORIZE, {
            headers: {
                XXSRFTOKEN: localStorage.getItem( "userToken" )
            }
        } )
            .then( response => console.log( response ) )
            .catch( error => console.log( error ) )
    }

    useEffect( () => {
        handleAuthorizeUser();
    }, [] )

    // Handle Logout
    const handlLogout = () => {
        axios.post( process.env.REACT_APP_LOGOUT_USER_KEY )
            .then( response => {
                if ( response.status === 200 ) {
                    // Set Modal Status
                    dispatch( setModalStatus( {
                        showModal: true,
                        type: 'logout',
                        status: 'successfull',
                        message: `شما از حساب کاربری خود خارج شدید`,
                        btnLabel: 'خداحافظ',
                    } ) );
                }
            } )
            .catch( err => {
                // Set Modal Status
                dispatch( setModalStatus( {
                    showModal: true,
                    type: 'logout',
                    status: 'faild',
                    message: `کاربر گرامی درخواست خروج شما از حساب کاربری با خطا مواجه شد`,
                    btnLabel: 'خروج در هر صورت',
                } ) );
            } )
    }

    return (
        <>
            {false ? (
                <UserDataContainer>
                    <ProfileTitle>پروفایل من</ProfileTitle>
                    <DataName>نام :</DataName>
                    <DataEmailMobile>ایمیل :</DataEmailMobile>
                    <DataEmailMobile>شماره تلفن : </DataEmailMobile>
                    <EditBtnWrapper>
                        <FromSubmitButtons width="auto" font="1.3rem" padd="1.4rem"
                            onClick={() => setShowEditForm( true )}>ویرایش اطلاعات</FromSubmitButtons>
                        <FromSubmitButtons
                            width="auto"
                            font="1.3rem"
                            padd="1.4rem"
                            onClick={handlLogout}>خروج از حساب کاربری</FromSubmitButtons>
                    </EditBtnWrapper>
                    {showEditForm && (
                        <EditUser setShowEditForm={setShowEditForm} />
                    )}
                    <FormModalMessage />
                </UserDataContainer>
            ) : (
                <NoDataContainer>
                    <span>شما به حساب خود وارد نشده اید اگر <br /> حسابی دارید <Link to="/">وارد شوید</Link></span>
                </NoDataContainer>
            )}
        </>
    )
}

export default Profile;
