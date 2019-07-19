import React, {Component} from 'react';
import Header from "../header/header";


class Wrapper extends Component {
   render() {
      return (
         <div>
           <Header/>
            {this.props.children}
         </div>
      );
   }
}

export default Wrapper;
