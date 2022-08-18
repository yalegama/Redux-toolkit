import {createReducer} from '@reduxjs/toolkit'

const intialvalue={value:0,income:10000}

export const borrow=createReducer(intialvalue,{

    increment:(state,action)=>{

        if(state.income<=0)
        {
            state.income=state.income;
        }
        else{

            state.value=state.value+1;
            state.income=state.income-action.payload;
        }

        
    },
    decrement:(state,action)=>{
     
        if(state.value<=0)
        {

            state.value=state.value;

        }
        else{
            state.value=state.value-1;
        state.income=state.income+action.payload;

        }

        
    }

})