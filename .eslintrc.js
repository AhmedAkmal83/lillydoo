module.exports = {
    root: true,
    env: {
        node: true,
        es6: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        'indent': ['error', 4]
    },
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 6
    },
    "globals": {
        "Vue": 'readonly',
        "Vuex": 'readonly',
        "$": 'readonly',
        "jQuery": 'readonly',
        "whatInput": 'readonly',
        "Foundation": 'readonly'
    }
}
