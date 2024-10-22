// vite.config.js
import { defineConfig } from 'vite';
import configs from './config.json';

const hostname = window && window.location && window.location.hostname;
let environment = 'local';
if (hostname === 'realhome.com') {
    environment = 'cloud';
}
const conf = {
    'realhome': configs[environment].realhome,
    'environment': environment
};

export default defineConfig({
  server: {
    host: conf.realhome,
    // other server options if needed
  },
  // other configurations as required
});
