import * as actionTypes from "./actions";

const State = {
    IsLoggedIn:false,
    DoctorID:"",
    DoctorData:{},
    SelectedPatientID:"",
    SelectedPateintData:{}
}

const reducer = (state = State, action) => {
  switch (action.type) {
    case actionTypes.ON_SIGNIN:
      return {
        ...state,
        IsLoggedIn: true,
        DoctorID:action.payload.userID,
        DoctorData:action.payload.user
      };

      case actionTypes.ON_SIGNOUT:
      return {
        ...state,
        IsLoggedIn: false,
        DoctorID:"",
        DoctorData:""
      };

      case actionTypes.ON_SELECT:
      return {
        ...state,
        SelectedPatientID:action.payload.userID,
        SelectedPateintData:action.payload.user
      };

    default:
      return state;
  }
};

export default reducer;