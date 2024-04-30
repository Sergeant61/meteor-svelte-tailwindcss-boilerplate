module.exports = {
  servers: {
    one: {
      host: "75.119.128.166",
      username: "root",
      pem: "~/.ssh/id_rsa",
    },
  },

  app: {
    name: "prayer-time",
    path: "../../",

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
      server: "https://prayertime.recepozen.com/",
      buildLocation: "../build/prayer-time/prod",
    },

    env: {
      NODE_OPTIONS: "--max-old-space-size=8192",
      ROOT_URL: "https://prayertime.recepozen.com/",
      HTTP_FORWARDED_COUNT: 2
    },

    docker: {
      image: "zodern/meteor:root",
      stopAppDuringPrepareBundle: false,
    },

    enableUploadProgressBar: true,
    deployCheckWaitTime: 7200,
  },

  proxy: {
    domains: "prayertime.recepozen.com",
    nginxServerConfig: './nginx-server-config',
    ssl: {
      letsEncryptEmail: 'rec1856rec@gmail.com'
    }
  },

  mongo: {
    version: "5.0.8",
    servers: {
      one: {},
    },
  },
};
