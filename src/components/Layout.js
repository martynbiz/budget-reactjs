import React, { Component } from 'react';

/**
 * This is just the display for transaction table. It needs to be passed submit and change
 * handles in its props
 */
class Layout extends Component {

  render() {
   return (
     <div className="grid-container">
       <div className="grid-x">
         <div className="cell small-12">
           {this.props.children}
         </div>
       </div>
     </div>
   );
 }
}

export default Layout;
