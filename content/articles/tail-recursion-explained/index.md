---
title: Tail Recursion Explained with a Simple JavaScript Example
date: '2020-06-11T20:16:53-07:00'
---

A **recursive function** is one that calls itself until it satisfies a base case, which is a conditional statement used to break the recursion. A function has a **tail call** when its final instruction is to call another function and _do nothing else_. Combining these two concepts, we get **tail recursion**, the algorithmic technique where the calling function's last operation is to make a recursive tail call. The use of tail recursion has important implications for the call stack.

When we step into a new function, we add a frame to the call stack. This frame is what keeps track of the context of that function, like local variables. When the function completes, its frame is popped off the top of the stack. When a function calls another function which calls another, the frames begin to accumulate on top of one another in the stack until the final function evaluates and all the frames are popped off in reverse order.

You can imagine that the call stack could start getting pretty large for a recursive function. However, most modern compilers implement something called **tail call elimination**. This optimization allows them to identify tail calls, and pop the calling function's frame from the stack _before_ adding a frame for the next function call, because it is smart enough to know that it no longer has any use for the calling function. The result is a much smaller stack.

We can illustrate this concept with a common interview whiteboarding question:

> Write a function that accepts a positive integer as an argument and returns the factorial of that number.

One of the simplest solutions involves implementing a non-recursive `for` loop:

```javascript
// for loop solution

function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
```

This `for` loop counts up to the inputted number, multiplying the `result` by the current number on each iteration. Upon completing the loop, it then returns the `result`. This solution works, and runs in constant stack space, but sometimes interviewers will specify that you must use recursion.

Here's a solution that uses recursion:

```javascript
// non-tail recursive solution

function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1); // <-- not a tail call
}
```

Notice that the last statement is not just returning a function, but operating on it as well. Because of that, we have to keep track of the context of the current function’s stack frame for each iteration. We can visualize it like this:

```
factorial(8)
(8 * factorial(7))
(8 * (7 * factorial(6)))
(8 * (7 * (6 * factorial(5))))
(8 * (7 * (6 * (5 * factorial(4)))))
(8 * (7 * (6 * (5 * (4 * factorial(3))))))
(8 * (7 * (6 * (5 * (4 * (3 * factorial(2)))))))
(8 * (7 * (6 * (5 * (4 * (3 * (2 * factorial(1))))))))
(8 * (7 * (6 * (5 * (4 * (3 * (2 * 1)))))))
(8 * (7 * (6 * (5 * (4 * (3 * 2))))))
(8 * (7 * (6 * (5 * (4 * 6)))))
(8 * (7 * (6 * (5 * 24))))
(8 * (7 * (6 * 120)))
(8 * (7 * 720))
(8 * 5040)
--> 40320
```

The space complexity in this case is O(n) — the larger the input, the more stack space required to evaluate the final result. That's worse than the `for` loop above and could quickly cause a stack overflow.

With tail recursion, you can avoid this by simply returning a recursive call and passing the accumulator into it as an argument:

```javascript
// tail recursive solution

function factorial(num, acc = 1) {
  if (num === 1) {
    return acc;
  }
  return factorial(num - 1, acc * num); // <-- tail call
}
```

We can visualize it like this:

```
factorial(8)
factorial(7, 8)
factorial(6, 56)
factorial(5, 336)
factorial(4, 1680)
factorial(3, 6720)
factorial(2, 20160)
factorial(1, 40320)
--> 40320
```

Notice the lack of nesting here compared to the non-tail recursive example. Because this implementation takes advantage of tail call optimization, it uses constant stack space, so we've improved the space complexity from O(n) to O(1), and steered ourselves clear of any potential stack overflow issues.

### More Reading:

- ["Tail Recursion." Functional Programming in OCaml](https://www.cs.cornell.edu/courses/cs3110/2019sp/textbook/data/tail_recursion.html)
- [Stack Overflow: What is tail call optimization?](https://stackoverflow.com/questions/310974/what-is-tail-call-optimization)