/* eslint-disable no-unused-vars */

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  };
};

// older version, current state set to empty
// export const storeState = () => {
//   let currentState = {}; 
//   return (stateChangeFunction = state => state) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = { ...newState };
//     return newState;
//   };
// };

// updated version, current state set to 0,0,0
export const storeState = (initial) => {
  let currentState = initial; 
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};