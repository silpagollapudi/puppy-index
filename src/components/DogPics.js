import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Gallery from "react-photo-gallery";

class DogPics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("active dog breed", this.props.activeDogBreed);
    const { activeDogBreed, imgURL } = this.props;
    let dogPics = <div> Loading...</div>

    if (imgURL[activeDogBreed]) {
      dogPics = imgURL[activeDogBreed].map( (pic) => {
        const key = pic.split('/');
        console.log("height", pic.height)
        return {
            src: pic,
            width: 1,
            height: 1,
          }
      })
    } else { 
        return null 
    };

    return (
      <div style={{width: '80%', margin: 'auto'}}>
        <Gallery photos={dogPics}/>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    dogs: state.breeds.dogList,
    activeDogBreed: state.breeds.activeDogBreed,
    imgURL: state.pics.imgURL
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeActiveBreed: (breed) => {
       dispatch(actions.changeActiveBreed(breed))
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DogPics);
