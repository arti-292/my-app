const initialValues = {
  result: 0,
  count : 0
}
const counterReducer = (state = 1, action) => {
  
    switch (action.type) {
      case "INCREMENT":
        return {...state, count :  state.count + 1 }
      case "DECREMENT":
        return {...state,count :  state.count - 1 }
      case "RESET":
        return {...state, count : 0 }
      case "SUM":
        return {...state, result :  action.data }
      default:
        return {...state};
    }
  };
  
  export default counterReducer;