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
    // base: '/calos/', // 这是部署到github相关的配置
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
                items: [{
                    text: 'Java',
                    link: '/code/'
                }
            ]
            }, 
            {
                text: '项目实践',
                link: '/projects/'
            },
            {
                text: '常见问题',
                link: '/FQA/'
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
                '/code/':[
                    //多级菜单形式
                    {
                        // 菜单名
                        title: 'Java基础',
                        collapsable: false,
                        //sidebarDepth: 2, // 显示的侧边栏深度
                        // 子菜单
                        children: [
                            // ['','']=>[路径,标题]
                            // 或者写成 '路径',标题自动识别为该地址的文件中的h1标题
                            // 不以 '/' 结尾的就是指向.md文件            
                            '/code/',
                        ]
                    },
                    {
                        // 菜单名
                        title: '常见问题',
                        collapsable: false,
                        //sidebarDepth: 2, // 显示的侧边栏深度
                        // 子菜单
                        children: [         
                            '/FQA/java/map、string、json互转',
                        ]
                    },
                    
                    ['/git/','Git学习'],
                    ['/spring/','Spring学习笔记'],
                    ['/springboot/','SpringBoot']
                ],
                 // 打开Thought主页链接时生成下面这个菜单
                '/projects/':[
                    '/projects/',
                    {
                        title: '乐优商城',
                        collapsable: false,
                        children: [
                            '/leyou/开发工具准备',
                            '/leyou/问题合集',
                            '/leyou/day01/1.项目搭建',
                        ]
                    }
                ],
                '/FQA/':[
                    {
                        title: 'JAVA',
                        collapsable: false,
                        sidebarDepth: 1, // 显示的侧边栏深度
                        children: [
                            '/FQA/',
                            '/FQA/java/如何优雅的读取yml配置文件',
                            '/FQA/java/map、string、json互转',
                            '/FQA/java/nginx屏蔽指定IP',
                        ]
                    },
                    {
                        title: 'Windows',
                        collapsable: false,
                        children: [
                           '/FQA/windows/idea快捷键',
                           '/FQA/windows/Windows中杀死占用某个端口的进程',
                           '/FQA/windows/Window下nginx的启动和关闭',
                        ]
                    },
                ],
                '/leyou/': [
                    {
                        title: '乐优商城',
                        collapsable: false,
                        sidebarDepth: 1, // 显示的侧边栏深度
                        children: [
                            '/leyou/开发工具准备',
                            '/leyou/问题合集',
                        ]
                    },
                    {
                        title: '基础准备',
                        collapsable: false,
                        sidebarDepth: 1, // 显示的侧边栏深度
                        children: [
                            '/leyou/day00/1.springboot的属性注入',
                            '/leyou/day00/2.微服务',
                            '/leyou/day00/3.熔断和网关',
                            '/leyou/day00/4.zuul网关的四种配置方式',
                        ]
                    },
                    {
                        title: '开发笔记',
                        collapsable: false,
                        sidebarDepth: 1, // 显示的侧边栏深度
                        children: [
                            '/leyou/day01/1.项目搭建',
                        ]
                    },
                   
                ],
                '/git/': [
                    {
                        title: 'Git学习',
                        collapsable: false,
                        sidebarDepth: 1, // 显示的侧边栏深度
                        children: [
                            '/git/',
                            '/git/撤销已经执行操作的文件',
                            '/git/忽略不需要提交的文件或目录',
                        ]
                    },
                ],
                '/spring/': [
                    {
                        title: 'Spring学习',
                        collapsable: false,
                        children: [           
                            '/spring/Spring各版本与Java的关系',
                            '/spring/项目启动时执行的操作',
                        ]
                    },
                ],
                '/springboot/': [
                    {
                        title: 'SpringBoot学习',
                        collapsable: false,
                        sidebarDepth: 1, // 显示的侧边栏深度
                        children: [
                            '/springboot/',
                            '/springboot/yml实现多环境配置',
                            '/springboot/springboot日期参数前后台转换问题',
                        ]
                    },
                ]
            },
    }
}
