"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./dropdown.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * 
 * @param {String} label - a lowercase string that describe the purpose of the dropdown menu
 * @param {Array} options - array of options to populate the dropdown menu. It can be bidimentional 
 * @param {Function} handler - a function to manipulate the data send by the component
 * @returns {React component} - A dropdown menu base on native HTML select and options. 
 * If you want your options to have values in your forms, please be sure to give a bimentional
 * array as the options prop with the model 
 *  {
        "name": "visible text in my menu",
        "abbreviation": "value of the option in the HTML"
    }
 *  Otherwise the options won't be populate with the value attribute and only the visible text will be send through your form.
 */
const Dropdown = _ref => {
  let {
    label,
    options,
    handler
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("label", {
    className: "dropdown-label"
  }, label, /*#__PURE__*/_react.default.createElement("select", {
    name: label,
    className: "dropdown",
    onChange: handler
  }, options.map(option => option.abbreviation && option.name ? /*#__PURE__*/_react.default.createElement("option", {
    key: option.abbreviation,
    value: option.abbreviation
  }, option.name) : /*#__PURE__*/_react.default.createElement("option", {
    key: option
  }, option))));
};
var _default = Dropdown;
exports.default = _default;