import React, { Fragment } from 'react'
import { Project } from '../Swiper/Project'
import { Breadcrumb } from '../../CommonElements/Breadcrumb'

const Projects = () => {
  return (
    <Fragment>
    <Breadcrumb title={'Projects'} />
      <Project />
    </Fragment>
  )
}

export default Projects
