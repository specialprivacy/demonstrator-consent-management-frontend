export function initialize(app) {
  app.inject('controller', 'websockets', 'service:websockets');
}

export default {
  name: 'websockets',
  initialize
};
