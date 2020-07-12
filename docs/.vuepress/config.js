module.exports = {
    title: '卡洛小豆的杂货铺', // 页签标题 : A001_VuePress博客搭建的简单教程&问题分析 # | Wiki 1001
    description: '卡洛小豆的杂货铺', // meta 中的描述文字，意义不大，SEO用
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        // 增加一个自定义的 favicon(网页标签的图标)
        // 这里的 '/' 指向 docs/.vuepress/public 文件目录 
        // 即 docs/.vuepress/public/img/geass-bg.ico
        ['link', {
            rel: 'icon',
            href: '/img/geass-bg.ico'
        }],
    ],
    locales: {
        '/': {
            lang: 'zh-CN', 
        }
    },
   // base: '/blog/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 1, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        //displayAllHeaders: true, // 显示所有页面的标题链接
        lastUpdated: '上次更新', // 文档更新时间：每个文件git最后提交的时间,
        // 顶部导航栏
        nav: [
            // 单项 text：显示文字，link：指向链接
            // 这里的'/' 指的是 docs文件夹路径
            // [以 '/' 结尾的默认指向该路径下README.md文件]
            {
                text: '编程学习',
                link: '/Code/'
            }, 
            {
                text: '项目实践',
                link: '/Project/'
            },
            {
                text: '软件合集',
                link: '/Software/'
            },
            {
                text: '理财',
                link: '/Money/'
            },
            {
                text: '随笔',
                link: '/Story/'
            },
            {
                text: '关于我',
                items: [{
                        text: 'GitHub首页',
                        link: 'https://github.com/fxiaoyu97'
                    },
                    {
                        text: '博客',
                        link: 'https://www.cnblogs.com/tudou1179006580/'
                    },
                ]
            },
        ],
        sidebar:{
                 // 打开Code主页链接时生成下面这个菜单
                '/Code/':[
                    //多级菜单形式
                    {
                        // 菜单名
                        title: 'Java学习',
                        collapsable: false,
                        //sidebarDepth: 2, // 显示的侧边栏深度
                        // 子菜单
                        children: [
                            // ['','']=>[路径,标题]
                            // 或者写成 '路径',标题自动识别为该地址的文件中的h1标题
                            // 不以 '/' 结尾的就是指向.md文件             
                            ['/Code/Java/','Java基础'], // '/FAQ/DigestionHeap/Digested.md'文件
                        ]
                    },
                    {
                        title: 'Git',
                        children: [
                            ['/Code/Git/','Git目录']
                        ]
                    }
                ],
                 // 打开Thought主页链接时生成下面这个菜单
                '/Project/':[
                    '',
                    {
                        title: '微服务',
                        children: [
                            ['/Project/Microservices/shop','商城'],
                        ]
                    },
                    {
                        title: 'Springboot项目',
                        children: [
                           ['/Project/Springboot/shop','商城'],
                        ]
                    },
                ],
                '/Money/':[
                    {
                        title: '基金',
                        collapsable: false,
                        sidebarDepth: 1, // 显示的侧边栏深度
                        children: [
                            '/Money/',
                            '/Money/fund/ETF基金',
                            '/Money/fund/ETF联接基金',
                        ]
                    },
                    {
                        title: '股票',
                        collapsable: false,
                        children: [
                           ['/Money/stock/','股票'],
                        ]
                    },
                    ['/Code/','百科首页'],
                ],
                '/Story/': [
                    ['','随笔'],
                    {
                        title: '应用',
                        children: [
                            // ['/Store/Apps/DownDoors', '下载门户'],
                            // ['/Store/Apps/OwnTest', '博主测评']
                        ]
                    },
                ]
            },
    }
}
