import React from "react";
import { Link } from "gatsby";
import SEO from '../components/seo';

const DetailsPage = ({ pageContext: { name } }) => (
  <div>
    <SEO title={`${name} - Pokemon App`} />
    <Link to="/">BACK</Link>
    <p>Details page for {name}</p>
  </div>
);

export default DetailsPage;
