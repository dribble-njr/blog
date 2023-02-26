import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "HTML", link: "/html/" },
  { text: "CSS", link: "/css/" },
  { text: "JavaScript", link: "/javascript/" },
  { text: "LeetCode", link: "/leetcode/" },
  {
    text: "常用框架",
    link: "/library/",
    children: [
      { text: "Vue", link: "/library/Vue/" },
      { text: "React", link: "/library/React/" },
    ],
  },
  { text: "浏览器", link: "/client/" },
  { text: "工程化", link: "/engineering/" },
  { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
  // {
  //   text: "博文",
  //   icon: "edit",
  //   prefix: "/zh/posts/",
  //   children: [
  //     {
  //       text: "苹果",
  //       icon: "edit",
  //       prefix: "apple/",
  //       children: [
  //         { text: "苹果1", icon: "edit", link: "1" },
  //         { text: "苹果2", icon: "edit", link: "2" },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     {
  //       text: "香蕉",
  //       icon: "edit",
  //       prefix: "banana/",
  //       children: [
  //         {
  //           text: "香蕉 1",
  //           icon: "edit",
  //           link: "1",
  //         },
  //         {
  //           text: "香蕉 2",
  //           icon: "edit",
  //           link: "2",
  //         },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     { text: "樱桃", icon: "edit", link: "cherry" },
  //     { text: "火龙果", icon: "edit", link: "dragonfruit" },
  //     "tomato",
  //     "strawberry",
  //   ],
  // }
]);
