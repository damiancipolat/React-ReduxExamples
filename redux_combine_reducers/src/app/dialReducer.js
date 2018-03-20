const storePhone = {
  numbers : []
}

const dialReducer = (state=storePhone,action)=>{  
  switch (action.type) {
    case 'DIAL_NUMBER':
      return {numbers:[...state.numbers,action.value]};
    break;  	
    case 'ERASE_NUMBER':
      return {numbers:[]};
    break;
    case 'DEL_NUMBER':
      return {numbers:(state.numbers.length>0)?state.numbers.slice(0, state.numbers.length-1):[]};
    break;
    default:
      return state
  }
}

export default dialReducer;