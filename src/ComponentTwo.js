import React from 'react'

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
            Age: 1,
            ParentName:"",
            ParentPhone:"",
            Name:"",
            Email:"",
            AgeOk: true,
            NumberOK: true,
            EmailOk: true
		};
        this.handleChange=this.handleChange.bind(this); 
        this.AgeValidation=this.AgeValidation.bind(this);
        this.NumberValidation=this.NumberValidation.bind(this);
        this.EmailValidation=this.EmailValidation.bind(this);
        this.Validation=this.Validation.bind(this);
	}
    handleChange (event) { 
        switch(event.target.name){
        case "Age":
            this.setState({Age: event.target.value}); 
            break;
        case "ParentName":
            this.setState({ParentName: event.target.value});
            break;
        case "ParentPhone":
            this.setState({ParentPhone: event.target.value}); 
            break;
        case "Name":
            this.setState({Name: event.target.value}); 
            break;
        case "Email":
            this.setState({Email: event.target.value});     
            break;
        }     
    }
    AgeValidation (event)
    {
        if(this.state.Age>0)
            this.setState({AgeOk:true})
        else
            this.setState({AgeOk:false})
    }
    NumberValidation (event)
    {
        if(this.state.ParentPhone.match(/^[0-9]{9}$/))
            this.setState({NumberOK: true})
        else
            this.setState({NumberOK: false})
        
    }
    EmailValidation (event)
    {
        if(this.state.Email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/))
            this.setState({EmailOk: true})
        else
            this.setState({EmailOk: false})
    }
    Validation (event)
    {
        this.AgeValidation()
        this.EmailValidation()
        this.NumberValidation()
    }
	
	render() { 
		
            return(
                
                this.state.Age < 18 ?
               <div>
                  <p> Age <input name="Age" onChange={this.handleChange} type='number'></input></p>
                  {this.state.AgeOk ? null : <label style={{color:"red"}}>Wrong Age</label>}
                  <p> Parent Name <input name="ParentName" onChange={this.handleChange}></input> </p>
                  <p> Parent Phone No. <input name="ParentPhone" onChange={this.handleChange}></input> </p>
                  {this.state.NumberOK ? null : <div><label style={{color:"red"}}>Wrong Number</label><br/></div>}
                
                  <button onClick={this.Validation}>Submit</button>
                  <br/>
                </div>
                :
                <div>
                  <p> Age <input name="Age" onChange={this.handleChange} type='number'></input> </p>
                  {this.state.AgeOk ? null : <label style={{color:"red"}}>Wrong Age</label>}
                  <p> Name <input name="Name" onChange={this.handleChange}></input> </p>
                  <p> Email <input name="Email" onChange={this.handleChange}></input> </p>
                  {this.state.EmailOk ? null : <div><label style={{color:"red"}}>Wrong Email</label><br/></div>}
                  
                  <button onClick={this.Validation}>Submit</button>
                  <br/>
                </div>

               
            )
        }
		
        	
	
}

export default App