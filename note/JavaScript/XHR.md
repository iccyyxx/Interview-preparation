## XMLHttpRequest请求

XHR为发送服务器请求和获取响应提供接口，这个接口可以实现异步获取数据，页面不用刷新

### 使用

发送一个 HTTP 请求，需要创建一个 `XMLHttpRequest` 对象，打开一个 URL，最后发送请求。当所有这些事务完成后，该对象将会包含一些诸如响应主体或 [HTTP status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) 的有用信息。

#### 1. 通过XMLHttpRequest构造函数原生支持XHR对象

```javascript
let xhr = new XMLHttpRequest();
```

#### 2. 调用open函数为发送请求做准备

```javascript
xhrReq.open(method, url, async[, user, password]);
```

**参数：**

`method`

要使用的HTTP方法，比如「GET」、「POST」、「PUT」、「DELETE」、等。

`url`

一个[`DOMString`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMString)表示要向其发送请求的URL。**只能访问同源URL**

`async` 可选

一个可选的布尔参数，表示是否异步执行操作，默认为`true`。如果值为`false`，`send()`方法直到收到答复前不会返回。如果`true`，已完成事务的通知可供事件监听器使用。如果`multipart`属性为`true`则这个必须为`true`，否则将引发异常。

>  **注意：** 避免在主线程发送同步请求

`user` 可选

可选的用户名用于认证用途；默认为`null`。

`password` 可选

可选的密码用于认证用途，默认为`null`。

#### 3.  XMLHttpRequest.send()发送请求

`XMLHttpRequest.send()` 方法用于发送 HTTP 请求。

- 如果是异步请求（默认为异步请求），则此方法会在请**求发送后立即返回**；

- 如果是同步请求，则此方法**直到响应到达后才会返回**

- 如果没有使用 [`setRequestHeader()`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/setRequestHeader "setRequestHeader()") 方法设置 [`Accept`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept) 头部信息，则会发送带有 `"* / *"` 的[`Accept`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept) 头部。

```javascript
XMLHttpRequest.send(body)
```

##### [参数](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/send#%E5%8F%82%E6%95%B0 "Permalink to 参数")

`body` 可选

如果body没有指定值，则默认值为 `null` .

如果请求方法是 GET 或者 HEAD，则应将请求主体设置为 null。

#### 4.响应请求

收到响应后，XHR对象的以下属性会被填充

- `responseText`:在一个请求被发送后，从服务器端返回文本。

- `responseXML`：默认是当作“text / xml” 来解析。当 [`responseType`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/responseType "responseType") :设置为 “document” 并且请求已异步执行时，响应将被当作 “text / html” 来解析。

##### 状态码说明

上述代码中，有两处状态码需要说明。`xhr.readyState`是浏览器判断请求过程中各个阶段的，`xhr.status`是 HTTP 协议中规定的不同结果的返回状态说明。

`xhr.readyState`的状态码说明：

- 0 -代理被创建，但尚未调用 `open()` 方法。
- 1 -`open()` 方法已经被调用。
- 2 -`send()` 方法已经被调用，并且头部和状态已经可获得。
- 3 -下载中， `responseText` 属性已经包含部分数据。
- 4 -下载操作已完成

> 题目：HTTP 协议中，response 的状态码，常见的有哪些？

`xhr.status`即 HTTP 状态码，有 `2xx` `3xx` `4xx` `5xx` 这几种，比较常用的有以下几种：

- `200` 正常

- `3xx`
  
  - `301` 永久重定向。如`http://xxx.com`这个 GET 请求（最后没有`/`），就会被`301`到`http://xxx.com/`（最后是`/`）
  - `302` 临时重定向。临时的，不是永久的
  - `304` 资源找到但是不符合请求条件，不会返回任何主体。如发送 GET 请求时，head 中有`If-Modified-Since: xxx`（要求返回更新时间是`xxx`时间之后的资源），如果此时服务器 端资源未更新，则会返回`304`，即不符合要求

- `404` 找不到资源

- `5xx` 服务器端出错了

##### readyState

- 每次 `readyState` 从一个值变成另一个值，都会触发 `readystatechange` 事件;

- `onreadystatechange` 事件处理程序应该在调用 `open()`之前赋值

- `onreadystatechange` 事件处理程序不会收到 `event`
  对象

```javascript
let xhr = new XMLHttpRequest(); 
xhr.onreadystatechange = function() { 
 if (xhr.readyState == 4) { 
 if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) { 
 alert(xhr.responseText); 
 } else { 
 alert("Request was unsuccessful: " + xhr.status); 
 } 
 } 
}; 
xhr.open("get", "example.txt", true); 
xhr.send(null); 
```

#### 取消异步请求

在收到响应之前如果想取消异步请求，可以调用 `abort()`方法：

```javascript
xhr.abort()
```

调用这个方法后，**XHR 对象会停止触发事件**，**并阻止访问这个对象上任何与响应相关的属性**。

中断请求后，应该取消对 XHR 对象的引用。

由于内存问题，**不推荐重用 XHR 对象**。

### HTTP 头部

每个 HTTP 请求和响应都会携带一些头部字段，这些字段可能对开发者有用。XHR 对象会通过一
些方法暴露与请求和响应相关的头部字段。
默认情况下，XHR 请求会发送以下头部字段。

`Accept：浏览器可以处理的内容类型。
Accept-Charset：浏览器可以显示的字符集。
Accept-Encoding：浏览器可以处理的压缩编码类型。
Accept-Language：浏览器使用的语言。
Connection：浏览器与服务器的连接类型。
Cookie：页面中设置的 Cookie。
Host：发送请求的页面所在的域。
Referer：发送请求的页面的 URI。注意，这个字段在 HTTP 规范中就拼错了，所以考虑到兼容
性也必须将错就错。（正确的拼写应该是 Referrer。）
User-Agent：浏览器的用户代理字符串。`

#### 发送额外的请求头部 setRequestHeader()

可以使用     setRequestHeader()   方法。这个方法接收两个参数：头部字段的名称和值。
为保证请求头部被发送，必须在 **open()之后、send()之前调用** 

```javascript
xhr.setRequestHeader("MyHeader", "MyValue"); 
```

#### 从XHR对象获取响应头部

```javascript
let myHeader = xhr.getResponseHeader("MyHeader"); 
let allHeaders xhr.getAllResponseHeaders();
```

### GET 请求

- 向服务器查询信息

- 在URL后面添加查询字符串参数

- 查询字符串中的每个名和值都必须使用
  encodeURIComponent()编码，所有名/值对必须以和号（&）分隔

- 可以使用以下函数将查询字符串参数添加到现有的 URL 末尾：
  
  ```javascript
  function addURLParam(url, name, value) { 
  url += (url.indexOf("?") == -1 ? "?" : "&"); 
  url += encodeURIComponent(name) + "=" + encodeURIComponent(value); 
  return url; 
  }
  ```
  
  这里定义了一个 addURLParam()函数，它接收 3 个参数：要添加查询字符串的 URL、查询参数和参数值。首先，这个函数会检查 URL 中是否已经包含问号（以确定是否已经存在其他参数）。如果没有，则加上一个问号；否则就加上一个和号。然后，分别对参数名和参数值进行编码，并添加到 URL 末尾。
  最后一步是返回更新后的 URL.
  
  使用 addURLParam()函数可以保证通过 XHR 发送请求的 URL 格式正确

### POST 请求

- 向服务器发送数据

- 要给 send()方法传入要发送的数据

- 与提交表单是不一样的。服务器逻辑需要读取原始 POST数据才能取得浏览器发送的数据。不过，可以使用 XHR 模拟表单提交。为此，第一步需要把 ContentType 头部设置为`"application/x-www-formurlencoded"`，这是提交表单时使用的内容类型。第二步是创建对应格式的字符串

- 序列号`serialize()`

- 假如没有发送 Content-Type 头部，PHP 的全局`$_POST 变量中就不会包含数据，而需要通过$HTTP_RAW_POST_DATA 来获取。`

> 注意 POST 请求相比 GET 请求要占用更多资源。从性能方面说，发送相同数量的数据，GET 请求比 POST 请求要快两倍

### XMLHttpRequest Level 2 新特性

#### FormData 类型

FormData 类型**便于表单序列化**

```javascript
let data = new FormData(); 
data.append("name", "Nicholas")

//或者
let data = new FormData(form);
```

使用 FormData 的另一个方便之处是**不再需要给 XHR 对象显式设置任何请求头部**了。XHR 对象能够识别作为 FormData 实例传入的数据类型并自动配置相应的头部。

#### 超时

```javascript
xhr.timeout = 1000; // 设置 1 秒超时
xhr.ontimeout = function() { 
 alert("Request did not return in a second."); 
}; 
```

- 表示发送请求后等待多少毫秒，如果响应不成功就中断请求

- 在给 `timeout` 属性设置了一个时间且在该时间过后没有收到响应时，XHR 对象就会触发 `timeout` 事件，调用 `ontimeout` 事件处理程序

- 如果在**超时之后访问 status 属性则会发生错误**。为做好防护，可以把检查 status 属性的代码封装在 try/catch 语句中。

#### overrideMimeType()方法

- `overrideMimeType()`方法用于重写 XHR 响应的 MIME 类型

```javascript
xhr.overrideMimeType("text/xml");
```

- 这个例子强制让 XHR 把响应当成 XML 而不是纯文本来处理。为了正确覆盖响应的 MIME 类型，必须在调用 `send()`**之前**调用 `overrideMimeType()`

## 进度事件

**Progress Events** 是 W3C 的工作草案，定义了**客户端服务器端通信**。有以下 6 个进度相关的事件。`
 loadstart：在接收到响应的第一个字节时触发。
 progress：在接收响应期间反复触发。
 error：在请求出错时触发。
 abort：在调用 abort()终止连接时触发。
 load：在成功接收完响应时触发。
 loadend：在通信完成时，且在 error、abort 或 load 之后触发。`
每次请求都会**首先触发 loadstart** 事件，之后是一个或多个 **progress** 事件，接着是 error、abort或 load 中的一个，最后以 loadend 事件结束。

### load事件

- load 事件用于替代`readystatechange` 事件

- load 事件在响应接收完成后立即触发，这样就不用检查readyState 属性了\

- onload 事件处理程序会收到一个 event 对象，其 target 属性设置为 XHR 实例，在这个实例上可以访问所有 XHR 对象属性和方法
  
  ```javascript
  let xhr = new XMLHttpRequest(); 
  xhr.onload = function() { 
   if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) { 
   alert(xhr.responseText); 
   } else { 
   alert("Request was unsuccessful: " + xhr.status); 
   } 
  }; 
  xhr.open("get", "altevents.php", true); 
  xhr.send(null);
  ```

- 只要是从服务器收到响应，无论状态码是什么，都会触发 load 事件。这意味着还需要检查 status 属性才能确定数据是否有效

### progress 事件

- 在浏览器接收数据期间，这个事件会反复触
  发

- 每次触发时，onprogress 事件处理程序都会收到 event 对象，其 target 属性是 XHR 对象,且包含 3 个额外属性：`lengthComputable`、`position`` totalSize`。其中，`lengthComputable` 是一个布尔值，表示进度信息是否可用；`position` 是接收到的字节数；`totalSize` 是响应的`ContentLength `头部定义的总字节数。有了这些信息，就可以给用户提供

- 必须在调用 open()**之前**添加 onprogress 事件处理程序

- 应用：进度条
