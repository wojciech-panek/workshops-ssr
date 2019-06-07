import { Component } from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-fetch';
import { Link } from '../routes';


class Home extends Component {
  static async getInitialProps({ query }) {
    const rawData = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.name}`);
	const data = await rawData.json();
    return { data };
  }

  render() {
    return (
		<div>
            <Head>
                <title>{this.props.data.name} - Pokemon App</title>
            </Head>
			<Link route="index"><a>Back</a></Link>
			<pre>
				{JSON.stringify(this.props.data, undefined, 2)}
			</pre>
		</div>
	);
  }
}

export default Home;
