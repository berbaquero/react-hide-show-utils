import React from 'react';
import PropTypes from 'prop-types';

/**
 * Descriptively hide children components, based on a breakpoint
 * Uses matchMedia
 * Client-side only
 */

class HideAt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.mql = window.matchMedia(props.breakpoint);
    this.mql.addListener(this.updateVisibility.bind(this));
  }

  updateVisibility() {
    const shouldHide = this.mql.matches;
    this.setState({
      visible: shouldHide,
    });
  }

  // Check visibility before mounting (ergo `render()`-ing)
  // so it does not render `children` if the breakpoint is already active
  componentWillMount() {
    this.updateVisibility();
  }

  render() {
    return this.state.visible ? this.props.children : null;
  }
}

HideAt.propTypes = {
  breakpoint: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default HideAt;
