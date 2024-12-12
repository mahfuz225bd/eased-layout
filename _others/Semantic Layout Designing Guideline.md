### Guideline for Designing HTML5 Semantic Layout with .container (as container)

#### `<header>` Placement Options

- Can be excluded.
- Can be placed in the body.
- Can be placed inside a `div.container`.
- Can be a child of `<aside>`, `<main>`, `<article>`, or `<section>`.

#### `<aside>` Combinations

- Can be a child of `div.container`, `<main>`, or directly `<body>`
- **Options**:
  - None
  - One (left)
  - One (right)
  - Two asides

#### Main Content

- For main content, use the `<main>` element.

#### `<footer>` Placement Options

- Can be excluded
- Can be placed in the body.
- Can be placed inside a `div.container`.
- But can not be a child of `<aside>`, `<main>`, `<article>`, or `<section>`.

#### `div.container` Usage

- The `div.container` can be included or excluded.
- Can be placed as a child of any element.

> **Note:** `div.container` is described as a container, while frameworks like Bootstrap use `.container` as a container.
