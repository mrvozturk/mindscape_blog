
const initialState = {
    contactClicked: false,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CONTACT_CLICKED':
        return {
          ...state,
          contactClicked: true,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  