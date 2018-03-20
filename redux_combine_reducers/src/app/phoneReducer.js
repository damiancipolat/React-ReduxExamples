const storeNumber = {
  display : '- - -'
}

const phoneReducer = (state=storeNumber,action)=>{

  switch (action.type) {
    case 'UPDATE_NUMBER':{      

      if (action.value.length>0){

        let num = '';

        action.value.forEach((digit)=>{
          num+=digit;
        });
        
        return {display:num};

      }
      else
        return {display:'- - -'};
    }
    break;
    default:
      return state
  }

}

export default phoneReducer;