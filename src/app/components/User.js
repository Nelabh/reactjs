import React from 'react';
export class User extends React.Component{
	render(){
		console.log('rendering User');
		return( 
				<div >
					<h3>The User Page</h3>
					<p>User ID:</p>
				</div>
			
			);
	}
}