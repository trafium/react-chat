export function fetchMessages() {
   return dispatch => {
      dispatch({type: "FETCH_MESSAGES"});
      setTimeout(()=>{
         dispatch({
            type: "FETCH_MESSAGES_FULFILLED",
            payload: [{name:'Traf', message:'Раз'},{name:'Mishanya', message:'Два'},{name:'Konung', message:'Три'}]
         });
      }, 1000);
   };
}