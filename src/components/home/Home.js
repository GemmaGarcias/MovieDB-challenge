import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../../redux/actions'
class Home extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  componentDidMount(){
    this.props.getCategories('text');
  }

  render() {
    return (
      <div>Home</div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
	return state
};

export default connect(mapStateToProps, { getCategories })(Home);
