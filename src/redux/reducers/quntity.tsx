const initialState: number = 0;
const counter = (state = initialState, action: any) => {
  switch (action.type) {
    case "INCREASE":
      return state+1;
    case "DECREASE":
      return state-1;
    default:
      return initialState;
  }
};

export default counter;
