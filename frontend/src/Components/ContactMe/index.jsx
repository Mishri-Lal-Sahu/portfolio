import React, { Fragment } from "react";
import {Breadcrumb} from '../../CommonElements/AbstractElements'
import { ContactUs } from "../ContactUs";

export const ContactMe = () => {
 
  return (
    <Fragment>
    <Breadcrumb title={'Contact Me'} />
    <ContactUs />
    </Fragment>
  );
};
