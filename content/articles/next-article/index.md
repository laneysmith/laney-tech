---
title: Next Article
date: '2020-07-01T12:18:33-07:00'
---

The space complexity in this case is O(n) — the larger the input, the more stack space required to evaluate the final result. That's worse than the `for` loop above and could quickly cause a stack overflow.

With tail recursion, you can avoid this by simply returning a recursive call and passing the accumulator into it as an argument.