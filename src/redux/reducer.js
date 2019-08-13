const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_COUNT":
      const newAddList = state.counters.map((item, index) => {
        if (item.id === action.payload.id) {
          return {
            ...item, // copy the existing item
            count: item.count + 1
          };
        } else {
          return item;
        }
      });

      return {
        ...state,
        counters: newAddList
      };
    case "SUBTRACT_FROM_COUNT":
      const newSubList = state.counters.map((item, index) => {
        if (item.id === action.payload.id) {
          return {
            ...item, // copy the existing item
            count: item.count - 1
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        counters: newSubList
      };
      case "ADD_COUNTER":
        return {...state, counters:[...state.counters, action.payload]};
         case "REMOVE_COUNTER":
        const item = state.counters.filter((item, index)=>{
             if(item.id === action.payload.id){
               return false
             }else{
               return true
             }
         })
          
        return {
          ...state, counters:[...item]
        }
        case "RESET_COUNTERS":
          console.log("reset counters")
          return {
            ...state, counters:[]
          }
    default:
      return state;
  }
};


export default reducer