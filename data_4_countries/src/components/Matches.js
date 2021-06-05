import React from 'react'
const Matches = ({country, handler}) => {
    return (
        <div>
          <p>{country.name} <button onClick={handler}>show</button></p>
        </div>
    )
}
export default Matches