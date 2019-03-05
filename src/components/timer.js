import React from 'react'

function Timer (props) {
    return ( 
        <div className="col-md-4">
        <div className="card bg-dark text-white">
            <div className="card-header d-flex justify-content-center mb-5" style={{fontSize: 90}}>{props.counter}</div>
            <div className="card-body">
                <button 
                    className="card-title btn btn-primary" 
                    onClick={props.clickButton} 
                    disabled={props.counter > 0 ? true : false}>
                        Start !
                </button>
            </div>
        </div>
        </div>
    )
}
        

export default Timer