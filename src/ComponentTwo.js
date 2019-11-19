import React from 'react'

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
            Age: 0
		};
        this.handleChange=this.handleChange.bind(this);
	}
    handleChange (event) { 
        this.setState({Age: event.target.value})     
    }
	
	
	render() { 
		
            return(
                
                this.state.Age < 18 ?
               <div>
                  <p> Age <input onChange={this.handleChange} type='number'></input></p>
                  <p> Parent Name <input></input> </p>
                  <p> Parent Phone No. <input></input> </p>
                  <button>Submit</button>
                </div>
                :
                <div>
                  <p> Age <input onChange={this.handleChange} type='number'></input> </p>
                  <p> Name <input></input> </p>
                  <p> Email <input></input> </p>
                  <button>Submit</button>
                </div>

               
            )
        }
		
        	
	
}

export default App