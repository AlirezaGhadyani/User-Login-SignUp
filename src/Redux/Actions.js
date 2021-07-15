export const setUserStatus = ( status ) => {
    return {
        type: "SET_USER_STATUS",
        payload: status
    };
}

export const setModalStatus = ( modalStatus ) => {
    return {
        type: "SET_MODAL_STATUS",
        payload: modalStatus
    };
}

export const setUserData = ( userData ) => {
    return {
        type: "SET_USER_DATA",
        payload: userData
    };
}