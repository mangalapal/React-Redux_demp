import {createStore} from "redux";
const initialState={counter:0}
const counterReducer=(state=initialState,action)=>{
    if(action.type==="increase"){
        return{
            counter:state.counter+action.payload,
        }
    }

    if(action.type==="decrement"){
        if(state.counter<=0){
            return state    ;
        }
        return{
            counter:state.counter-1
        }
    }

    return state;

}

export const store=createStore(counterReducer)