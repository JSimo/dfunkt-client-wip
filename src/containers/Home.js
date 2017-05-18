import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchMandatesIfNeeded } from '../actions';
import { connect } from 'react-redux'
import MandateTable from '../components/MandateTable';

import './home.css';
import skold from '../../public/skold.png';

class Home extends Component {
  static propTypes = {
    mandates: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchMandatesIfNeeded())
  }

  render() {
    const { mandates, isFetching, lastUpdated } = this.props
    //const isEmpty = mandates.length === 0
    return (
      <div className="home">
        <div className="home-header">
          <h2>Welcome to dfunkt</h2>
        </div>
        <p className="home-intro">
          TODO: system description system description system description
        </p>
        <img className="spin-logo" alt="loading" src={skold}/>
        <h2> last fetched: {lastUpdated} </h2>
        <h2> isfetching: {isFetching ? "yes" : "no"} </h2>
        <MandateTable mandates={mandates} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { mandateList } = state;
  const {
    isFetching,
    lastUpdated,
    items: mandates
  } = mandateList || {
    isFetching: true,
    items: []
  }

  return {
    mandates,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(Home)
