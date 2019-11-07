module.exports = {
  extends: 'octane',
  rules: {
    /**
     * @see https://github.com/ember-template-lint/ember-template-lint/blob/master/docs/rule/no-curly-component-invocation.md
     */
    'no-curly-component-invocation': {
      allow: require('../known-helpers')
    },

    /**
     * @see https://github.com/ember-template-lint/ember-template-lint/blob/master/docs/rule/simple-unless.md
     */
    'simple-unless': {
      whitelist: [],
      maxHelpers: 1
    }
  }
};
