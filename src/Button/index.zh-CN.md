---
title: Button 按钮
group:
  path: /
nav:
  title: 组件
  path: /components
---

# Button 按钮

按钮用于开始一个即时操作。

## 按钮类型

按钮分为四种类型 `type`，默认是 `default`。

`default` | `primary` | `info` | `link`

<code src="./demo/type.tsx" />

## 不可用状态

添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

<code src="./demo/disabled.tsx" />

## 按钮尺寸

尺寸 `size` 分为大、中、小，默认尺寸是中。

`lg` | `md` | `sm`

<code src="./demo/size.tsx" />

## API

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`type` > `size` -> `disabled`。

按钮的属性说明如下：

| 属性     | 说明                           | 类型                                       | 默认值    |
| -------- | ------------------------------ | ------------------------------------------ | --------- |
| type     | 设置按钮类型                   | `default` \| `primary` \| `info` \| `link` | `default` |
| size     | 设置按钮大小                   | `lg` \| `md` \| `sm`                       | `md`      |
| disabled | 按钮失效状态                   | boolean                                    | false     |
| href     | 点击跳转的地址，用于 type=link | string                                     | -         |
| htmlType | 设置 `button` 原生的 `type` 值 | `button` \| `submit` \| `reset`            | `button`  |
| onClick  | 点击按钮时的回调               | (event) => void                            | -         |

支持原生 button 的其他所有属性。
