import React from "react";
import {render} from "react-dom";
import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {Home2} from "./components/Home2";
import {Stateless} from "./components/Stateless";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      homeLink: "Home"
    }
  }
  onChangeLink(name){
    console.log('app homelink');
    console.log(name);
    this.setState({
      homeLink:name
    });
  }
  onGreet(){
    alert("Hello!");
  }
	render(){
    var name = "Nelabh",age =23, user = {name:"nel",hobbies:["singing","dancing"]};

		return(
			<div className = "container">
				<div className = "row">
					<div className = "col-xs-10 col-xs-offset-1">
						<Header homeLink = {this.state.homeLink}/>
					</div>
				</div>
				<div className = "row">
          <div className = "col-xs-10 col-xs-offset-1">
              <Stateless homeLink = "Stateless Home"/>
          </div>
        </div>
      
        <div className = "row">
					<div className = "col-xs-10 col-xs-offset-1">
            <Home name = {name} age = {age} user = {user}>
              <p>Children Text</p>
            </Home>
            <Home2 
              changeLink = {this.onChangeLink.bind(this)} 
              name = {"name"} 
              age = {23} greet={this.onGreet}
              initialLink = {this.state.homeLink}
            />
					</div>
				</div>
			</div>
			);
	}
}  

render(<App/>,window.document.getElementById("app"));