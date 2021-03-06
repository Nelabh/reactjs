import React from "react";
import PropTypes from 'prop-types';
export class Home2 extends React.Component{
  constructor(props){
    super();
    this.age = props.age;
    this.state = {
      age: this.age,
      status:0,
      homeLink: props.initialLink
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
  onChangeLink(){
    console.log('link changing');
    console.log(this.state.homeLink);
    this.props.changeLink(this.state.homeLink);
  }
  onHandleChange(event){
    this.setState({
      homeLink:event.target.value
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
        <hr/>
        <button onClick = {this.props.greet} className = "btn btn-primary">Greet</button>
        <hr/>
        <input type="text" value = {this.state.homeLink} onChange = {(event)=>this.onHandleChange(event)}/>
        <hr/>

        <button onClick = {()=>this.onChangeLink()} className = "btn btn-primary">Change Header</button>

			</div>
			);
	}
}
Home2.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  greet:PropTypes.func,
  initialLink: PropTypes.string
};