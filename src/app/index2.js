import React from "react";
import {render} from "react-dom";
import {BrowserRouter as Router, Route,Link} from "react-router-dom";
import {Root} from "./components/Root";
import {Home3} from "./components/Home3";
import {User} from "./components/User";
class App extends React.Component{
  
	render(){
	   console.log('Loading');
  	return(
      <Router >
      <div className = "container">
        <div className = "row">
          <div className = "col-xs-10 col-xs-offset-1">
            
            <nav className = "navbar navbar-default">
              <div className = "container">
                <div className = "navbar-header">
                  <ul className = "nav navbar-nav">
                    <li><Link to ="/home" >Home</Link></li>
                    <li><Link to ="/user" >User</Link></li>
                    <li><Link to ="/" >Root</Link></li>
                    
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <hr/>
        <div className = "row">
          <div className = "col-xs-10 col-xs-offset-1">
              
        <div>
          <Route exact path = "/" component = {Root}/>
        
            <Route path = "/home" component = {Home3}/>
            <Route path = "/user" component = {User}/>
        </div>
          </div>
        </div>
      </div>
      </Router>
      );
	}
}  

render(<App/>,window.document.getElementById("app"));