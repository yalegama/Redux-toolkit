import {configureStore} from '@reduxjs/toolkit'
import {borrow} from './reducer'

export const store=configureStore({
    reducer:{
        buy:borrow,
        
    }
})