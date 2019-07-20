import React, {Component} from 'react';
import './search-user-panel.scss';

class SearchUserPanel extends Component {

   // changeInputDataHandler = (event) => {
   //    this.props.setSearchString(event.target.value);
   // };
   //
   // handleFilterButtonClick = () => {
   //    this.props.filterMediaData();
   // };

   render() {
      return (
         <div className="search-panel-wrapper">
            <input type="text"
                   className="search-input"
                   placeholder="search user name"
                   // value={searchString}
                   // onChange={(event) => {
                   //    this.changeInputDataHandler(event);
                   // }}
            />
            <button >Filter</button>
         </div>
      );
   }
}

export default SearchUserPanel;
