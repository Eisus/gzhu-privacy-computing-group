// color = { processing, success, error, warning, magenta, red, volcano, orange, gold, lime, green, cyan, blue, geekblue, purple }
export const pageBanner = {
  title: '动态',
  desc: '关于动态的介绍文字'
}

const TAGS = {
  html: {
    name: 'HTML', type: 'processing'
  },
  pdf: {
    name: 'PDF', type: 'success'
  },
  url: {
    name: 'URL', type: 'magenta'
  }
}


export const newsList = [
  {
    time: 'May 19, 2024',
    title: 'Paper accepted by NDSS 2024',
    content: `
    ###### 六级标题

这是一段普通文字：

予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯；朝晖夕阴，气象万千。此则岳阳楼之大观也，前人之述备矣。然则北通巫峡，南极潇湘，迁客骚人，多会于此，览物之情，得无异乎？若夫霪雨霏霏，连月不开，阴风怒号，浊浪排空；日星隐曜，山岳潜形；商旅不行，樯倾楫摧；薄暮冥冥，虎啸猿啼。登斯楼也，则有去国怀乡，忧谗畏讥，满目萧然，感极而悲者矣。至若春和景明，波澜不惊，上下天光，一碧万顷；沙鸥翔集，锦鳞游泳；岸芷汀兰，郁郁青青。而或长烟一空，皓月千里，浮光跃金，静影沉璧，渔歌互答，此乐何极！登斯楼也，则有心旷神怡，宠辱偕忘，把酒临风，其喜洋洋者矣。

这是**加粗**，*斜体*，~~删除线~~，[链接](https://blog.imalan.cn)。

这是块引用与嵌套块引用：

> 安得广厦千万间，大庇天下寒士俱欢颜！风雨不动安如山。
> > 呜呼！何时眼前突兀见此屋，吾庐独破受冻死亦足！

    `,
    category: ['Paper'],
    tags: [
      {
        ...TAGS.url,
        url: ''
      },
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/test.pdf'
      }
    ]
  },
  {
    time: 'Jan 1, 2024',
    title: '2 Papers accepted by TIFS',
    content: '',
    category: ['Paper'],
    tags: [
      {
        ...TAGS.url,
        url: ''
      },
      {
        ...TAGS.pdf,
        url: ''
      }
    ]
  },
  {
    time: 'Dec 25, 2023',
    title: 'Some activities',
    content: '',
    category: ['Activicy'],
    tags: [
      {
        ...TAGS.url,
        url: ''
      },
    ]
  },
  {
    time: 'May 19, 2023',
    title: 'Paper accepted by NDSS 2024',
    content: '',
    category: ['Paper'],
    tags: [
      {
        ...TAGS.url,
        url: ''
      },
      {
        ...TAGS.pdf,
        url: ''
      }
    ]
  },
  {
    time: 'May 19, 2023',
    title: 'Paper accepted by NDSS 2024',
    content: '',
    category: ['Paper'],
    tags: [
      {
        ...TAGS.url,
        url: ''
      },
      {
        ...TAGS.pdf,
        url: ''
      }
    ]
  },
  {
    time: 'May 19, 2023',
    title: 'Paper accepted by NDSS 2024',
    content: '',
    category: ['Paper'],
    tags: [
      {
        ...TAGS.url,
        url: ''
      },
      {
        ...TAGS.pdf,
        url: ''
      }
    ]
  },
  {
    time: 'May 19, 2023',
    title: 'Paper accepted by NDSS 2024',
    content: '',
    category: ['Paper'],
    tags: [
      {
        ...TAGS.url,
        url: ''
      },
      {
        ...TAGS.pdf,
        url: ''
      }
    ]
  },
  {
    time: 'May 19, 2023',
    title: 'Paper accepted by NDSS 2024',
    content: '',
    category: ['Paper'],
    tags: [
      {
        ...TAGS.url,
        url: ''
      },
      {
        ...TAGS.pdf,
        url: ''
      }
    ]
  },
  {
    time: 'May 19, 2023',
    title: 'Paper accepted by NDSS 2024',
    content: '',
    category: ['Paper'],
    tags: [
      {
        ...TAGS.url,
        url: ''
      },
      {
        ...TAGS.pdf,
        url: ''
      }
    ]
  },
  {
    time: 'May 19, 2023',
    title: 'Paper accepted by NDSS 2024',
    content: '',
    category: ['Paper'],
    tags: [
      {
        ...TAGS.url,
        url: ''
      },
      {
        ...TAGS.pdf,
        url: ''
      }
    ]
  },
  {
    time: 'May 19, 2023',
    title: 'Paper accepted by NDSS 2024',
    content: '',
    category: ['Paper'],
    tags: [
      {
        ...TAGS.url,
        url: ''
      },
      {
        ...TAGS.pdf,
        url: ''
      }
    ]
  },
  {
    time: 'May 19, 2023',
    title: 'Paper accepted by NDSS 2024',
    content: '',
    category: ['Paper'],
    tags: [
      {
        ...TAGS.url,
        url: ''
      },
      {
        ...TAGS.pdf,
        url: ''
      }
    ]
  },
]