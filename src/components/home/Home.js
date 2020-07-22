import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../../redux/actions';
import {
  Link
} from "react-router-dom";
class Home extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  componentDidMount(){
    this.props.getCategories();
  }

  render() {
    const { results } = this.props.categories;
    return (
      <div>
        <h1></h1>Home
        <ul>
          { results.map((category, index) => (
            <li key={index}>
              <Link to={`/category/${category.id}`}>{category.name}</Link>
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return state
};

export default connect(mapStateToProps, { getCategories })(Home);
