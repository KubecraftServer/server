const { join } = require("path")

module.exports = {
  apps: [{
    name: 'Minecraft Server',
    script: 'server.jar',
    interpreter: '/usr/bin/env',
    interpreter_args: 'java -jar',
    cwd: join(__dirname, '.'),
    autorestart: true,
    watch: false,
    max_memory_restart: '8G'
  }],

  deploy: {
    production: {
      ref: 'origin/master',
      repo: 'git@github.com:kubeserver/server.git',
      path: './'
    }
  }
};
