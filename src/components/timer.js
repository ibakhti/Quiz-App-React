import React from 'react'

function Timer (props) {

    return ( 
        <div className="col-md-4">
        <div className={props.background}>
            <div className="card-header d-flex justify-content-center mb-5" style={{fontSize: 90}}>{props.counter}</div>
            <div className="card-body d-flex justify-content-center">
                <p className="lead font-weight-bold">{props.txt}</p>
            </div>
        </div>
        </div>
    )
}
        

export default Timer