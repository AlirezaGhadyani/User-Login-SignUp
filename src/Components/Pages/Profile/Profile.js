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
    const [showEditForm, setShowEditForm] = useState( false );
    const [userData, setUserData] = useState( [] );
    const dispatch = useDispatch();

    // Handle Authorize User
    const handleAuthorizeUser = () => {
        axios.get( 'https://api-test.nikdiba.com/nikdiba/api/user/authorize', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem( "userToken" )}`
            }
        } )
            .then( response => {
                console.log( response );
                setUserData( response.data.data.user );
            } )
            .catch( error => console.log( error ) )
    }

    useEffect( () => {
        handleAuthorizeUser();
    }, [] )

    // Handle Logout
    const handlLogout = () => {
        if ( localStorage.getItem( "userToken" ) ) {
            localStorage.clear();
            // Set Modal Status
            dispatch( setModalStatus( {
                showModal: true,
                type: 'logout',
                status: 'successfull',
                message: `?????? ???? ???????? ???????????? ?????? ???????? ????????`,
                btnLabel: '??????????????',
            } ) );
        }
        else {
            // Set Modal Status
            dispatch( setModalStatus( {
                showModal: true,
                type: 'logout',
                status: 'faild',
                message: `?????????? ?????????? ?????????????? ???????? ?????? ???? ???????? ???????????? ???? ?????? ?????????? ????`,
                btnLabel: '???????????? ????????????',
            } ) );
        }
    }

    const { name, email, mobile } = userData;

    return (
        <>
            {userData ? (
                <UserDataContainer>
                    <ProfileTitle>?????????????? ????</ProfileTitle>
                    <DataName>?????? : {name}</DataName>
                    <DataEmailMobile>?????????? : {email}</DataEmailMobile>
                    <DataEmailMobile>?????????? ???????? : {mobile} </DataEmailMobile>
                    <EditBtnWrapper>
                        <FromSubmitButtons width="auto" font="1.3rem" padd="1.4rem"
                            onClick={() => setShowEditForm( true )}>???????????? ??????????????</FromSubmitButtons>
                        <FromSubmitButtons
                            width="auto"
                            font="1.3rem"
                            padd="1.4rem"
                            onClick={handlLogout}>???????? ???? ???????? ????????????</FromSubmitButtons>
                    </EditBtnWrapper>
                    {showEditForm && (
                        <EditUser setShowEditForm={setShowEditForm} userId={userData.id} />
                    )}
                    <FormModalMessage />
                </UserDataContainer>
            ) : (
                <NoDataContainer>
                    <span>?????? ???? ???????? ?????? ???????? ???????? ?????? ?????? <br /> ?????????? ?????????? <Link to="/">???????? ????????</Link></span>
                </NoDataContainer>
            )}
        </>
    )
}

export default Profile;
