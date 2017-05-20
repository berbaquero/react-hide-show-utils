'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

/**
 * Descriptively hide children components, based on a breakpoint
 * Uses matchMedia
 * Client-side only
 */

var HideAt = (function(_React$Component) {
  _inherits(HideAt, _React$Component);

  function HideAt(props) {
    _classCallCheck(this, HideAt);

    var _this = _possibleConstructorReturn(
      this,
      (HideAt.__proto__ || Object.getPrototypeOf(HideAt)).call(this, props)
    );

    _this.state = {
      visible: false,
    };
    _this.mql = window.matchMedia(props.breakpoint);
    _this.mql.addListener(_this.updateVisibility.bind(_this));
    return _this;
  }

  _createClass(HideAt, [
    {
      key: 'updateVisibility',
      value: function updateVisibility() {
        var shouldHide = this.mql.matches;
        this.setState({
          visible: shouldHide,
        });
      },

      // Check visibility before mounting (ergo `render()`-ing)
      // so it does not render `children` if the breakpoint is already active
    },
    {
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.updateVisibility();
      },
    },
    {
      key: 'render',
      value: function render() {
        return this.state.visible ? this.props.children : null;
      },
    },
  ]);

  return HideAt;
})(_react2.default.Component);

HideAt.propTypes = {
  breakpoint: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.element.isRequired,
};

exports.default = HideAt;
