// import the React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'

import Menu from './components/Menu'
import data from './data/recipes.json'

import './index.css'

ReactDOM.render(<Menu recipes={data} />, document.getElementById('root'))
