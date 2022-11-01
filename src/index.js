import React from 'react'
import ReactDOM from 'react-dom'
import Heading from './Heading'
import CardsList from './CardsList'
import Note from './Note'
import './index.css'


ReactDOM.render(
  <>
    <Heading />
    <CardsList/>
    <Note />
  </>,document.getElementById("root")
)