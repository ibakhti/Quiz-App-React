import React from 'react'

class Case extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            data: [
                   {case: 'Start', ans: 's'},
                   {case: '1 + 2', ans: '3'},
                   {case: '2 + 2', ans: '4'},
                   {case: '3 + 2', ans: '5'},
                   {case: 'Finish', ans: 'f'}
                ],
            index: 0,
            solved: 0,
        }
    }

    submitButton = (event) => {
        event.preventDefault();
        // console.log(this.state.solved)
        if (this.state.data[this.state.index].ans === this.state.solved) {
            this.setState({
                index: this.state.index + 1,
            });
            this.props.background(true);
            this.refs.input.value = '';

        } else if (this.state.data[this.state.index].ans === 's'){
            this.setState({index: this.state.index + 1});
            this.props.timer();
            this.refs.input.value = '';

        } else if (this.state.data[this.state.index].ans === 'f') {
            this.props.clear();
            this.props.background(this.state.data[this.state.index].ans);
            this.refs.input.value = '';
        }else {
            this.props.background(false)
            this.refs.input.value = '';
        }
        
    }

    placeholder = (state) => {
        if (state === 4) {
            return 'Press Enter To Finish'
        }else {
            return 'Enter Your Answer'
        }
    }

    render() {
        return (
            <div className="col-md-4 offset-md-1">
                <div className="card bg-light text-dark">
                    <div className="card-header d-flex justify-content-center mb-5" style={{fontSize: 90}}>
                        {this.state.data[this.state.index].case}
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.submitButton} className="form-group">
                            <input 
                                onChange={event => this.setState({solved: event.target.value})} 
                                type="text" 
                                className="form-control" 
                                placeholder= {this.placeholder(this.state.index)}
                                ref="input"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Case