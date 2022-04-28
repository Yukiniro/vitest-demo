---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: /image/01.jpeg
# apply any windi css classes to the current slide
class: "text-center"
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false

drawings:
  persist: false
---

# 基于 `Vitest` 的单元测试

<span class="author">作者：张豪</span>

<style>
  .author {
    position: absolute;
    right: 40px;
    bottom: 40px;
  }
</style>

---
layout: image-right
image: /image/02.jpeg
---

# 什么是单元测试？

<br />

<v-click>

在计算机编程中，单元测试（英语：Unit Testing）又称为模块测试 ，是针对程序模块（软件设计的最小单位）来进行正确性检验的测试工作。

</v-click>

<v-click>

程序单元是应用的最小可测试部件。在过程化编程中，一个单元就是单个程序、函数、过程等；对于面向对象编程，最小单元就是方法，包括基类（超类）、抽象类、或者派生类（子类）中的方法。

</v-click>

<v-click>

简单来说就是通过拆分程序模块进行输出/输出验证来测试程序的运行准确率，可以发现程序可能遇到的问题，从而提升其稳定性。

</v-click>

---
layout: center
---

# 为什么需要单元测试？

<br />
<v-click>

在开发阶段或者上线前发现相关问题，从而提高代码质量和可维护性

</v-click>

---
layout: center
---

# 现阶段如何进行代码测试？

<br />

<v-click>

当前进行项目开发时通常使用 `console.log` 或者手动交互的形式进行代码测试，但是都是瞬间完成的，没有办法复用测试用例，也不能输出测试结果。

</v-click>

---
layout: image-left
image: /image/03.jpeg
---

# 理想的代码测试流程

<v-clicks>

- 根据需求编写测试用例
- 开发过程中对单一模块或者函数进行测试
- 输出测试覆盖率
- 自动化测试

</v-clicks>

---
layout: image-right
image: /image/04.jpeg
---

# `Vitest` 是什么？

<v-click>

[Vitest](https://vitest.dev/) 是一个由 Vite 提供支持的极速单元测试框架。

</v-click>

<v-clicks>

- 与 Vite 通用的配置、转换器、解析器和插件。
- 使用你的应用程序中的相同配置来进行测试！
- 智能文件监听模式，就像是测试的 HMR！
- 支持测试 Vue、React、Lit 等框架中的组件。
- 开箱即用的 TypeScript / JSX 支持
- ESM 优先，支持模块顶级 await
- 通过 tinypool 使用 Worker 线程尽可能多地并发运行
- 套件和测试的过滤、超时、并发配置
- Jest 的快照功能
- 内置 Chai 进行断言 + 与 Jest expect 语法兼容的 API
- 内置用于对象模拟(Mock)的 Tinyspy
- 使用 jsdom 或 happy-dom 用于 DOM 模拟
- 通过 c8 来输出代码测试覆盖率
- 类似于 Rust 语言的 源码内联测试

</v-clicks>

<style>
  li {
    font-size: 0.8rem;
  }
</style>

---
layout: center
---

# 如何使用 `Vitest`

<v-click>

#### 安装

通过运行下列命令进行安装

```shell
npm i vitest@latest -D
```

or

```shell
pnpm add vitest@latest -D
```

</v-click>

<v-click>

<br />

#### 创建测试文件

安装 `vitest` 后在根目录下创建 `__test__` 文件夹（ `vitest` 会自动读取 `__test__`、`test` 文件夹或者文件名字含有 `.test.` 的文件进行测试），然后在文件夹内创建一个 `1.test.ts` 文件，内容如下：

</v-click>

---
layout: two-cols
---

<v-click>

```ts
import { describe, test, expect } from "vitest";

function sayHello() {
  return "Hello World";
}

test("test sayHello", () => {
  expect(sayHello()).toBe("Hello World");
});

describe("test", () => {
  test("test 1", () => {
    expect(1).toBe(1);
  });
  test("test 2", () => {
    expect(1).not.toBe(1);
  });
});
```

</v-click>

::right::

<v-click>

然后运行 `npx vitest` 命令执行测试脚本，下列是控制台输出的测试结果，会显示对哪些文件进行了测试，测试通过的情况及运行时间。

</v-click>

<v-click>

```shell
RERUN  __test__/1.test.ts

√ __test__/1.test.ts (3)

Test Files  1 passed (1)
     Tests  3 passed (3)
      Time  5ms


PASS  Waiting for file changes...
```

</v-click>

---
layout: center
---

# 在进行单元测试测试时的基本使用思路

<v-clicks>

- 对测试模块进行断言
- 指定<strong>期望值</strong>
- <strong>期望值</strong>和<strong>实际值</strong>进行比较
- 输出测试结果

</v-clicks>

---
layout: center
---

- 基本测试
- DOM 测试
- 组件测试
- 快照测试

<style>
li {
  font-size: 2.4rem;
}
</style>

---
layout: center
---

# 基本测试

对基础函数、代码逻辑、单元模块进行测试

---

```ts
import { test, expect, describe } from "vitest";

describe("slidev-default", () => {
  // passed
  test("toBeNull", () => {
    expect(null).toBeNull();
  });

  // passed
  test("toBeNull", () => {
    expect(true).not.toBeNull();
  });

  // passed
  test("toBeTypeOf", () => {
    expect("Hello").toBeTypeOf("string");
    expect(100).toBeTypeOf("number");
  });

  // passed
  test("toEqual", () => {
    expect([1, 2, 3]).toEqual([1, 2, 3]);
    const person = { name: "Yukiro", age: 18 };
    expect(person).toEqual({ name: "Yukiro", age: 18 });
  });
});
```

---
layout: center
---

# DOM 测试

对 DOM 结构、样式等进行测试

---

```ts
/**
 * @vitest-environment happy-dom
 */

function sayHello(dom: Element) {
  dom.innerHTML = "hello world";
}

const window = new Window();
const document = window.document;
document.body.innerHTML = '<div class="container"></div>';

const container = document.querySelector(".container");
sayHello(container as unknown as Element);
test("sayHello toBe", () => {
  expect(container.innerHTML).toBe("hello world");
});

test("sayHello toContainHTML", () => {
  // toContainHTML 由 @testing-library/jest-dom/matchers 提供
  expect(container).toContainHTML("hello world");
});

test("sayHello getByText", () => {
  // getByText 由 @testing-library/dom 提供
  expect(
    getByText(container as unknown as HTMLElement, "hello world")
  ).not.toBeEmptyDOMElement();
});
```

<style>
  .slidev-layout {
    padding: 0;
  }
</style>

---
layout: center
---

# 组件测试

对组件逻辑、渲染进行测试

---
layout: two-cols
---

<style>
  .slidev-layout {
    padding: 80px 10px;
  }
  .col-left, .col-right {
  margin: 0 10px;
}
</style>

```ts
import React from "react";

interface ButtonProps {
  text?: string;
  onClick?: () => void;
}

function Button(props: ButtonProps) {
  const { text, onClick } = props;
  return <button onClick={onClick}>{text}</button>;
}

export default Button;
```

::right::

```ts
describe("Button", () => {
  test("test text", () => {
    const { rerender } = render(<Button text="button 1" />);
    expect(screen.getByRole("button")).toHaveTextContent("button 1");
    rerender(<Button text="button 2" />);
    expect(screen.getByRole("button")).toHaveTextContent("button 2");
  });

  test("test onClick", async () => {
    const onClickSpy = vi.fn(() => void 0);
    render(<Button text="button" onClick={onClickSpy} />);
    fireEvent.click(screen.getByRole("button"));
    await waitFor(() => {
      expect(onClickSpy).toHaveBeenCalled();
    });
  });
});
```

---
layout: center
---

# 快照测试

通过不同时间收集的快照进行测试

---
layout: center
---

快照测试 1

```ts
test("Button snapshot", () => {
  render(<Button text="button 1" />);
  expect(screen.getByRole("button")).toMatchSnapshot();
});
```

<v-click>

```shell
<button>
  button 1
</button>
```

</v-click>

<v-click>

快照测试 2

```ts
test("Button snapshot", () => {
  render(<Button text="button 2" />);
  expect(screen.getByRole("button")).toMatchSnapshot();
});
```

</v-click>

<v-click>

```shell
<button>
  button 2
</button>
```

</v-click>

---
layout: center
---

# 测试覆盖率

---

`vitest` 的测试覆盖率输出需要安装 `c8`，通过下列命令进行安装

```shell
npm i c8 -D
```

or

```shell
pnpm add c8 -D
```

<v-click>

然后执行下列命令生成测试覆盖率

```shell
npx vitest --coverage	
```

</v-click>

<v-click>

```shell
------------|---------|----------|---------|---------|-------------------
File        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------|---------|----------|---------|---------|-------------------
All files   |     100 |      100 |     100 |     100 |                   
 basic.ts   |     100 |      100 |     100 |     100 |                   
 button.tsx |     100 |      100 |     100 |     100 |                   
 index.ts   |     100 |      100 |     100 |     100 |                   
------------|---------|----------|---------|---------|-------------------
```

</v-click>

---
layout: center
---

# 文章参考

- [十分鐘上手前端單元測試 - 使用 Jest](https://www.casper.tw/development/2020/02/02/jest-intro/)
- [vitest 体验（兼容 jest api）](https://zhuanlan.zhihu.com/p/450834753)
