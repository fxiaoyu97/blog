# Spring各版本与Java的关系

## Spring Framework版本和Java版本的对应关系

| Spring Framework版本 | Java标准版 | Java企业版           |
| -------------------- | ---------- | -------------------- |
| 1.x                  | 1.3+       | J2EE 1.3+            |
| 2.x                  | 1.4.2+     | J2EE 1.3+            |
| 3.x                  | 5+         | J2EE 1.4和 Java EE 5 |
| 4.x                  | 6+         | Java EE 6和7         |
| 5.x                  | 8+         | Java EE 7            |

版本号命名方式：主版本号.次版本号.修订号

- **主版本号：** 产品方向改变， 或者大规模 API 不兼容， 或者架构不兼容升级。
- **次版本号：** 保持相对兼容性，增加主要功能特性，影响范围极小的 API 不兼容修改。
- **修订号：** 保持完全兼容性， 修复 BUG、 新增次要功能特性等。

> **注意：** 起始版本号必须为：`1.0.0`，而不是 `0.0.1`，正式发布的类库必须先去中央仓库进行查证，使版本号有延续性，正式版本号不允许覆盖升级。如当前版本：`1.3.3`，那么下一个合理的版本号：`1.3.4` 或 `1.4.0` 或 `2.0.0`

Java5版本之前，Java的标准版叫J2SE（Java 2 Standard E），Java企业版叫J2EE。

Java1.3引入了**动态代理**特性，开始针对接口的方式来进行动态代理，对实现AOP来说很重要。

Servlet的API对应的JavaEE版本是1.3，Servlet版本是2.3版本，支持Servlet事件。

Java1.4.2版本包括常见的NIO的支持

Spring3开始引入大量的注解，需要依赖于Java5版本，Java5开始提升注解、枚举等

Spring4增加一些细节优化，注解的提升，以及利用Java8里面的API来进行提升。但是Java版本最低要求是Java 6，从这个版本，Spring Framework支持`Spring Boot 1.x`

Spring Boot 2.X是基于Spring Framework5开发的，从Spring Framework 5开始对应的是Java EE 7

## Spring对Java语言特性运用

+ Java5语法特性

| 语法特性               | spring支持版本 | 代表实现                   |
| ---------------------- | -------------- | -------------------------- |
| 注解（Annotation）     | 1.2+           | @Transactional             |
| 枚举（Enumeration）    | 1.2+           | Propagation                |
| for-each语法           | 3.0+           | AbstractApplicationContext |
| 自动装箱（AutoBoxing） | 3.0+           |                            |
| 泛型（Generic）        | 3.0+           | ApplicationListener        |

+ Java6语法特性

| 语法特性      | Spring支持版本 | 代表实现 |
| ------------- | -------------- | -------- |
| 接口 | 4.0+           | @Override |

+ Java7语法特性

| 语法特性               | Spring支持版本 | 代表实现                    |
| ---------------------- | -------------- | --------------------------- |
| Diamond语法            | 5.0+           | DefaultListableBeanFactory  |
| try-with-resources语法 | 5.0+           | ResourceBundleMessageSource |

+ Java8语法特性

| 语法特性   | Spring支持版本 | 代表实现                      |
| ---------- | -------------- | ----------------------------- |
| Lambda语法 | 5.0+           | PropertyEditorRegistrySupport |

## Spring 对JDK API的实践

关于Java各版本API的介绍可以参考 [Java核心API](/code/java/JDK核心API	"Java核心API")

+ Java 5 API之前

| API类型                   | Spring支持版本 | 代表实现                     |
| ------------------------- | -------------- | ---------------------------- |
| 反射（Reflection）        | 1.0+           | MethodMatcher                |
| Java Bean                 | 1.0+           | CachedInIntrospectionResults |
| 动态代理（Dynamic Proxy） | 1.0+           | JdkDynameicAopProxy          |

+ Java 5 API

| API类型             | Spring支持版本 | 代表实现                   |
| ------------------- | -------------- | -------------------------- |
| XML处理（DOM，SAX） | 1.0+           | XmlBeanDefinitionReader    |
| Java管理拓展（JMX） | 1.2+           | @ManagedResource           |
| Instrumentation     | 2.0+           | InstrumentationSavingAgent |
| 并发框架（J.U.C）   | 3.0+           | ThreadPoolTaskScheduler    |
| 格式化（Formatter） | 3.0+           | DateFormatter              |

`XmlBeanDefinitionReader`是Bean里面的底层API，可以把XML内容从XML配置文件读取为`BeanDefinition`

`J.U.C`是指`java.util.concurrent`

+ Java 6 API

| API类型                      | Spring支持版本 | 代表实现                          |
| ---------------------------- | -------------- | --------------------------------- |
| JDBC 4.0（JSR 221）          | 1.0+           | JdbcTemplate                      |
| Common Annotation（JSR 250） | 2.5+           | CommonAnnotationBeanPostProcessor |
| JAXB 2.0（JSR 222）          | 3.0+           | Jaxb2Marshaller                   |
| Scripting in JVM（JSR 223）  | 4.2+           | StandardScriptFactory             |
| 可拔插注解处理API（JSR）     | 5.0+           | @Indexed                          |
| Java Compilee API（JSR 199） | 5.0+           | TestCompiler（单元测试）          |

+ Java 7 API

| API类型                  | Spring支持版本 | 代表实现                |
| ------------------------ | -------------- | ----------------------- |
| Fork/Join框架（JSR 166） | 3.1+           | ForkJoinPoolFactoryBean |
| NIO 2 （JSR 203）        | 4,.0+          | PathResource            |

+ Java 8 API

| API类型                      | Spring支持版本 | 代表实现                             |
| ---------------------------- | -------------- | ------------------------------------ |
| Date and Time API（JSR 310） | 4.0+           | DateTImeContext                      |
| 可重复Annotations（JSR 337） | 4.0+           | @PropertySources                     |
| Stream API（JSR 335）        | 4.2+           | StreamConverter                      |
| CompletableFuture（J.U.C）   | 4.2+           | CompletableToListenableFutureAdapter |

