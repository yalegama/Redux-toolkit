import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'

function Blast() {

const dispatch=useDispatch();
const select=useSelector((state)=>state.buy)

const [productprice, setproductprice] = useState(500);

const addcart=()=>{
  dispatch({
    type:'increment',
    payload:productprice
  })
}

const back=()=>{
  dispatch({
    type:'decrement',
    payload:productprice
  })
}

  return (
    <>
    
    <div>
    <h1>price of this product:{productprice}</h1>
    <button onClick={addcart}>add to cart</button>
    <h1>{select.value}</h1>
    <button onClick={back}>put back</button>
    
    </div>
    
    </>
  )
}

export default Blast