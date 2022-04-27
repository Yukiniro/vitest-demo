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
在计算机编程中，单元测试（英语：Unit Testing）又称为模块测试 ，是针对程序模块（软件设计的最小单位）来进行正确性检验的测试工作。

程序单元是应用的最小可测试部件。在过程化编程中，一个单元就是单个程序、函数、过程等；对于面向对象编程，最小单元就是方法，包括基类（超类）、抽象类、或者派生类（子类）中的方法。

简单来说就是通过拆分程序模块进行输出/输出验证来测试程序的运行准确率，可以发现程序可能遇到的问题，从而提升其稳定性。

---

# 为什么需要单元测试？

在开发阶段或者上线前发现相关问题，从而提高代码质量和可维护性
