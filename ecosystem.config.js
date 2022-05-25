const env = require('dotenv')
env.config()
const currentEnv = process.env
module.exports = {
  apps : [{
  name: currentEnv.SHORT_NAME.replace(' ', '_'),
    script: './.output/server/index.mjs', // default nuxt3 build folder
    watch: './.output', // enable watch mode.
    exec_mode: 'cluster',
    instances: '2', // possible values are : all or number of instances in this case we want to spin 2 instances.
    env: {
    PORT: currentEnv.PORT
    }
  }],

  deploy : {
    production : {
      user : currentEnv.REMOTE_SERVER_USER,
      host : currentEnv.REMOTE_HOST,
      ref  : currentEnv.GIT_BRANCH,
      repo : currentEnv.GIT_REPOSITORY,
      path : currentEnv.REMOTE_PARTH,
      'pre-deploy-local': '',
      'post-deploy' : 'yarn && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
