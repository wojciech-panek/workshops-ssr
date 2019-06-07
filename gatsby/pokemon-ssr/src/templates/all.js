import React from "react";
import { Link } from "gatsby";
import SEO from '../components/seo';

const IndexPage = ({ pageContext: { data }}) => (
  <div style={{ textAlign: 'center' }}>
    <SEO title="Homepage - Pokemon App" />
    <h1>Catch 'Em All</h1>
    <div>
      {data.map((item) =>
        <div key={item.name}>
          <Link to={'/details/' + item.name}>{item.name}</Link>
        </div>
      )}
    </div>
  </div>
);

export default IndexPage;
