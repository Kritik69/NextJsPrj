import React from 'react'

function Pagetitle(props) {
  return (
    <div className="page-banner sec-padd">
        <div className="container">
            <h1 className="page-title text-center fw-bold">{props.title}</h1>
        </div>
    </div>
  )
}

export default Pagetitle