import React from 'react'
import EmployeeList from './EmployeeList'



class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			employees: [],
			//loading: true,
			//addemp: false
		};
	
	}
	componentDidMount() {

        fetch('http://localhost:3000/employees')
        .then(resp=>resp.json())
        .then(resp=> 
            {
                this.setState({employees: resp})
            })
       
	}
	
	
	render() { 
		//if (this.state.loading) {
           // return <p>Loading ...</p>;
		//}  
		//if(this.state.add) {
            return(
                <div>
                    
                    <EmployeeList employees={this.state.employees}/>
                </div>
            )
        }
		//return (
		//	<div>
        //        <button onClick={this.handleAddEmployee}>Add Employee</button>
        //        <EmployeeList employees={this.state.employees}/>
       //     </div>
		
        	
	
}

export default App