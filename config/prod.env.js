'use strict'
module.exports = {
  NODE_ENV: '"production"',
  chainWebpack:config=>{
    config.plugins.delete("prefetch")
  }
}
