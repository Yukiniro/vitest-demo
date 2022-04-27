# 基于 `Vitest` 的单元测测试

## 什么是单元测试？

在计算机编程中，单元测试（英语：Unit Testing）又称为模块测试 [来源请求] ，是针对程序模块（软件设计的最小单位）来进行正确性检验的测试工作。
<br />
程序单元是应用的最小可测试部件。在过程化编程中，一个单元就是单个程序、函数、过程等；对于面向对象编程，最小单元就是方法，包括基类（超类）、抽象类、或者派生类（子类）中的方法。
<br>
简单来说就是通过拆分程序模块进行输出/输出验证来测试程序的运行准确率来发现程序可能遇到的问题，从而提升其稳定性。

## 为什么需要单元测试？

在开发阶段或者上线前发现相关问题，从而提高代码质量和可维护性

## 现阶段如何进行代码测试？

当前进行项目开发时通常使用 `console.log` 或者手动交互的形式进行代码测试，但是都是瞬间完成的，没有办法复用测试用例，也不能输出测试结果。

## 理想的代码测试流程

- 根据需求编写测试用例
- 开发过程中对单一模块或者函数进行测试
- 输出测试覆盖率
- 自动化测试

## `Vitest` 是什么？

Vitest 是一个由 Vite 提供支持的极速单元测试框架。

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

## 安装

通过运行下列命令进行安装

```shell
npm i vitest@latest -D
```

or

```shell
pnpm add vitest@latest -D
```

## 基本使用

安装 `vitest` 后在根目录下创建 `__test__` 文件夹（ `vitest` 会自动读取 `__test__`、`test` 文件夹或者文件名字含有 `.test.` 的文件进行测试），然后在文件夹内创建一个 `1.test.ts` 文件，内容如下：

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

然后运行 `npx vitest` 命令执行测试脚本，下列是控制台输出的测试结果，会显示对哪些文件进行了测试，测试通过的情况及运行时间。

```shell
RERUN  __test__/1.test.ts

√ __test__/1.test.ts (3)

Test Files  1 passed (1)
     Tests  3 passed (3)
      Time  5ms


PASS  Waiting for file changes...
```

在进行单元测试测试时的基本使用思路时：对测试模块进行断言 -> 指定<strong>期望值</strong> -> <strong>期望值</strong>和<strong>实际值</strong>进行比较 -> 输出测试结果

<br />

在上述代码中可以看出，`sayHello` 函数便是我们需要进行测试的模块， `test` 函数是单个测试用例，`describe` 可以组织多个测试用例，`expect` 是对 `sayHello` 进行断言，`toBe` 则是用来比较的方法（另外还有 `toBeCloseTo`，`toEqual` 等），`toBe` 的参数 `"Hello World"` 便是期望值。

## 基本测试

```ts
import { test, expect } from "vitest";

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
  expect(me).toEqual({ name: "Yukiro", age: 18 });
});

test.skip("skip test", () => {
  // do something
});
```

## DOM 测试

`vitest` 内置了对 `happy-dom` 和 `jsdom` 的支持，不过这两个库都需要额外安装，以 `happy-dom` 举例。首先是安装相关库。

```
pnpm add happy-dom @testing-library/dom @testing-library/jest-dom -D
```

`@testing-library/dom` 提供对 `dom` 的查询，`@testing-library/jest-dom` 提供对 `expect` 接口的增强。

```ts
/**
 * @vitest-environment happy-dom
 */

import { Window } from "happy-dom";
import { test, expect } from "vitest";
import { getByText } from "@testing-library/dom";
import matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

function sayHello(dom: Element) {
  dom.innerHTML = "hello world";
}

const window = new Window();
const document = window.document;
document.body.innerHTML = '<div class="container"></div>';

const container = document.querySelector(".container");
sayHello(container as unknown as Element);

// passed
test("sayHello toBe", () => {
  expect(container.innerHTML).toBe("hello world");
});

// passed
test("sayHello toContainHTML", () => {
  // toContainHTML 由 @testing-library/jest-dom/matchers 提供
  expect(container).toContainHTML("hello world");
});

// passed
test("sayHello getByText", () => {
  // getByText 由 @testing-library/dom 提供
  expect(
    getByText(container as unknown as HTMLElement, "hello world")
  ).not.toBeEmptyDOMElement();
});
```

上述代码中的 `@vitest-environment happy-dom` 是配置代码，指定当前文件的测试环境，也可以在 `vitest.config.js` (全局配置)进行配置

```js
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "happy-dom", // happy-dom, jsdom, node
  },
});
```

## 组件测试

## Mock 测试

## 文章参考

- [十分鐘上手前端單元測試 - 使用 Jest](https://www.casper.tw/development/2020/02/02/jest-intro/)
- [vitest 体验（兼容 jest api）](https://zhuanlan.zhihu.com/p/450834753)
