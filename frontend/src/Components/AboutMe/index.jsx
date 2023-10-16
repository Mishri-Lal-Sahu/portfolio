import React, { Fragment } from 'react'
import {Breadcrumb} from '../../CommonElements/AbstractElements'
import About from '../About'

const AboutMe = () => {
  return (
    <Fragment >
      <Breadcrumb title={'About Me'} />
      <About />
    </Fragment>
  )
}

export default AboutMe
