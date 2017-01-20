
import React from 'react';


export default function App (props) {
  console.log("HI")
  return (
    <div>

        {
          props.children && React.cloneElement(props.children, props)
        }
    </div>
  )

}
