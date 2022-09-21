import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import Header from '../../components/Header'

class Home extends PureComponent {
    constructor(props) {
      super(props);
    }
  
    render() {  
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