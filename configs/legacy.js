module.exports = {
  extends: 'clark:octane',
  rules: {
    /**
     * @see https://github.com/ember-template-lint/ember-template-lint/blob/master/docs/rule/no-implicit-this.md
     */
    'no-implicit-this': false,

    /**
     * @see https://github.com/ember-template-lint/ember-template-lint/blob/master/docs/rule/no-curly-component-invocation.md
     */
    'no-curly-component-invocation': false,

    /**
     * @see https://github.com/ember-template-lint/ember-template-lint/blob/master/docs/rule/no-action.md
     */
    'no-action': false
  }
};
