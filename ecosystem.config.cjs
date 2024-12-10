module.exports = {
  apps: [
    {
      name: 'Fitvibes Gym',
      script: 'npm run start',
      watch: false,
      max_memory_restart: '1000M',
      exec_mode: 'cluster',
      instances: 1,
      cron_restart: '59 23 * * *',
      env: {
        NODE_ENV: 'production' // development or production
      }
    }
  ]

}

module.exports = {
  async rewrites() {
    return [
      {
        source: '/reservar/:id',
        destination: 'http://localhost:8000/reservar/:id',
      },
    ];
  },
};
