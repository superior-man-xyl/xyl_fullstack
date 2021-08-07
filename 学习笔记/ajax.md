# ajax

- XMLHttpRequest

```js
const xhr = new XMLHttpRequest();
xhr.open("POST", "/login", true); //第三个参数为true即表示异步，false表示为同步
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      //表示成功，http状态码
      alert(xhr.responseText); //只有成功了才能拿到responseText
    }
  }
};
const postDate = {
  name: "sane",
  passWord: "xxx",
};
xhr.send(JSON.stringify(postDate));
```
