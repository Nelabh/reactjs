import React from "react";
import PropTypes from 'prop-types';
export class Home extends React.Component{
	render(){
    let variable = "This is dynamic";
    console.log(this.props);
		return (
			<div>
				<p> New Home</p>
        <p>Name : {this.props.name}</p>
        <p>age : {this.props.age}</p>
        <p>User's Name : {this.props.user.name}</p>
        {2+3}
        {variable }
        <div>
          <ul>
            {this.props.user.hobbies.map((hobby,i)=><li key = {i}>{hobby}</li>)}
          </ul>
        </div>
        <hr/>
        {this.props.children}
			</div>
			);
	}
}
Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object,
  children: PropTypes.element.isRequired
};