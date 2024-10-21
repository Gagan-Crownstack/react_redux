import { createStore } from "redux";
import { combineReducers } from "redux";

const CAKE_ORDERED='CAKE_ORDERED'
const CAKE_RESTOCK='CAKE_RESTOCK'
const ICECREAM_ORDERED='ICECREAM_ORDERED'
const ICECREAM_RESTOCKED='ICECREAM_RESTOCKED'


//action
function orderCake(qty=1){
return{
    type:CAKE_ORDERED,
    payload:qty
}
}

function restockCake(qty=1){
    return{
        type:CAKE_RESTOCK,
        payload:qty
    }
}

function orderIceCream(qty=1){
    return{
        type:ICECREAM_ORDERED,
        payload:qty
    }
 }

 function restockIceCream(qty=1){
    return{
        type:ICECREAM_RESTOCKED,
        payload:qty
    }
 }


//initial state
const initialCakeState={
    numOfCakes:10
}
const initialIceCreamState={
    numOfIceCreams:10
}


// const initialState={
//     numOfCakes:10,
//     numOfIceCreams:10
// }

const reducerCake =(state = initialCakeState,action)=>{
switch(action.type){
    case CAKE_ORDERED:
        return {
            ...state,
            numOfCakes:state.numOfCakes-action.payload,
        }
    
    case CAKE_RESTOCK:
        return {
            ...state,
            numOfCakes:state.numOfCakes + action.payload,
        }
    default:
        return state;
}
}

const reducerIceCream =(state = initialIceCreamState,action)=>{
    switch(action.type){     
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCreams:state.numOfIceCreams-action.payload,
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCreams:state.numOfIceCreams + action.payload,
            }
        default:
            return state;
    }
    }


    const rootreducer= combineReducers({
        cake:reducerCake,
        iceCream:reducerIceCream
    })


const store =createStore(rootreducer);
console.log("Initial State = ", store.getState());

const unsubscribe = store.subscribe(()=> console.log("Updated State ", store.getState()))


store.dispatch(orderCake(2))
store.dispatch(restockCake(3))
store.dispatch(orderIceCream(5))
store.dispatch(restockIceCream(2))


unsubscribe()

