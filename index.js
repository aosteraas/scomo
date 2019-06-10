"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Scomo;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = {
  position: 'fixed',
  right: 0,
  bottom: -110
};

var getStyle = function getStyle(that) {
  var bottom = that ? 0 : -110;
  return _objectSpread({}, style, {
    bottom: bottom
  });
};

var talkStyle = {
  position: 'relative',
  padding: '1.6rem',
  background: '#404040',
  color: '#f9f9f9',
  borderRadius: '0.5575rem'
};

var getTalkStyle = function getTalkStyle(that) {
  var display = that ? 'block' : 'none';
  return _objectSpread({}, talkStyle, {
    display: display
  });
};

var closeStyle = {
  position: "absolute",
  right: "0.6rem",
  top: "50%",
  transform: "translateY(-50%)",
  fontWeight: "bolder",
  cursor: "pointer"
};

function Scomo(props) {
  var imgsrc = props.imgsrc,
      imgwidth = props.imgwidth,
      imgalt = props.imgalt;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      that = _useState2[0],
      setThat = _useState2[1];

  (0, _react.useEffect)(function () {
    document.addEventListener('mouseup', handleThat);
    return function () {
      return document.removeEventListener('mouseup', handleThat);
    };
  });

  function handleThat() {
    var selection = document.getSelection ? document.getSelection().toString() : document.selection.createRange().toString();
    setThat(selection);
  }

  return _react["default"].createElement("div", {
    style: getStyle(that)
  }, _react["default"].createElement("div", {
    style: getTalkStyle(that)
  }, "How good's ", that, "?", ' ', _react["default"].createElement("div", {
    style: closeStyle,
    onClick: function onClick() {
      return setThat('');
    }
  }, "X"), ' '), _react["default"].createElement("img", {
    src: imgsrc,
    width: imgwidth || 320,
    alt: imgalt
  }));
}
