import React from "react";
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

class DropDownList extends React.Component{
  constructor(props){
    super(props);
    this.handleChangeBreed = this.handleChangeBreed.bind(this);

  }

  handleChangeBreed(event){
    this.props.changeActiveBreed(event.target.value)
  }

  render(){
    const list = this.props.dogFilteredList.map( (doggoBreed) => {
      const title = doggoBreed[0].toUpperCase() + doggoBreed.substring(1);
      return (
          <option value={doggoBreed}>{title}</option>
      ); 
    })
    return(
      <div>
        <select
          onChange={this.handleChangeBreed}
          id="select-option">
          {list}
        </select>
      </div>
    );
  }
}


export default DropDownList;
