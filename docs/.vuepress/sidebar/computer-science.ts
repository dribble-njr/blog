export default [
  {
    text: '算法',
    collapsible: true,
    icon: 'suanfa',
    children: ['/computer-science/algorithm']
  },
  {
    text: '计算机网络',
    collapsible: true,
    icon: 'network',
    prefix: '/computer-science/networking/',
    children: [
      '001-network-model',
      '002-http-overview',
      '003-get-post-difference',
      '004-http-development',
      '005-http-cache',
      '006-https-overview',
      '007-tcp-three-handshakes-and-four-waves',
      '008-tcp-udp'
    ]
  },
  {
    text: '操作系统',
    collapsible: true,
    icon: 'caozuoxitong',
    prefix: '/computer-science/operating-system/',
    children: ['', '001-character-encoding']
  }
]
