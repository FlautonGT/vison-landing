module.exports = {
    apps: [{
      name: 'landing',
      script: 'npm',
      args: 'start',
      cwd: '/home/ubuntu/landing',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G'
    }]
  }
  