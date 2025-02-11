export default [
  {
    text: '算法',
    collapsible: true,
    icon: 'suanfa',
    prefix: '/computer-science/algorithm',
    children: ['01-array']
  },
  {
    text: '计算机网络',
    collapsible: true,
    icon: 'network',
    prefix: '/computer-science/networking/',
    children: [
      '01-network-model',
      '02-http-overview',
      '03-get-post-difference',
      '04-http-development',
      '05-http-cache',
      '06-https-overview',
      '07-tcp-three-handshakes-and-four-waves',
      '08-tcp-udp',
      '09-http-code-when-authorized-refused',
      '10-401-403'
    ]
  },
  {
    text: '操作系统',
    collapsible: true,
    icon: 'caozuoxitong',
    prefix: '/computer-science/operating-system/',
    children: ['01-character-encoding', '02-windows-terminal-beauty']
  }
]
