/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const fetch = require('isomorphic-fetch');

const getAllPokemon = async () => {
  const rawData = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
  const { results } = await rawData.json();
  return results;
};


exports.createPages = async ({ actions: { createPage } }) => {
  const allPokemon = await getAllPokemon();

  createPage({
    path: `/`,
    component: require.resolve("./src/templates/all.js"),
    context: { data: allPokemon },
  });

  allPokemon.forEach(async ({ name }) => {
    createPage({
      path: `/details/${name}/`,
      component: require.resolve("./src/templates/details.js"),
      context: { name },
    });
  });
};
