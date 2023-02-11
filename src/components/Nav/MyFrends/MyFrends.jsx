import React from 'react';
import Frend from './Frend'




let MyFrends = (props) => {
   
let frend = props.frends.map(el => {
    return <Frend name={el.name} />
})
   return (
    <div>
        <div>
            {frend}
        </div>
    </div>
   )
}

export default MyFrends