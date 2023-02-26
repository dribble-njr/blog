---
title: 从零开发组件库（一）：搭建项目
date: 2023-01-14
categories:
  - Project
tags:
  - 项目
  - 组件库
  - React
  - TypeScript
  - 代码规范
  - 工程化
---

## 初始化项目

新建 `kool-ui` 项目并初始化。

```bash
mkdir kool-ui && cd kool-ui
npm init -y
```

初始化 `git` 仓库，添加 `.gitignore` 文件。

```bash
git init
```

**`.gitignore`**

```bash
node_modules
```

### TypeScript

```bash
yarn add typescript --dev
```

**tsconfig.json**

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "target": "esnext",
    "module": "commonjs",
    "jsx": "react",
    "declaration": true,
    "declarationDir": "lib",
    "strict": true,
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "resolveJsonModule": true
  },
  "include": ["src", "typings.d.ts"],
  "exclude": ["node_modules"]
}
```

### React

```bash
# 开发时依赖，宿主环境一定存在
yarn add react react-dom @types/react-dom -D

# 运行时依赖，宿主环境可能不存在
# 无法保证宿主环境也使用 typescript，故使用 prop-types 保证 javascript 用户也能得到友好的运行时报错信息
yarn add prop-types
```



## 规范

### 代码规范

#### editorconfig

EditorConfig 有助于跨不同编辑器和 IDE 为处理同一项目的多个开发人员维护一致的编码风格。

VSCode 需要安装 `EditorConfig for VS Code` 插件。

**`.editorconfig`**

```shell
# http://editorconfig.org

root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行首的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false
```

#### ESLint

ESLint 是一个Javascript Linter，帮助我们规范代码质量，提高团队开发效率。

安装 `eslint` 并初始化，会自动生成配置文件。

```bash
yarn add eslint -D
npx eslint --init
```

如果想要在项目中安装 `jest`，则需要在配置文件中的 `env` 加上下面这一行：

```diff
  env: {
    browser: true,
    es2021: true,
    node: true,
+   jest: true
  },
```

如果想和 `prettier` 一起使用则需要在 `extends` 中加入：

```diff
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
+   "prettier"
  ],
```

还需要在项目中安装与 `TypeScript` 相关的插件：

```bash
yarn add -D eslint-plugin-import @typescript-eslint/parser eslint-import-resolver-typescript
```

最后在 `.eslintrc.js` 中添加 `settings`：

```js
{
	settings: {
    "import/resolver": {
      "typescript": {}
    }
  }
}
```

#### prettier

`prettier` 是代码格式化工具，和 `eslint` 不同的是，它只关注代码格式，而不关注语法问题。

首先安装 `prettier` 及相关依赖插件：

```shell
yarn add prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-hooks -D
```

为了使用刚才安装的插件，需要对 `.eslintrc.js` 中的 `plugins` 进行修改：

```diff
- "plugins": ["react", "@typescript-eslint"]
+ "plugins": ["react", "react-hooks", "@typescript-eslint", "prettier"]
```

`prettier` 基本的配置文件如下：

**`.prettierrc`**

```json
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "none",
  "semi": false
}
```

**`.prettierignore`**

```
/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*
```

最后可以在 `package.json` 中配置 `scripts`：

```json
{
  "scripts": {
    "lint": "eslint src/**/*.{js,jsx,ts,tsx,json}",
    "lint:fix": "eslint --fix 'src/**/*.{js,jsx,ts,tsx,json}'",
    "format": "prettier --write 'src/**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc"
  },
}
```

#### StyleLint

`Stylelint`  是一个强大、先进的 CSS 代码检查器（linter），可以帮助你规避 CSS 代码中的错误并保持一致的编码风格。

> https://stylelint.io/
>
> https://zhuanlan.zhihu.com/p/493920283

安装依赖

- `stylelint` - Stylelint 本体
- `stylelint-config-prettier` - 关闭 Stylelint 中与 Prettier 中会发生冲突的规则
- `stylelint-config-standard` - Stylelint 官方推荐规则
- `stylelint-config-standard-scss` - 针对 Scss 的标准可共享配置
- `stylelint-config-prettier-scss` - 关闭 Scss 中与 Prettier 中会发生冲突的规则
- `stylelint-scss` - Stylelint (以插件的形式)特定于 Scss 的 linting 规则的集合

```bash
yarn add stylelint stylelint-config-standard stylelint-config-prettier stylelint-config-standard-scss stylelint-config-prettier-scss stylelint-scss -D

# 如果项目中使用 scss
yarn add postcss-scss -D
```

配置文件 `.stylelintrc.js`：

```js
module.exports = {
  extends: ['stylelint-config-standard'],
  // rule覆盖（根据自己喜好来配置）
  rules: {
    'string-quotes': 'single',
    'property-no-vendor-prefix': null,
    'declaration-colon-newline-after': null,
    'value-list-comma-newline-after': null,
    'custom-property-pattern': null,
    'color-hex-length': 'short',
    'color-function-notation': null,
    'alpha-value-notation': null,
    'value-no-vendor-prefix': null,
    'selector-class-pattern': null,
    'function-url-quotes': null,
    'no-missing-end-of-source-newline': true,
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null
  },
  overrides: [
    // 若项目中存在scss文件，添加以下配置
    {
      files: '**/*.scss',
      customSyntax: 'postcss-scss'
    }
  ]
}
```

`.stylelintignore` 忽略校验目录文件：

```bash
/dist/*
/public/*
public/*
node_modules
```

### Git 规范

`Git` 规范包括：

* `pre-commit`：判断提交的代码是否符合规范
* `commit-message`：判断 `commit` 信息是否符合规范

#### husky

`husky` 可以管理 `git` 中的 `hooks`，初始化应该执行如下命令：

```bash
npx husky-init && yarn
```

执行上面这条命令实际上相当于执行了以下三个操作：

1. 安装依赖：`yarn add husky -D`
2. 在 `package.json` 中添加脚本，运行命令后会在项目根目录创建 `.husky` 文件夹。
   
   ```bash
   npm pkg set scripts.prepare="husky install"
   npm run prepare
   ```
   
3. 添加一个 `Hook`：`npx husky add .husky/pre-commit "npm test"`

然后修改 `pre-commit`：

```diff
- npm test
+ npm run lint
```

这样在每次 `git commit` 之前，都会首先进行 `lint` 检查，通过之后才能提交代码。

#### lint-staged

然而思考几个问题：

1. 我们只修改了个别的文件，没有必要检测所有的文件代码格式
2. 它只能给我们提示出对应的错误，我们还需要手动的进行代码修改
3. 修改后需要手动`git add .`

这时可以使用 `lint-staged` 解决这个问题，它只会检查在暂存区的代码。

安装：

```bash
yarn add lint-staged -D
```

修改 `.husky` 中的 `pre-commit`：

```diff
- npm run lint
+ npx npx lint-staged
```

在 `package.json` 中配置：

> 参考资料
>
> https://github.com/ant-design/ant-design/blob/master/package.json
> https://www.npmjs.com/package/lint-staged
> https://juejin.cn/post/7136009620979449893#heading-5

```json
"lint-staged": {
  "*.{json,md}": "prettier --ignore-unknown --write",
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  "{!(package)*.json,*.code-snippets,.!(browserslist)*rc}": [
    "prettier --write--parser json"
  ],
  "package.json": [
    "prettier --write"
  ],
  "*.{scss,less,styl,html}": [
    "stylelint --fix",
    "prettier --write"
  ]
}
```

#### commitizen

在安装完上面两个依赖后，就已经能在 `pre-commit` 钩子判断**暂存区代码**是否符合规范，并且使用 `prettier` 修复它。

第二个问题是我们需要在 `commit-message` 中判断 `commit` 信息是否符合规范。可以使用 `commitizen`，它是一个撰写符合 `Commit Message` 标准的一款工具。通过它可以实现交互式撰写规范的 `Commit Message`。

> http://commitizen.github.io/cz-cli/

```bash
yarn add commitizen -D
```

安装完成后，一般我们都采用符合 Angular 的 `Commit message` 格式的提交规范，运行以下命令生成符合 Angular 提交规范格式的 `Commit message`：

```bash
npx --no-install commitizen init cz-conventional-changelog --yarn --dev --exact
```

`package.json` 中会自动生成以下配置：

```json
"config": {
  "commitizen": {
    "path": "./node_modules/cz-conventional-changelog"
  }
}
```

然后在 `package.json` 中的 `scripts` 添加命令：

```json
"scripts": {
	"commit": "git-cz"
}
```

#### commitlint

虽然使用了 `commitizen` 交互式撰写规范的 `Commit Message`，但由于它不是强制使用，我们仍然可以通过 `git commit` 提交信息，因此不管是使用 `git commit` 或 `git cz`，我们都需要对 `commit message` 进行校验，不允许规范的情况下不能进行 `commit` 操作。

> https://commitlint.js.org/#/guides-local-setup

首先安装相关依赖并且生成相关配置：

```bash
# For Windows:
yarn add @commitlint/config-conventional @commitlint/cli -D

# Configure commitlint to use conventional config
echo "module.exports = { ignores: [(commit) => commit.includes('init')], extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
```

在 `hushy` 中自动生成 `hook`：

```bash
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```

#### CHANGELOG

CHANGELOG 记录项目所有的 `commit` 信息并归类版本，可以快速跳转到该条 `commit` 记录，方便知道项目哪个版本做了哪些功能有哪些 bug 等信息。也方便排查 bug，对于提交记录一目了然，不用一个一个去翻去查。

> https://juejin.cn/post/7136009620979449893

首先安装 `standard-version`：

```bash
yarn add standard-version -D
```

然后在 `package.json` 的 `scripts` 中添加命令：

```json
"scripts": {
	"release": "standard-version"
}
```

当 `commit type` 是 `feat` 和 `fix` 的时候执行这个命令，它会自增版本号。

`standard-version` 提供自定义配置不同类型对应显示文案，在根目录新建 `.versionrc.js` 文件：

```js
module.exports = {
  types: [
    { type: 'feat', section: '✨ Features | 新功能' },
    { type: 'fix', section: '🐛 Bug Fixes | Bug 修复' },
    { type: 'init', section: '🎉 Init | 初始化' },
    { type: 'docs', section: '✏️ Documentation | 文档' },
    { type: 'style', section: '💄 Styles | 风格' },
    { type: 'refactor', section: '♻️ Code Refactoring | 代码重构' },
    { type: 'perf', section: '⚡ Performance Improvements | 性能优化' },
    { type: 'test', section: '✅ Tests | 测试' },
    { type: 'revert', section: '⏪ Revert | 回退' },
    { type: 'build', section: '📦‍ Build System | 打包构建' },
    { type: 'chore', section: '🚀 Chore | 构建/工程依赖/工具' },
    { type: 'ci', section: '👷 Continuous Integration | CI 配置' }
  ]
}
```

## 质量

### jest

安装

```bash
yarn add jest -D
```



## 构建工具

使用 `webpack` 作为构建工具。

```bash
yarn add webpack webpack-cli -D
```