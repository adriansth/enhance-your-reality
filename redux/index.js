// initial state
const INITIAL_STATE = {
   hamburgerOpened: false,
   formSubmited: false,
};

// state actions
const reducer = (state = INITIAL_STATE, action) => {
   switch(action.type) {
      // hamburger modal
      case "OPEN_HAMBURGER":
         return {
            ...state,
            hamburgerOpened: true,
         }
      case "CLOSE_HAMBURGER":
         return {
            ...state,
            hamburgerOpened: false,
         }
      // form submited
      case "SUBMITTED":
         return {
            ...state, 
            formSubmitted: true,
         } 
      default: 
         return {
            ...state,
         }
   }
}

export default reducer;