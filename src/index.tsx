import * as React from 'react';

interface HideShowProps {
  breakpoint: string;
  hide: boolean;
}

interface HideShowState {
  visible: boolean;
}

/**
 * Descriptively hide or show children components, based on a breakpoint.
 * Uses matchMedia.
 */
class HideShow extends React.Component<HideShowProps, HideShowState> {
  private mql?: MediaQueryList;
  private isClient: boolean;
  constructor(props: HideShowProps) {
    super(props);
    this.isClient = typeof window !== 'undefined';
    this.updateVisibility = this.updateVisibility.bind(this);
    if (this.isClient) {
      // Only initialize matchMedia on the client
      this.mql = window.matchMedia(props.breakpoint);
      this.mql.addListener(this.updateVisibility);
    }
    // Set initial visibility for first render
    this.state = {
      visible: this.isClient ? isVisible(props.hide, this.mql!.matches) : false,
    };
  }

  updateVisibility() {
    if (!this.isClient) return; // Only on the client
    this.setState({ visible: isVisible(this.props.hide, this.mql!.matches) });
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
  children?: React.ReactNode;
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

function isVisible(isHide: boolean, mqIsActive: boolean): boolean {
  return isHide ? !mqIsActive : mqIsActive;
}
