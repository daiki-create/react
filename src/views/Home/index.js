import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import Header from '../../components/Header'

class Home extends PureComponent {
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
          topページです。<br></br>
          ヘッダーはmaterial-uiで作成しています。
        </section>
        </>
      );
    }
  }
  
  export default Home;