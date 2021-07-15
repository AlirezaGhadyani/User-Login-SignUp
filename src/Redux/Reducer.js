const initialState = {
    userStatus: '',
    modalStatus: [{
        showModal: false,
        type: '',
        status: '',
        message: ``,
        btnLabel: '',
    }],
    userData: []
};

// const saveUserDataToLocalStorage = ( state, payload ) => {
//     {}
// }

const AppReducer = ( state = initialState, { type, payload } ) => {
    switch ( type ) {
        case "SET_USER_STATUS":
            return { ...state, userStatus: payload };
        case "SET_MODAL_STATUS":
            return { ...state, modalStatus: payload };
        case "SET_USER_DATA":
            return { ...state, userData: payload };
        default:
            return state
    }
}

export default AppReducer;