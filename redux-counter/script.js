const initialState = {
  counter : 0
}

function rootReducer (state = initialState, action){

  switch(action.type){
    case "INCREMENT":
      var newState = Object.assign({}, state);
      newState.counter++;
      return newState;
    case "DECREMENT":
    var newState = Object.assign({}, state);
    newState.counter--;
      return newState;
    default:
      return state;
  }

}


const store = Redux.createStore(rootReducer);


$(document).ready(
  function(){
    console.log("DOM LOAD COMPLETE...");
    $("#increment").on("click", function(){
      console.log("INCREMENT");
      store.dispatch({
        type : "INCREMENT"
      });
      let currentState = store.getState();
      $("#counter").text(currentState.counter);
    });
    $("#decrement").on("click", function(){
      console.log("DECREMENT");
      store.dispatch({
        type : "DECREMENT"
      });
      let currentState = store.getState();
      $("#counter").text(currentState.counter);
    });    
  }
);