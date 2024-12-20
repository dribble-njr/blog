---
title: TCP 与 UDP 的区别
date: 2022-05-06
icon: vs
category:
  - 计算机网络
tag:
  - TCP
  - UDP
---

TCP 和 UDP 都是传输层协议，属于 TCP/IP 协议族。

## UDP

用户数据报协议（User Datagram Protocol，UDP）用来处理数据包，是一种无连接的协议，它的特点如下：

**无连接**

不需要像 TCP 一样进行三次握手进行连接，并且也只是数据报文的搬运工，不会对报文进行任何的加工处理。

**单播、多播、广播**

UDP 支持一对一、一对多、多对多、多对一的传输方式。

**面向报文**

在发送端，应用层将数据传递给传输层，UDP 只会给数据增加一个 UDP 头标识这是一个 UDP 协议报文，然后就传给网络层，对应用层交付的报文既不合并也不拆分，保留报文的边界，一次发送一个报文。

在接收端，网络层将 UDP 数据报传输给 UDP，UDP 去除首部后就会将数据原封不动地传递给应用层，一次交付一个完整的报文。

**不可靠**

首先体现在无连接上，通信双方想发就发，必然不可靠。没有像 TCP 做重传机制、流量控制和拥塞控制。

**头部开销小**

UDP 头部只有 8 字节，相比 TCP 20 个字节少得多，传输数据时比较高效。

**应用场景**

UDP 应用于效率要求高，但可靠性要求相对较低的场景，例如：即时通讯，速度要求高，但是偶尔出现断续不是太大问题，完全可以不使用重传机制，场景有在线视频、网络语音通话、广播通信等。

## TCP

传输控制协议（Transmission Control Protocol，TCP）是一种面向连接的、可靠的、基于字节流的传输层通讯协议，它的特点如下：

**面向连接**

在发送前必须进行 TCP 三次握手在两端建立连接。

**仅支持单播传输**

每个 TCP 只能进行一对一传输，不支持多播和广播的形式。

**面向字节流**

TCP 不像 UDP 那样一个一个报文独立传输，而是在不保留报文边界的情况下以字节流方式进行传输。

**可靠传输**

TCP 为了实现可靠传输，使用了重传机制、流量控制和拥塞控制。

**头部开销大**

TCP 头部最小 20 个字节，最大 60 个字节，传输效率慢。

**应用场景**

TCP 应用于效率要求相对低，但可靠性要求高的场景，例如：文件传输、邮件传输等。

## 区别

|              | UDP                   | TCP                                          |
| ------------ | --------------------- | -------------------------------------------- |
| 是否连接     | 无连接                | 面向连接                                     |
| 是否可靠     | 不可靠                | 使用重传机制、流量控制和拥塞控制保证可靠传输 |
| 连接对象个数 | 单播、多播、广播      | 单播                                         |
| 传输方式     | 面向报文              | 面向字节流                                   |
| 头部大小     | 头部开销小，仅 8 字节 | 头部最小 20 个字节，最大 60 个字节           |
| 应用场景     | 适用于实时应用        | 适用于要求可靠传输的应用                     |
