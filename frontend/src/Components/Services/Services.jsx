import React, { Fragment } from "react";
import {Breadcrumb} from '../../CommonElements/AbstractElements'
import Service from "./Service";
export default function Services() {
  
  return (
    <Fragment>
    <Breadcrumb title={'Services'} />
    <Service />
    </Fragment>
  );
}
