---
title: whistle 调试真机
date: 2024-07-29
icon: debug
category:
  - practice
tag:
  - debug
---

在前端开发中移动端开发技能必不可少。当我们遇到类似于这样的问题：

- 移动端 `Canvas` 渲染失败
- 微信获取 `openId` 回调页不匹配
- 微信浏览器文件上传失败
- 支付宝，微信 `H5` 支付域名校验不匹配
- 生产环境 BUG，测试环境无法复现
- 当后端接口启用 `cors` 跨域时，本地环境无法访问

`Chrome` 模拟器和微信开发者工具等都无法完美复现我们遇到的问题，这时候我们需要用到 `whistle` 来实现真机调试

## Whistle

[whistle](https://wproxy.org/whistle/)（读音[ˈwɪsəl]，拼音[wēisǒu]）基于 Node 实现的跨平台 web 调试代理工具。

它的作用可以理解为用 Node 开一个代理服务器，将我们需要调试的设备代理到 `whistle` 后，由 `whistle` 进行代理请求。同时 `whistle` 支持类似于 hosts 的转发规则，我们可以通过正则或者内置的一些指令对我们需要进行代理的域名进行转发，添加插件等。

### 安装启动

安装 `whistle`：

```sh
npm install whistle -g
```

启动 `whistle`：

```sh
w2 start
```

启动完成后，默认会在 `localhost:8899` 端口监听。

### 设置代理

#### 移动端

电脑与手机连接同一 wifi，在手机端 wifi 中设置代理为手动，输入代理 ip（启动 `whistle` 后在控制台中打印的局域网 ip），端口号为 `8899`。

保存后移动端则已经设置好代理，在手机浏览器中访问互联网，即可以在 `whistle` 控制台中抓取到相应的网络请求。

#### PC 端

PC 端有时也需要通过 `whistle` 控制台设置代理修改请求信息或者配置 `source map` 文件，下面介绍如何使用 `Proxy switchyOmega` 插件设置代理。

在扩展商店中搜索安装 `Proxy switchyOmega` 插件，下载完成后，默认会有一个 `proxy` 的情景模式，设置代理服务器为 `127.0.0.1`，端口号为 `8899` 保存并应用选项。

![设置情景模式](https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240729163103.png)

这里还推荐修改一个配置，将默认配置改为系统代理，避免日常使用时被代理到 `whistle`，无法科学上网。

![修改默认配置](https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240729163028.png)

### 安装证书

参考 [官方文档](https://wproxy.org/whistle/webui/https.html) 即可。

## 真机调试

打开 `whistle` 控制台，左侧有个 `Rules`，在这里面可以进行一些跳转规则的分组，配置。

### resMerge

由于大部分 webapp 是嵌入到 webview 中，因此需要更改响应结果中的 `webAppUrl` 路径。

```
https://xxxx resMerge://(webAppUrl=https://localhost:3000/index.html?isWebApp=true)
```

### 注入 eruda

安装 `whistle.inspect` 插件，该插件即成了 [eruda](https://github.com/liriliri/eruda) 等调试工具，用来在移动端页面上模拟 Chrome 开发者工具功能的模块。

```shell
w2 i whistle.inspect
```

配置如下：

```
https://localhost:3000/index.html whistle.inspect://eruda disable://cache
```

这个配置的作用是当访问到 `localhost:3000` 时，页面会自动注入 `eruda` 调试工具。
