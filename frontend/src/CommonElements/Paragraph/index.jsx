import React, { Fragment } from 'react'

const Paragraph = ({children,...props}) => {
  return (
    <Fragment>
    <div {...props} >{children}</div>
    </Fragment>
  )
}

export default Paragraph
