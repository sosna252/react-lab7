import React from 'react'
import Component from './Component'

class ComponentOne extends React.Component {

    constructor(props) {
		super(props);
		this.state = {};
    }
   
    handleDelete (e) { 
        fetch('http://localhost:3000/employees/'+ this.props.data.id.toString(), {
        method: 'DELETE',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({id:this.props.data._id})
        }).then(Component.render())
        
    }
    
    render() {
		return (
            this.props.data.isActive === true ?
            <div >
                <p style={{color:'blue'}}>{this.props.data.name} - {this.props.data.age}</p>
                <hr/>          
             </div> 
             :
             <div >
                <p style={{color:'red'}}>{this.props.data.name} - {this.props.data.age}</p>
                <hr />          
             </div> 
        )
        }       
}

export default ComponentOne