import React from 'react';

export default class Layout extends React.Component {
   render() {
      return (
         <div class="container">
            <div class="row">
               <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                  {this.props.children}
               </div>
            </div>
         </div>
      );
   }
}