import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';
import DisplayFilter from './DisplayFilter';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import DropDownList from './DropDown.js';

class DogList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dogFilteredList, activeDogBreed } = this.props;

    let dogList = <div> Loading...</div>

    if (!dogList) {
      return null 

    }
    if (dogFilteredList) {
      dogList = <div>  <DropDownList dogFilteredList={dogFilteredList} changeActiveBreed = {this.props.changeActiveBreed}/> </div>
    } else { 
        return (
          dogList = <div> Found nothing. Please try again. </div>
        )
        
    };

    return (
      <div>
      <h1> DOGS </h1>
       <DisplayFilter filterList={this.props.filterList} />
      {dogList}
      </div>
    );
  }
};

DogList.PropTypes = {
  data: PropTypes.object,
  performSampleAction: PropTypes.func,
}

function mapStateToProps(state) {
  return {
    dogList: state.breeds.dogList,
    dogFilteredList: state.breeds.filteredList,
    activeDogBreed: state.breeds.activeDogBreed
  };
}

function mapDispatchToProps(dispatch) {
  return {
    filterList: () => {
      dispatch(actions.filterList(document.getElementById('search_txt').value));
    },
    
    changeActiveBreed: (breed) => {
       dispatch(actions.changeActiveBreed(breed))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DogList);
