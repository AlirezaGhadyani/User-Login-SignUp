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