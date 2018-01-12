import React from 'react';
import {BrowserRouter as Router,Link} from "react-router-dom";

export const Header2 = (props)=>{
	
	return( 
<Router>
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
</Router>

		);
}