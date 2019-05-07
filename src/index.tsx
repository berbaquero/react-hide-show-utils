import * as React from 'react';

interface HideShowProps {
  breakpoint: string;
  hide: boolean;
}

interface HideShowState {
  visible: boolean;
}

/**
 * Descriptively hide or show children components, based on a breakpoint
 * Uses matchMedia
 */
class HideShow extends React.Component<HideShowProps, HideShowState> {
  private mql?: MediaQueryList;
  constructor(props: HideShowProps) {
    super(props);
    this.state = {
      visible: false,
    };
    this.updateVisibility = this.updateVisibility.bind(this);
    // Only initialize matchMedia on the client
    if (typeof window !== 'undefined') {
      this.mql = window.matchMedia(props.breakpoint);
      this.mql.addListener(this.updateVisibility);
    }
  }

  updateVisibility() {
    if (typeof window === 'undefined') return; // Only on the client
    const breakpointActive = this.mql ? this.mql.matches : false;
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
    if (this.mql) {
      this.mql.removeListener(this.updateVisibility);
    }
  }

  render() {
    return this.state.visible ? this.props.children : null;
  }
}

export interface HideShowAtProps {
  breakpoint: HideShowProps['breakpoint'];
}

const HideAt: React.FC<HideShowAtProps> = function({ breakpoint, children }) {
  return (
    <HideShow breakpoint={breakpoint} hide={true}>
      {children}
    </HideShow>
  );
};

const ShowAt: React.FC<HideShowAtProps> = function({ breakpoint, children }) {
  return (
    <HideShow breakpoint={breakpoint} hide={false}>
      {children}
    </HideShow>
  );
};

export { HideAt, ShowAt };
