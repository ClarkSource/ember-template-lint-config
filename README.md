<p align="center">
  <a href="https://www.clark.de/de/jobs">
    <br><br><br><br><br>
    <img alt="CLARK" src="./docs/assets/clark.svg" height="40">
    <br><br><br><br><br>
  </a>
</p>

# @clark/ember-template-lint-config

![Node.js CI](https://github.com/ClarkSource/ember-template-lint-config/workflows/Node.js%20CI/badge.svg)
[![npm version](https://badge.fury.io/js/@clark%2Fember-template-lint-config.svg)](http://badge.fury.io/js/@clark%2Fember-template-lint-config)
[![Download Total](https://img.shields.io/npm/dt/@clark%2Fember-template-lint-config.svg)](http://badge.fury.io/js/@clark%2Fember-template-lint-config)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![CLARK Open Source](https://img.shields.io/badge/CLARK-Open%20Source-%232B6CDE.svg)](https://www.clark.de/de/jobs)\
[![Dependabot enabled](https://img.shields.io/badge/dependabot-enabled-blue.svg?logo=dependabot)](https://dependabot.com/)
[![dependencies Status](https://david-dm.org/ClarkSource/ember-template-lint-config/status.svg)](https://david-dm.org/ClarkSource/ember-template-lint-config)
[![devDependencies Status](https://david-dm.org/ClarkSource/ember-template-lint-config/dev-status.svg)](https://david-dm.org/ClarkSource/ember-template-lint-config?type=dev)

The configuration for [`ember-template-lint`][ember-template-lint] we use across
all of our [Ember.js][ember] projects.

[ember-template-lint]: https://github.com/ember-template-lint/ember-template-lint
[ember]: https://github.com/emberjs/ember.js

## Installation

Install the dependencies:

```bash
# Install `ember-template-lint` itself and our config
yarn add -D ember-template-lint @clark/ember-template-lint-config

# Remove the linting integration into ember-cli
yarn remove ember-cli-template-lint
```

Update or create the `.template-lintrc.js`:

```js
'use strict';

module.exports = {
  plugins: ['@clark/ember-template-lint-config'],
  extends: 'clark:octane'
};
```

Add the `lint:hbs` script to the `package.json`, in case it does not exist yet:

```json
{
  "name": "my-awesome-app",
  "scripts": {
    "lint:hbs": "ember-template-lint ."
  },
  "devDependencies": {
    "@clark/ember-template-lint-config": "^0.1.0",
    "ember-template-lint:" "^1.8.1"
  }
}
```

Don't forget to run `yarn lint:hbs` in CI!

## Usage

This package exports two configurations you can extend from.

### `clark:octane`

This is the recommended default configuration to use. It extends the official
[`octane` config][config-octane] and makes the following changes to it:

[config-octane]: https://github.com/ember-template-lint/ember-template-lint/blob/master/lib/config/octane.js

- [`no-curly-component-invocation`][no-curly-component-invocation]: whitelist
  all [known helpers][known-helpers]
- [`simple-unless`][simple-unless]: allow to use a single, simple helper in
  `{{unless}}`

[no-curly-component-invocation]: https://github.com/ember-template-lint/ember-template-lint/blob/master/docs/rule/no-curly-component-invocation.md
[simple-unless]: https://github.com/ember-template-lint/ember-template-lint/blob/master/docs/rule/simple-unless.md
[known-helpers]: /known-helpers.js

### `clark:legacy`

This config extends [`clark:octane`](#clark:octane) and disables a few rules, so
that the linter does not go crazy on code that was written pre-Octane. Use this
config for legacy packages, when `clark:octane` throws too many, not easily
fixable errors. Ideally though, migrate your code.

The following rules are disabled:

- [`no-implicit-this`][no-implicit-this]: prefix context access with `this.` and
  component arguments with `@`
- [`no-curly-component-invocation`][no-curly-component-invocation]: migrate
  curly component invocation to angle bracket invocations
- [`no-action`][no-action]: use the `{{on}}` modifier and `(fn)` helper over
  `{{action}}`

[no-implicit-this]: https://github.com/ember-template-lint/ember-template-lint/blob/master/docs/rule/no-implicit-this.md
[no-action]: https://github.com/ember-template-lint/ember-template-lint/blob/master/docs/rule/no-action.md

## Q & A

### Why remove `ember-cli-template-lint`?

`ember-cli-template-lint` is a wrapper around the actual `ember-template-lint`,
that integrates it into the linting pipeline of `ember-cli`. We strongly agree
with [RFC #121 "Remove `ember-cli-eslint`"][rfc-121] and believe that the
linting pipeline, as it is implemented in `ember-cli`, is hacky and should not
run alongside the browser tests.

Instead we run all our lint jobs as extra steps in CI.

[rfc-121]: https://github.com/emberjs/rfcs/blob/master/text/0121-remove-ember-cli-eslint.md
