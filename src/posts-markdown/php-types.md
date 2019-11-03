---
path: /posts/php-static-types
date: '2019-11-02'
title: Static Types in PHP
tags:
  - PHP
---

Static typing is definitely having a moment in web development right now. This is especially true in front-end development circles. Technologies like [TypeScript](https://www.typescriptlang.org/) are giving web developers access to tools that were previous only available to developers working with statically typed languages such as Java or C#. A large factor in driving these innovations is that the front-end web space is becoming increasingly complex. Adding type checking makes it possible for a text editor or IDE to infer things about a code base that that would not normally be possible with dynamically typed languages.

## So What About PHP?

PHP doesn't quite have the hype around it that JavaScript and related front-end technologies have right now, but it has made impressive strides recently with respect to static typing.

### Type Hinting

The first and more widely used method is called type hinting. Type hinting has been in PHP for a long time, but it has been gradually improved upon over the years. In its first iteration back in PHP version 5.0, only class and interface names could be used as a type hint, but support was later added for arrays and primitives. A generic object type hint was added in 7.2 which really comes in handy when a parameter can be multiple types or if you're working with stdClass objects.

To define a type hint, you simply add the name of the class or primitive before a parameter name in a function definition.

```PHP
<?php

  /**
   * object, SomeClass, and int are all type hints.
   */
  function getData(object $data, SomeClass $className, int $rows) {
    // Do something useful..
  }
```

If the function above is called and a parameter does not match the defined type hint, then PHP will throw an error. This may seem like a drawback at first, but this is actually extremely helpful for catching errors early and avoiding unexpected behavior in applications.

### Declare Strict Types

A second and less known type feature of PHP is strict types. Unlike type hinting which is available by default, strict types must be manually turned on for each PHP script where type checking is needed. At the top of the PHP file, add the line declare(strict_types = 1);. This will turn on strict types and allow for type checking of a function's return value.

To add a return type check, add a colon after the closing paren on a function definition that matches the expected return type of the function. PHP will now throw an error if the function returns a value that does not match the declared returned type.

```PHP
<?php
declare(strict_types = 1);

/**
 * The 'int' before the opening bracket is a static return type.
 */
function doubleInt(int $input) : int {
  return $input * 2;
}

```

Check out the links below for more information.

[PHP Manual - Function Arguments](https://www.php.net/manual/en/functions.arguments.php#functions.arguments.type-declaration)

[PHP Wiki - RFC Scalar Types](https://wiki.php.net/rfc/scalar_type_hints_v5)






