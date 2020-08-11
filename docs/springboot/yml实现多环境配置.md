# yml实现多环境配置

## 单个yml文件

```yaml
spring:
  profiles.active: dev

# 默认的profile为dev，其他环境通过指定启动参数使用不同的profile，比如：
#   测试环境：java -jar spring-boot.jar --spring.profiles.active=test
#   生产环境：java -jar spring-boot.jar --spring.profiles.active=prod
# 不同的配置之间使用 --- 实现分割
---
# 开发环境配置
spring:
  profiles: dev
  datasource:
    url: jdbc:mysql://127.0.0.1:3306/demo?useUnicode=true&characterEncoding=utf-8&useSSL=true&serverTimezone=UTC
    username: root
    password: root
    driver-class-name: com.mysql.jdbc.Driver
server:
  port: 8080
---
# 测试环境配置
spring:
  profiles: test
  datasource:
    url: jdbc:mysql://localhost:3306/demo?useUnicode=true&characterEncoding=utf-8&useSSL=true&serverTimezone=UTC
    username: root
    password: test
    driver-class-name: com.mysql.jdbc.Driver
server:
  port: 88
---
# 生产环境配置
spring:
  profiles: prod
  datasource:
    url: jdbc:mysql://localhost:3306/demo?useUnicode=true&characterEncoding=utf-8&useSSL=true&serverTimezone=UTC
    username: root
    password: prod
    driver-class-name: com.mysql.jdbc.Driver
```



## 多个yml文件

如果是有多个配置文件，命名如下所示：

```
application.yml
application-dev.yml
application-test.yml
```

在`application.yml`文件中选择需要使用的配置文件，当两个配置文件中存在相容配置属性时，`application.yml`中的配置会被覆盖掉。

```yaml
spring:
  profiles:
    active: dev # 需要使用的配置文件的后缀
```

