# Appendix 2 — Built-in Type Methods

A practical reference of methods provided by Python's built-in.

---

## 1. String (`str`) Methods

Strings are immutable. String methods generally return a **new string** rather than modifying the original.

### Searching and Checking

| Method         | Purpose                                       | Example                    |
|----------------|-----------------------------------------------|----------------------------|
| `find()`       | Find first occurrence; returns `-1` if absent | `"hello".find("l")` → `2`  |
| `rfind()`      | Find last occurrence                          | `"hello".rfind("l")` → `3` |
| `index()`      | Find first occurrence; raises error if absent | `"hello".index("e")` → `1` |
| `rindex()`     | Find last occurrence; raises error if absent  | `"hello".rindex("l")` → `3`|
| `count()`      | Count occurrences                             | `"hello".count("l")` → `2` |
| `startswith()` | Check prefix                                  | `"hello".startswith("he")` |
| `endswith()`   | Check suffix                                  | `"hello".endswith("lo")`   |

### Case Conversion

| Method         | Purpose                    |
|----------------|----------------------------|
| `lower()`      | Convert to lowercase       |
| `upper()`      | Convert to uppercase       |
| `capitalize()` | Capitalize first character |
| `title()`      | Capitalize each word       |
| `swapcase()`   | Swap uppercase/lowercase   |

```python
"Hello World".lower()
# "hello world"

"hello world".upper()
# "HELLO WORLD"

"hello world".title()
# "Hello World"
```

### Whitespace

| Method     | Purpose                            |
|------------|------------------------------------|
| `strip()`  | Remove leading/trailing characters |
| `lstrip()` | Remove leading characters          |
| `rstrip()` | Remove trailing characters         |

```python
"  hello  ".strip()
# "hello"
```

### Splitting and Joining

| Method         | Purpose                     |
|----------------|-----------------------------|
| `split()`      | Split string into a list    |
| `rsplit()`     | Split from the right        |
| `splitlines()` | Split at line boundaries    |
| `join()`       | Join an iterable of strings |

```python
"a,b,c".split(",")
# ["a", "b", "c"]

"-".join(["2026", "09", "05"])
# "2026-09-05"
```

### Replacing and Formatting

| Method         | Purpose                |
|----------------|------------------------|
| `replace()`    | Replace occurrences    |
| `format()`     | Format a string        |
| `format_map()` | Format using a mapping |

```python
"hello world".replace("world", "Python")
# "hello Python"

"Hello, {}!".format("Kishor")
# "Hello, Kishor!"
```

### Character Classification

| Method        | Purpose                               |
|---------------|---------------------------------------|
| `isalpha()`   | All characters are alphabetic         |
| `isdigit()`   | All characters are digits             |
| `isdecimal()` | All characters are decimal characters |
| `isalnum()`   | All characters are alphanumeric       |
| `isspace()`   | All characters are whitespace         |
| `islower()`   | All cased characters are lowercase    |
| `isupper()`   | All cased characters are uppercase    |
| `istitle()`   | String is title-cased                 |

---

## 2. List (`list`) Methods

Lists are mutable. Several list methods modify the list **in place** and return `None`.

### Adding Elements

| Method     | Purpose                           |
|------------|-----------------------------------|
| `append()` | Add one element to the end        |
| `extend()` | Add all elements from an iterable |
| `insert()` | Insert an element at an index     |

```python
x = [1, 2]

x.append(3)
# [1, 2, 3]

x.extend([4, 5])
# [1, 2, 3, 4, 5]

x.insert(0, 100)
# [100, 1, 2, 3, 4, 5]
```

### Removing Elements

| Method     | Purpose                     |
|------------|-----------------------------|
| `remove()` | Remove first matching value |
| `pop()`    | Remove and return element   |
| `clear()`  | Remove all elements         |

```python
x = [10, 20, 30, 20]

x.remove(20)
# [10, 30, 20]

x.pop(20)
# 20

x.clear()
# []
```

### Searching

| Method    | Purpose                            |
|-----------|----------------------------------- |
| `index()` | Find index of first matching value |
| `count()` | Count occurrences                  |

```python
[10, 20, 10].index(10)
# 0

[10, 20, 10].count(10)
# 2
```

### Ordering

| Method      | Purpose               |
|-------------|-----------------------|
| `sort()`    | Sort list in place    |
| `reverse()` | Reverse list in place |

```python
x = [3, 1, 2]

x.sort()
# [1, 2, 3]

x.reverse()
# [3, 2, 1]
```

### Critical Distinction

```python
x = [3, 1, 2]

y = x.sort()

print(y)
# None
```

`list.sort()` modifies the list and returns `None`.

Compare:

```python
y = sorted(x)
```

`sorted()` is a built-in function that returns a **new list**.

---

## 3. Tuple (`tuple`) Methods

Tuples are immutable and have only two commonly used methods.

| Method     | Purpose                        |
|------------|--------------------------------|
| `count()`  | Count occurrences              |
| `index()`  | Find index of first occurrence |

```python
x = (10, 20, 10)

x.count(10)
# 2

x.index(20)
# 1
```

---

## 4. Set (`set`) Methods

Sets are mutable and store unique elements.

### Adding and Removing

| Method      | Purpose                                     |
|-------------|---------------------------------------------|
| `add()`     | Add one element                             |
| `update()`  | Add elements from an iterable               |
| `remove()`  | Remove element; raises `KeyError` if absent |
| `discard()` | Remove element if present                   |
| `pop()`     | Remove and return an arbitrary element      |
| `clear()`   | Remove all elements                         |

```python
s = {1, 2, 3}

s.add(4)
# {1, 2, 3, 4}

s.update([5, 6])
# {1, 2, 3, 4, 5, 6}

s.discard(10)
# No error
```

### Set Operations

| Method                   | Purpose                              |
|--------------------------|--------------------------------------|
| `union()`                | Elements in either set               |
| `intersection()`         | Elements common to both              |
| `difference()`           | Elements in first but not second     |
| `symmetric_difference()` | Elements in either set, but not both |

```python
a = {1, 2, 3}
b = {2, 3, 4}

a.union(b)
# {1, 2, 3, 4}

a.intersection(b)
# {2, 3}

a.difference(b)
# {1}

a.symmetric_difference(b)
# {1, 4}
```

### Relationship Checks

| Method         | Purpose                                      |
|----------------|----------------------------------------------|
| `issubset()`   | Check whether one set is a subset of another |
| `issuperset()` | Check whether one set contains another       |
| `isdisjoint()` | Check whether sets have no common elements   |

---

## 5. Dictionary (`dict`) Methods

### Accessing Values

| Method         | Purpose                                    |
|----------------|------------------------------------------- |
| `get()`        | Get value without raising `KeyError`       |
| `setdefault()` | Get value; insert default if key is absent |

```python
d = {"name": "Kishor", "age": 22}

d.get("name")
# "Kishor"

d.get("city")
# None

d.get("city", "Kozhikode")
# "Kozhikode"
```

### Keys, Values and Items

| Method     | Purpose                  |
|------------|--------------------------|
| `keys()`   | Return dictionary keys   |
| `values()` | Return dictionary values |
| `items()`  | Return key-value pairs   |

```python
d = {"a": 1, "b": 2}

d.keys()
# dict_keys(["a", "b"])

d.values()
# dict_values([1, 2])

d.items()
# dict_items([("a", 1), ("b", 2)])
```

### Updating and Removing

| Method      | Purpose                                   |
|-------------|-------------------------------------------|
| `update()`  | Add/update key-value pairs                |
| `pop()`     | Remove and return value for a key         |
| `popitem()` | Remove and return the last key-value pair |
| `clear()`   | Remove all entries                        |

```python
d = {"a": 1}

d.update({"b": 2})
# {"a": 1, "b": 2}

d.pop("a")
# 1
```

---

## 6. Numeric Types

### Integer (`int`)

Integers have relatively few methods that are important in normal programming.

| Method         | Purpose                                         |
|----------------|-------------------------------------------------|
| `bit_length()` | Number of bits required to represent an integer |
| `bit_count()`  | Number of `1` bits in binary representation     |
| `to_bytes()`   | Convert integer to bytes                        |
| `from_bytes()` | Create integer from bytes                       |

```python
10 .bit_length()
# 4

10 .bit_count()
# 2
```

### Float (`float`)

| Method               | Purpose                                   |
|----------------------|-------------------------------------------|
| `is_integer()`       | Check whether float represents an integer |
| `as_integer_ratio()` | Return exact integer ratio                |
| `hex()`              | Return hexadecimal representation         |

```python
10.0.is_integer()
# True

10.5.is_integer()
# False
```

---

## 7. Range (`range`) Methods

`range` objects are immutable sequences.

| Method    | Purpose               |
|-----------|-----------------------|
| `count()` | Count occurrences     |
| `index()` | Find index of a value |

```python
r = range(2, 10, 2)

r.count(4)
# 1

r.index(6)
# 2
```

---

## 8. Commonly Used Methods

### Tier 1 — Know Cold

```text
str:
    split()
    join()
    strip()
    replace()
    lower()
    upper()
    find()
    count()
    startswith()
    endswith()
    isalpha()
    isdigit()
    isalnum()

list:
    append()
    extend()
    insert()
    remove()
    pop()
    index()
    count()
    sort()
    reverse()

dict:
    get()
    keys()
    values()
    items()
    update()
    pop()

set:
    add()
    update()
    remove()
    discard()
    union()
    intersection()
    difference()
```

### Tier 2 — Know Well

```text
str:
    rfind()
    rsplit()
    lstrip()
    rstrip()
    capitalize()
    title()
    swapcase()
    isspace()
    islower()
    isupper()

list:
    clear()

dict:
    setdefault()
    popitem()
    clear()

set:
    symmetric_difference()
    issubset()
    issuperset()
    isdisjoint()
    pop()
    clear()
```

### Tier 3 — Recognize

```text
str:
    index()
    rindex()
    splitlines()
    format()
    format_map()
    isdecimal()
    istitle()

int:
    bit_length()
    bit_count()
    to_bytes()
    from_bytes()

float:
    is_integer()
    as_integer_ratio()
    hex()

range:
    count()
    index()
```

---