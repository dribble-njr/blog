---
title: fnm 全局共享模块
date: 2024-11-05
icon: relation
category:
  - 工程化
tag:
  - frontend
  - node
  - fnm
  - node package manager
---

`fnm` 会根据当前 Node 版本创建独立的模块目录，若频繁切换版本，则需要重新安装模块。

为了提高开发体验，我们可能需要全局共享模块，虽然这会在一定程度上造成版本冲突的可能性，但可以减少切换版本时重新安装模块的麻烦。

`fnm` 设置全局共享模块步骤：

1. 创建全局共享模块目录
   ```shell
   mkdir -p ~/.npm_global
   ```
2. 设置 `npm` 全局模块目录
   ```shell
   npm config set prefix ~/.npm_global
   ```
3. 更新环境变量
   ```shell
   echo "export PATH=~/.npm_global/bin:\$PATH" >> ~/.zshrc
   source ~/.zshrc
   ```

配置完成后，通过 `npm install -g` 安装的全局模块会存储在 `~/.npm_global` 中，不再受 Node.js 版本切换的影响。
