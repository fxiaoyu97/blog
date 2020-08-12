# springboot日期参数前后台转换问题

客户端往服务端请求的过程中，传输数据一般为json格式，如果服务端的时间属性设置为date类型，那么就会抛出异常：` Failed to convert property value of type 'java.lang.String' to required type 'java.util.Date'`

## 客户端日期字符串转换成date类型

使用`@DateTimeFormat`注解在实体类的字段上。时间的格式可以十分灵活的定义，但是每个需要转换的字段都要家注解。

```java
// pattern写时间格式
@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
private Date createTime;
```

## 服务器端返回给客户端的指定格式日期 

使用` @JsonFormat  `在实体类字段上。时间格式也可以灵活的设置

```java
@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
private Date createTime;
```

也可以在yml文件中进行配置

```yaml
spring:
  jackson:
    date-format: yyyy-MM-dd HH:mm:ss
    time-zone: GMT+8
```

------

两个注解可以同时在一个属性上使用，只是控制的范围不一样，两个注解所属的包也是不一样的。需要注意两点：

- **`@JsonFormat`控制服务端到客户端的时间格式**
- **`@DataFormat`控制客户端到服务端的时间格式**
