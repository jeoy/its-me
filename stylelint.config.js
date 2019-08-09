// stylelint 常用配置
// 配置属性说明文档地址
// https://stylelint.io/user-guide/rules/
module.exports = {
    // extends: 'stylelint-config-standard',
    rules: {
        'color-hex-case': 'lower',
        'color-named': 'always-where-possible',
        'color-no-invalid-hex': true,
        'color-hex-length': 'short',

        'font-family-name-quotes': 'always-where-recommended',
        'at-rule-name-space-after': 'always',
        'indentation': 4,
        'max-nesting-depth': [15, {
            'severity': 'warning'
        }],
        // 'no-browser-hacks': true,
        // 'plugin/no-browser-hacks': [true, {
        //     browsers: [
        //         'last 2 versions',
        //         'ie >=7'
        //     ]
        // }],
        'no-descending-specificity': [null, {
            'severity': 'warning'
        }],
        'no-duplicate-selectors': true,
        'no-extra-semicolons': true,
        'no-eol-whitespace': true,

        'font-family-no-duplicate-names': true,
        'font-weight-notation': 'numeric',
        // 'no-unknown-animations': true,

        'at-rule-empty-line-before': null,
        'block-no-empty': null,
        'comment-empty-line-before': ['always', {
            'ignore': ['stylelint-commands', 'after-comment']
        }],
        'declaration-colon-space-after': 'always',
        'max-empty-lines': 2,
        'rule-empty-line-before': ['always', {
            'except': ['first-nested'],
            'ignore': ['after-comment']
        }],
        // 允许的单位
        'unit-whitelist': ['em', 'rem', '%', 's', 'ms', 'px', 'deg', 'vh', 'vw']
    }
    // plugins: [
    //     './node_modules/stylelint-no-browser-hacks/lib'
    // ]
};
