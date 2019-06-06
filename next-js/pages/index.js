import { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Head from 'next/head'
import { Link } from '../routes';

class Home extends Component {
  static async getInitialProps({ req }) {
    const rawData = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
	const { results } = await rawData.json();
    return { data: results };
  }

  render() {
    return (
		<div style={{ textAlign: 'center' }}>
            <Head>
                <title>Homepage - Pokemon App</title>
            </Head>
			<h1>Catch 'Em All</h1>
			<div>
				{this.props.data.map((item) =>
					<div key={item.name}><Link route="details" params={{ name: item.name }}><a>{item.name}</a></Link></div>
				)}
			</div>
		</div>
	);
  }
}

export default Home;
