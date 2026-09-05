# Appendix 1 — Python Built-in Functions

A practical reference of Python built-in functions.

## 1. Input / Output

| Function  | Purpose         | Example             |
|-----------|-----------------|---------------------|
| `input()` | Read user input | `x = input()`       |
| `print()` | Display output  | `print(x)`          |
| `open()`  | Open a file     | `f = open("a.txt")` |

## 2. Type Conversion

| Function      | Purpose                     | Example                     |
|---------------|-----------------------------|-----------------------------|
| `int()`       | Convert to integer          | `int("42")`                 |
| `float()`     | Convert to float            | `float("3.14")`             |
| `str()`       | Convert to string           | `str(42)`                   |
| `bool()`      | Convert to Boolean          | `bool(1)`                   |
| `list()`      | Convert to list             | `list("abc")`               |
| `tuple()`     | Convert to tuple            | `tuple([1, 2])`             |
| `set()`       | Convert to set              | `set([1, 2, 2])`            |
| `dict()`      | Create a dictionary         | `dict(a=1)`                 |
| `complex()`   | Create a complex number     | `complex(2, 3)`             |
| `bytes()`     | Create bytes                | `bytes("abc", "utf-8")`     |
| `bytearray()` | Create a mutable byte array | `bytearray("abc", "utf-8")` |

## 3. Numbers and Mathematics

| Function   | Purpose                       |
|------------|-------------------------------|
| `abs()`    | Absolute value                |
| `pow()`    | Exponentiation                |
| `round()`  | Round a number                |
| `divmod()` | Return quotient and remainder |
| `sum()`    | Sum values                    |
| `min()`    | Find the minimum              |
| `max()`    | Find the maximum              |

### Examples

```python
abs(-10)           # 10
pow(2, 3)          # 8
round(3.14159, 2)  # 3.14
divmod(17, 5)      # (3, 2)
sum([1, 2, 3])     # 6
```

### Important `math` module functions, not built-in, though good to know at this point.

- math.floor()
- math.ceil()
- math.trunc()
- math.sqrt()
- math.factorial()
- math.gcd()
- math.lcm()
- math.fabs()
- math.fmod()

## 4. Iteration and Sequences

| Function     | Purpose                                    |
|--------------|--------------------------------------------|
| `len()`      | Return number of elements                  |
| `range()`    | Generate an integer sequence               |
| `enumerate()`| Iterate with index and value               |
| `zip()`      | Combine multiple iterables                 |
| `iter()`     | Return an iterator                         |
| `next()`     | Get the next item from an iterator         |
| `reversed()` | Return a reverse iterator                  |
| `sorted()`   | Return a sorted list                       |
| `all()`      | Check whether all values are truthy        |
| `any()`      | Check whether at least one value is truthy |

### Examples

```python
len([10, 20, 30])
# 3

list(range(5))
# [0, 1, 2, 3, 4]

list(enumerate(["a", "b"]))
# [(0, "a"), (1, "b")]

list(zip([1, 2], ["a", "b"]))
# [(1, "a"), (2, "b")]

sorted([3, 1, 2])
# [1, 2, 3]

all([True, True, True])
# True

any([False, False, True])
# True
```

## 5. Strings and Character Operations

| Function   | Purpose                                       |
|------------|-----------------------------------------------|
| `ord()`    | Convert a character to its Unicode code point |
| `chr()`    | Convert a Unicode code point to a character   |
| `ascii()`  | Return an ASCII representation                |
| `repr()`   | Return an official/debug representation       |
| `format()` | Format a value                                |

### Examples

```python
ord("A")
# 65

chr(65)
# 'A'

repr("hello")
# "'hello'"
```

## 6. Object and Type Inspection

| Function       | Purpose                                          |
|----------------|--------------------------------------------------|
| `type()`       | Get an object's type                             |
| `isinstance()` | Check whether an object is an instance of a type |
| `issubclass()` | Check class inheritance                          |
| `id()`         | Return an object's identity                      |
| `callable()`   | Check whether an object is callable              |
| `hash()`       | Return an object's hash value                    |

### Examples

```python
type(10)
# <class 'int'>

isinstance(10, int)
# True

callable(print)
# True
```

## 7. Object Attributes and Inspection

| Function    | Purpose                           |
|-------------|-----------------------------------|
| `getattr()` | Get an object's attribute         |
| `setattr()` | Set an object's attribute         |
| `hasattr()` | Check whether an attribute exists |
| `delattr()` | Delete an object's attribute      |
| `vars()`    | Return an object's `__dict__`     |
| `dir()`     | List available attributes         |


## 8. Functional Programming

| Function   | Purpose                              |
|------------|--------------------------------------|
| `map()`    | Apply a function to each element     |
| `filter()` | Keep elements satisfying a condition |
| `zip()`    | Combine multiple iterables           |

### Examples

```python
list(map(lambda x: x * 2, [1, 2, 3]))
# [2, 4, 6]

list(filter(lambda x: x > 2, [1, 2, 3, 4]))
# [3, 4]
```

## Important Distinction

Built-in functions are different from methods of built-in types.

For example:

```python
len(items)       # built-in function
items.append(x)  # list method

sum(items)       # built-in function
items.sort()     # list method

dict(items)      # built-in function
d.get("key")     # dictionary method
```

The built-in functions above should be studied alongside a separate reference for **built-in type methods** such as:

- `str.split()`
- `str.strip()`
- `str.replace()`
- `list.append()`
- `list.extend()`
- `list.pop()`
- `list.sort()`
- `dict.get()`
- `dict.keys()`
- `dict.values()`
- `dict.items()`
- `set.add()`
- `set.remove()`

Refer [Appendix 2](./Appendix%202%20-%20Built-in%20Type%20Methods) for Built-in Type Methods.