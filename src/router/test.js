/* import Vue from 'vue'
import VueRouter from 'vue-router'
import _ from 'underscore'

import routes from './routes'

Vue.use(VueRouter)
 */
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

/* export default function() {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  // Add a "guard" to keep a "shadow" history stack. That
  // stack can be used to implement a bookmark funcionality.
  var pathStack = []
  Router.beforeEach = (to, from, next) => {
    // We need to defer the execution to get the state key,
    // it's not yet there (or it can be, but it's a wrong one)
    _.defer(() => {
      var key = Router.history.state && Router.history.state.key
      if (key) {
        var index = _.findLastIndex(pathStack, pathInfo => pathInfo.key === key)

        if (index === -1) {
          // Key does not exist, add new entry.
          // As the new history item will be added, current "forward"
          // history should be disposed (from the current position
          // to the end)
          if (pathStack.currentPos >= 0) {
            pathStack = pathStack.slice(0, pathStack.currentPos + 1)
          }
          pathStack.push({
            path: to.fullPath,
            key: key
          })

          // Update position
          pathStack.currentPos = pathStack.length - 1
        } else {
          // Key exists already, we are moving in history,
          // just update the position
          pathStack.currentPos = index
        }
      }
    })
    next()
  }

  // Return a bookmark information that can be then used to
  // navigate back to that location
  Router.getBookmark = () => {
    return pathStack[pathStack.currentPos]
  }

  // Goes back/forward in history by given bookmark
  Router.gotoBookmark = bookmark => {
    if (bookmark) {
      // Try to find how many steps we need to take
      var currentKey = Router.history.state && Router.history.state.key
      var currentIndex = currentKey
        ? _.findLastIndex(pathStack, pathInfo => pathInfo.key === currentKey)
        : -1
      var targetIndex =
        currentIndex !== -1
          ? _.findLastIndex(
              pathStack,
              pathInfo => pathInfo.key === bookmark.key
            )
          : -1
      if (targetIndex !== -1) {
        var delta = targetIndex - currentIndex
        Router.history.go(delta)
      }
    }
  }

  return Router
}



VS



export default function() {
  var pathStack = []
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    pathStack: pathStack,
    routes,
    // Add a "guard" to keep a "shadow" history stack. That
    // stack can be used to implement a bookmark funcionality.
    beforeEach: (pathStack, history) => (to, from, next) => {
      // We need to defer the execution to get the state key,
      // it's not yet there (or it can be, but it's a wrong one)
      console.log('beforeEach:', pathStack, history)
      _.defer(() => {
        var key = history.state && history.state.key
        if (key) {
          var index = _.findLastIndex(
            pathStack,
            pathInfo => pathInfo.key === key
          )

          if (index === -1) {
            // Key does not exist, add new entry.
            // As the new history item will be added, current "forward"
            // history should be disposed (from the current position
            // to the end)
            if (pathStack.currentPos >= 0) {
              pathStack = pathStack.slice(0, pathStack.currentPos + 1)
            }
            pathStack.push({
              path: to.fullPath,
              key: key
            })

            // Update position
            pathStack.currentPos = pathStack.length - 1
          } else {
            // Key exists already, we are moving in history,
            // just update the position
            pathStack.currentPos = index
          }
        }
      })
      next()
    },
    // Return a bookmark information that can be then used to
    // navigate back to that location
    getBookmark: pathStack => () => {
      console.log('getBookmark:', pathStack)
      return pathStack[pathStack.currentPos]
    },
    // Goes back/forward in history by given bookmark
    gotoBookmark: (pathStack, history) => bookmark => {
      console.log('gotoBookmark:', pathStack, history)
      if (bookmark) {
        // Try to find how many steps we need to take
        var currentKey = history.state && history.state.key
        var currentIndex = currentKey
          ? _.findLastIndex(pathStack, pathInfo => pathInfo.key === currentKey)
          : -1
        var targetIndex =
          currentIndex !== -1
            ? _.findLastIndex(
                pathStack,
                pathInfo => pathInfo.key === bookmark.key
              )
            : -1
        if (targetIndex !== -1) {
          var delta = targetIndex - currentIndex
          history.go(delta)
        }
      }
    },

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  return Router
}
*/
