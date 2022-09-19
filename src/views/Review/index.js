import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import ReactStarsRating from 'react-awesome-stars-rating';

import Header from '../../components/Header'

class Review extends PureComponent {
    constructor(props) {
      super(props);
  
      this.state = {
        value: 0,
        isEdit: true,
      };
  
      this.onChange = this.onChange.bind(this);
    }
  
    onChange(value) {
      this.setState({
        value,
        isEdit: false,
        selectedValue: value,
      });
    }
  
    render() {
      const { isEdit, value, selectedValue } = this.state;
  
      return (
        <>
        <Header />
        <section>
          <ReactStarsRating
            onChange={this.onChange}
            isEdit={isEdit}
            value={value}
            selectedValue={selectedValue}
          />
  
          <div>Selected value: {selectedValue}</div>
        </section>
        </>
      );
    }
  }
  
  export default Review;