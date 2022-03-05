## 实现水平居中的方法

## position+margin

## position+tranform

```css
#box {
    width: 300px;
    height: 300px;
    background: #ddd;
    position: relative;
}
#child {
    background: orange;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
}
```

## flex+align-items

```css
#box {
    width: 300px;
    height: 300px;
    background: #ddd;
    display: flex;
    align-items: center;
}
```

## 绝对定位结合margin: auto

```css
#box {
    width: 300px;
    height: 300px;
    background: #ddd;
    position: relative;
}
#child {
    width: 200px;
    height: 100px;
    background: orange;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    line-height: 100px;
}

作者：呆里呆气1
链接：https://juejin.cn/post/6844903550909153287
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

## 直接均分定位

## flex+flex-direction+justify-content

 flex+flex-direction+justify-content

```css
display: flex;
    flex-direction: column;
    justify-content: center;
```

## line-height

## `line-height` 和 `vertical-align` 对图片进行垂直居中

## 使用 `display: table;` 和 `vertical-align: middle;` 对容器里的文字进行垂直居中

```css
#child {
    display: table-cell;
    vertical-align: middle;
}
```

## 使用 CSS Grid

```css
#box {
    width: 300px;
    height: 300px;
    display: grid;
}
.two {
    background: orange;
}
.one, .three {
    background: skyblue;
}

作者：呆里呆气1
链接：https://juejin.cn/post/6844903550909153287
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```
