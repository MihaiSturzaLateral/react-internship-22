export const ADD = 'ADD';


export function add(amount) {
    return {
      type: "ADD",
      payload: amount
    };
  }