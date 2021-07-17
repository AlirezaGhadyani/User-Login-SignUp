const initialState = {
    modalStatus: [{
        showModal: false,
        type: '',
        status: '',
        message: ``,
        btnLabel: '',
    }]
};

const AppReducer = ( state = initialState, { type, payload } ) => {
    switch ( type ) {
        case "SET_MODAL_STATUS":
            return { ...state, modalStatus: payload };
        default:
            return state
    }
}

export default AppReducer;