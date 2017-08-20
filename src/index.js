import React from 'react';
import PropTypes from 'prop-types';

/**
 * Descriptively hide or show children components, based on a breakpoint
 * Uses matchMedia
 * Client-side only
 */

class HideShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.updateVisibility = this.updateVisibility.bind(this);
    this.mql = window.matchMedia(props.breakpoint);
    this.mql.addListener(this.updateVisibility);
  }

  updateVisibility() {
    const breakpointActive = this.mql.matches;
    if (this.props.hide) {
      this.setState({ visible: !breakpointActive });
    } else {
      this.setState({ visible: breakpointActive });
    }
  }

  // Check visibility before mounting (ergo `render()`-ing)
  // so it does not render `children` if the breakpoint is already active
  componentWillMount() {
    this.updateVisibility();
  }

  componentWillUnmount() {
    this.mql.removeListener(this.updateVisibility);
  }

  render() {
    return this.state.visible ? this.props.children : null;
  }
}

HideShow.propTypes = {
  hide: PropTypes.bool.isRequired,
};

const HideAt = ({ breakpoint, children }) => (
  <HideShow breakpoint={breakpoint} hide={true}>
    {children}
  </HideShow>
);

HideAt.propTypes = {
  breakpoint: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

const ShowAt = ({ breakpoint, children }) => (
  <HideShow breakpoint={breakpoint} hide={false}>
    {children}
  </HideShow>
);

ShowAt.propTypes = {
  breakpoint: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export { HideAt, ShowAt };
