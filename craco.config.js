const CracoLessPlugin = require('craco-less');

const port = process.env.BLOCKLET_PORT || process.env.PORT || 3000;

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#ea973d' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  devServer: {
    port,
    client: {
      // If you want to development this blocklet without blocklet-server, you can delete next line, otherwise the hot reload will be failed.
      webSocketURL: 'wss://0.0.0.0/ws',
    },
  },
};
