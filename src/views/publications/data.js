// color = { processing, success, error, warning, magenta, red, volcano, orange, gold, lime, green, cyan, blue, geekblue, purple }
export const pageBanner = {
  title: '研究成果',
  desc: '关于研究成果的介绍性文字'
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
  },
  demo: {
    name: 'DEMO', type: 'volcano'
  }
}

export const CATEGORY = {
  NDSS: '#2db7f5',
  TOPS: '#87d068',
  TIFS: '#108ee9'
}

export const publications = [
  {
    year: '2024',
    title: 'Secret-Shared Shuffle with Malicious Security',
    writer: 'Xiangfu Song, Dong Yin, Jianli Bai,  Changyu Dong, and Ee-Chien Chang',
    subtitle: 'In 31st Annual Network and Distributed System Security Symposium (NDSS 2024), 2024',
    category: 'NDSS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/test.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://github.com/vuejs'
      }
    ]
  },
  {
    year: '2024',
    title: 'Sphinx-in-the-Head: Group Signatures from Symmetric Primitives',
    writer: 'Liqun Chen,  Changyu Dong, Christopher J. P. Newton, and Yalan Wang',
    subtitle: 'ACM Trans. Priv. Secur., 2024',
    category: 'TOPS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/test.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://github.com/vuejs'
      }
    ]
  },
  {
    year: '2024',
    title: 'Distributed Differential Privacy via Shuffling Versus Aggregation: A Curious Study',
    writer: 'Yu Wei, Jingyu Jia, Yuduo Wu, Changhui Hu,  Changyu Dong, Zheli Liu, Xiaofeng Chen, Yun Peng, and Shaowei Wang',
    subtitle: 'IEEE Trans. Inf. Forensics Secur., 2024',
    category: 'TIFS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/test.pdf'
      },
      {
        ...TAGS.html,
        url: ''
      }
    ]
  },
  {
    year: '2024',
    title: 'Toward Universal Detection of Adversarial Examples via Pseudorandom Classifiers',
    writer: 'Boyu Zhu,  Changyu Dong, Yuan Zhang, Yunlong Mao, and Sheng Zhong',
    subtitle: 'IEEE Trans. Inf. Forensics Secur., 2024',
    category: 'TIFS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/test.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://github.com/vuejs'
      }
    ]
  },
  {
    year: '2024',
    title: 'Distributed Differential Privacy via Shuffling Versus Aggregation: A Curious Study',
    writer: 'Yu Wei, Jingyu Jia, Yuduo Wu, Changhui Hu,  Changyu Dong, Zheli Liu, Xiaofeng Chen, Yun Peng, and Shaowei Wang',
    subtitle: 'IEEE Trans. Inf. Forensics Secur., 2024',
    category: 'TIFS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/test.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://github.com/vuejs'
      }
    ]
  },
  {
    year: '2024',
    title: 'Toward Universal Detection of Adversarial Examples via Pseudorandom Classifiers',
    writer: 'Boyu Zhu,  Changyu Dong, Yuan Zhang, Yunlong Mao, and Sheng Zhong',
    subtitle: 'IEEE Trans. Inf. Forensics Secur., 2024',
    category: 'TIFS',
    tags: [
      {
        ...TAGS.pdf,
        url: ''
      },
      {
        ...TAGS.html,
        url: ''
      }
    ]
  },
  {
    year: '2024',
    title: 'Toward Universal Detection of Adversarial Examples via Pseudorandom Classifiers',
    writer: 'Boyu Zhu,  Changyu Dong, Yuan Zhang, Yunlong Mao, and Sheng Zhong',
    subtitle: 'IEEE Trans. Inf. Forensics Secur., 2024',
    category: 'TIFS',
    tags: [
      {
        ...TAGS.pdf,
        url: ''
      },
      {
        ...TAGS.html,
        url: ''
      }
    ]
  },
  {
    year: '2024',
    title: 'Toward Universal Detection of Adversarial Examples via Pseudorandom Classifiers',
    writer: 'Boyu Zhu,  Changyu Dong, Yuan Zhang, Yunlong Mao, and Sheng Zhong',
    subtitle: 'IEEE Trans. Inf. Forensics Secur., 2024',
    category: 'TIFS',
    tags: [
      {
        ...TAGS.pdf,
        url: ''
      },
      {
        ...TAGS.html,
        url: ''
      }
    ]
  },
  {
    year: '2024',
    title: 'Toward Universal Detection of Adversarial Examples via Pseudorandom Classifiers',
    writer: 'Boyu Zhu,  Changyu Dong, Yuan Zhang, Yunlong Mao, and Sheng Zhong',
    subtitle: 'IEEE Trans. Inf. Forensics Secur., 2024',
    category: 'TIFS',
    tags: [
      {
        ...TAGS.pdf,
        url: ''
      },
      {
        ...TAGS.html,
        url: ''
      }
    ]
  }
]