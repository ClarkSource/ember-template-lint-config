module.exports = {
  extends: 'octane',
  rules: {
    'no-curly-component-invocation': {
      allow: require('../known-helpers')
    },
    'simple-unless': {
      whitelist: [],
      maxHelpers: 1
    }
  }
};
