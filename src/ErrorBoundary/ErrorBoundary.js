import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends Component {

  state = {
    hasError: false,
    errorMessage: ''
  }

  //method wich receive error and info
  componentDidCatch = (error, info) =>  {
    this.setState({hasError: true, errorMessage: error});
  }

  reder() {
    if(this.state.hasError){
      return <h1>Something Went Wrong</h1>
    }
    else {
      return this.props.children;
    }
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node
}

export default ErrorBoundary;