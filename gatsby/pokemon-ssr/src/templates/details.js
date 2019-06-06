import React from "react";
import { Link } from "gatsby";
import { Helmet } from 'react-helmet';

const DetailsPage = ({ pageContext: { name } }) => (
  <div>
    <Helmet title={`${name} - Pokemon App`} />
    <Link to="/">BACK</Link>
    <p>Details page for {name}</p>
  </div>
);

export default DetailsPage;
