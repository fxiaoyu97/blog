# 如何优雅的读取yml配置文件？

## 基础语法

1. 数据通过缩进表示层级关系
2. 缩进使用空格，空格个数不重要，但是同一层级的数据必须左对齐
3. 区分大小写
4. 数值和冒号之间使用空格隔开，`名称: 值`
5. 注释使用`#`，只能单行注释

## 数据格式

1. 数字、字符串、`boolean`等

```yaml
server:
  port: 8080
```

1. 数组

```yaml
project:
  configs:
    - Name: server-user # 服务名
      Ip: 192.168.2.136 # 请求的IP地址

    - Name: server-order # 服务名
      Ip: 192.168.2.137 # 请求的IP地址
```

1. Map集合

```yaml
project:
  configs:
    - urls:
        key1: val1
        key2: val2
```

## 获取步骤

1. 创建上述配置文件对应的实体类，获取peoject下的配置文件信息，封装成对象。首先添加注解`@ConfigurationProperties(prefix = "project") `和`@Component`，`prefix`的值需要全部使用小写字母，不使用`@Component`注解，不能使用`@Autowired`获取对象。

```java
@Component
@ConfigurationProperties(prefix = "project")
public class TestProperties {
    /**
     * 配置信息集合
     */
    private List<Configs> configs;

    @Data
    public static class Configs {

        /**
         * 服务名
         */
        private String name;

        /**
         * ip地址
         */
        private String ip;

        /**
         * 集合
         */
        private Map<String, String> urls;
    }
}
```

如果无法正常从yaml中获取相应的key和value时，给key和value加上单引号试试。