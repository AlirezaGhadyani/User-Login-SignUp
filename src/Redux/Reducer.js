const initialState = {
    modalStatus: []
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