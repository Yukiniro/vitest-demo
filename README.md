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

## 使用

```javascript
function sayHello() {
  return "Hello World";
}

test("hello world", () => {
  expect(sayHello()).toBe("Hello World");
});
```

在进行单元测试测试时的基本使用思路时：对测试模块进行断言 -> 收集<strong>期望值</strong> -> <strong>期望值</strong>和<strong>实际值</strong>进行比较 -> 输出测试结果

<br />

在上述代码中可以看出，`sayHello` 函数便是我们需要进行测试的模块，`test` 函数是单个测试用例，`expect` 是对 `sayHello` 进行断言，`toBe` 则是用来比较的方法（另外还有 `toBeCloseTo`，`toEqual` 等），`toBe` 的参数 `"Hello World"` 便是期望值，运行 `npx vitest run` 执行测试并查看结果。

```shell
 √ __test__/1.test.ts (1)

Test Files  1 passed (1)
     Tests  1 passed (1)
      Time  901ms (in thread 2ms, 45034.73%)
```
