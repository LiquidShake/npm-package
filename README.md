# p14-npm-select-component

A simple select options component to use in all your forms

# Instalation

Simply install the component with : <code>npm i cg-p14-npm-select-component</code>

# Usage

Once installed, import the component in your project by doing <code>import { Dropdown } from "cg-p14-npm-select-component";</code><br>
and then call it with <code><Dropdown /></code>

# Props

There are a few props you can pass to the component to make it fit perfectly your needs :<br>
- label : the label for the dropdown
- options : your data
- handler : a function to control what is send from the component

Please make sure to open the file Dropdown.js in the dist folder of the library that you can find in your node_modules folder. It contains a complete documentation about what is intended as props.

# Customization

The component comes with a very basic style, but you can customize it easily by adding style to the <code>.dropdown-label</code> and <code>.dropdown</code> classes in your CSS or SCSS files and overwrite the default style.