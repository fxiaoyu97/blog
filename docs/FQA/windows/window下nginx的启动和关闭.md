# window下nginx的启动和关闭

## 启动nginx

1. 直接双击`nginx.exe`，双击后一个黑色的窗口一闪而过
2. 打开cmd命令窗口，切换到nginx的根目录下面（也可以直接在资源管理器的地址栏输出cmd，然后敲回车，也能打开命令窗口），在命令窗口输入`nginx.exe`或者`start nginx`，接着敲回车
3. 如果多点击了几次`nginx.exe`文件，或者在没有关闭nginx的情况下又执行了启动操作，那么有可能会启动多个nginx。

## 查询nginx是否启动成功

1. 直接在浏览器地址栏输入网址 [http://localhost:80](http://localhost/) 回车，查看是否有`Welcome to nginx!`的页面出现，如果修改过配置文件中的端口号，使用修改后的端口号。
2. 在命令行窗口输入命令：`tasklist /fi "imagename eq nginx.exe" `

## 关闭nginx

**如果使用cmd命令窗口启动nginx，关闭cmd窗口是不能结束nginx进程的。**

1. 使用nginx命令：`nginx -s stop`（快速停止nginx）或 `nginx -s quit`（完整有序的停止nginx）
2. 使用系统命令：`taskkill /f /t /im nginx.exe` （停止所有运行中的nginx）
