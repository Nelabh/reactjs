import React from "react";
import PropTypes from 'prop-types';
export class Home2 extends React.Component{
  constructor(props){
    super();
    this.age = props.age;
  }
  onMakeOlder(){
    this.age += 3; 
    console.log(this.age);
  }
    onMakeYounger(){
    this.age -= 3; 
    console.log(this.age);
  }
	render(){
    let variable = "This is dynamic";
    console.log(this.props);
		return (
			<div>
				<p> New Home2</p>
        <p>Name : {this.props.name}</p>
        <p>age : {this.age}</p>
        <button onClick = {this.onMakeOlder.bind(this)} className = "btn btn-primary"> Make Me Older</button>
        <button onClick = {()=>this.onMakeYounger()} className = "btn btn-primary"> Make Me Younger</button>
			</div>
			);
	}
}
Home2.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};