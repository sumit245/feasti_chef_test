
import { SET_VERIFICATION_ID, SET_PHONE_NUMBER } from '../actions/actions';

const initialState = {
    verificationId: null,
    phoneNumber: '',
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VERIFICATION_ID:
            return {
                ...state,
                verificationId: action.payload.verificationId,
            };
        case SET_PHONE_NUMBER:
            return {
                ...state,
                phoneNumber: action.payload.phoneNumber,
            };
        default:
            return state;
    }
};