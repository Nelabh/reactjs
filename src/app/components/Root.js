import React from "react";
import {Header2} from './Header2';
export class Root extends React.Component{
	render(){
		return (
        <div>
          Root
        </div>
			);
	}
}

// <div className = "container">
//         <div className = "row">
//           <div className = "col-xs-10 col-xs-offset-1">
//             <Header2/>
//           </div>
//         </div>
//         <hr/>
//         <div className = "row">
//           <div className = "col-xs-10 col-xs-offset-1">
//               {this.props.children}
//           </div>
//         </div>
//       </div>