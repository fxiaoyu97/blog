#  map、string、json互转
1. 导包

```xml
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>fastjson</artifactId>
    <version>1.2.72</version>
</dependency>
```

2. 示例

```java
Map<String, Object> map = new HashMap<String, Object>();

// Map转JSON 
JSONObject json = new JSONObject(map);

// Map转String 
String s = JSONObject.toJSONString(map);

/**************************************************/
JSONObject json = new JSONObject();

// JSON转String
String str = json.toJSONString();

// JSON转Map
Map<String, Object> map = (Map<String, Object>)json;

// String转JSON
String str = "{\"username\":\"admin\",\"qwewqe\":\"123\"}";
JSONObject json = JSONObject.parseObject(str);

// String转Map
Map<String, Object> jobParams = JSON.parseObject(str);

```
