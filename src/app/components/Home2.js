import React from "react";
import PropTypes from 'prop-types';
export class Home2 extends React.Component{
  constructor(props){
    super();
    this.age = props.age;
    this.state = {
      age: this.age,
      status:0
    };
    setTimeout(()=>this.setState({status:1}),5000);
  }
  onMakeOlder(){
    this.age += 3; 
    console.log(this.age);
  }
    onMakeYounger(){
    this.age -= 3; 
    console.log(this.age);
  }
  onMakeOlderState(){
    this.setState({
      age:this.state.age + 3
    });
  }
    onMakeYoungerState(){
    this.setState({
      age:this.state.age - 3
    });
  }
	render(){
    let variable = "This is dynamic";
    console.log(this.props);
		return (
			<div>
				<p> New Home2</p>
        <p>Name : {this.props.name}</p>
        <p>age : {this.age}</p>
        <p>State's age : {this.state.age}</p>
        <p>State's status : {this.state.status}</p>
        <button onClick = {this.onMakeOlder.bind(this)} className = "btn btn-primary"> Make Me Older</button>
        <br/>
        <br/>
        <button onClick = {()=>this.onMakeYounger()} className = "btn btn-primary"> Make Me Younger</button>
        <br/>
        <br/>
        <button onClick = {this.onMakeOlderState.bind(this)} className = "btn btn-primary"> Make Me Older using state</button>
        <br/>
        <br/>
        <button onClick = {()=>this.onMakeYoungerState()} className = "btn btn-primary"> Make Me Younger using state</button>
			</div>
			);
	}
}
Home2.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};