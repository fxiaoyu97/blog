# Windows中杀死占用某个端口的进程

---

1. 根据端口号查找对应的进程号 

```powershell
// 列出进程极其占用的端口，且包含 80
netstat -ano | findstr 8081
// 显示如下所示，pid进程号为15888
C:\Users\fwx935785>netstat -ano | findstr 8081
  TCP    0.0.0.0:8081           0.0.0.0:0              LISTENING       15888
  TCP    [::]:8081              [::]:0                 LISTENING       15888
```

2. 执行杀死命令

```powershell
taskkill -PID <进程号> -F //强制关闭某个进程
// 杀死pid为15888的进程
taskkill -PID 15888 -F 
```

