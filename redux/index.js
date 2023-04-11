// initial state
const INITIAL_STATE = {
   hamburgerOpened: false,
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
      default: 
         return {
            ...state,
            hamburgerOpened: false,
         }
   }
}

export default reducer;