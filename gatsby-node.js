/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// Promise API
const path = require(`path`)
exports.createPages = ({ graphql, actions }) => {
  // const { createPage } = actions
  // // Only update the `/app` page.
  // for (let i = 1; i < 20; i += 1) {
  //   createPage({
  //     path: `/pdp/${i}`,
  //     component: path.resolve("./src/templates/pdp.tsx"),
  //     context: {
  //       currentPage: i
  //     }
  //   })
  // }
}

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}


exports.onCreateWebpackConfig = ({
                                   stage,
                                   rules,
                                   loaders,
                                   plugins,
                                   actions
                                 }) => {

  actions.setWebpackConfig({
    resolve: {
      alias: {
        'plans': path.resolve(__dirname, './src'),
        '@@': path.resolve(__dirname)
      },
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    }
  })
}
