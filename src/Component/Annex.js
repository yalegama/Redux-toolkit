import React from 'react'
import {useSelector} from 'react-redux'
function Annex() {

const zar=useSelector((state)=>state.buy.income)

  return (
    <div>
    
    <h1>annex store web app</h1>

    <h1>your current income={zar}</h1>
    
    </div>
  )
}

export default Annex