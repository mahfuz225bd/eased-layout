# Eased Layout

Status: `Working...`, first release will be published as early as possible but still able to use.

## Documentation

Full documentation (in a website) will be published after releasing the first version.

### Files

1. **`layout.css`:** For basic html layout designing with div.envelope and html5 semantic layout elements (header, aside, main, section, article, footer).
2. **`layout.100grid.css`:** For (maximum) 100 columned grid system layout designing.

> `layout.css` is always required in your project.

### Basic File Structure

```
/eased-layout
├── /dist
|   ├── _others (unnecessary, included for temporary)
|   ├── layout.css
|   └── layout.100.grid.css
├── test1.html (for testing, included for temporary)
├── test2.html (for testing, included for temporary)
```

### Guideline for Designing Layout

#### `<header>` Placement Options

- Can be excluded.
- Can be placed in the body.
- Can be placed inside a `div.envelope`.
- Can be a child of `<aside>`, `<main>`, `<article>`, or `<section>`.

#### `<aside>` Combinations

- Can be child of `div.envelope` or `<main>` or directly `<body>`
- **Options**:
  - None
  - One (left)
  - One (right)
  - Two asides

#### Main Content

- Can only use `<main>`, `<section>`, or `<article>`.

#### `<footer>` Placement Options

- Can be excluded
- Can be placed in the body.
- Can be placed inside a `div.envelope`.
- But can not be a child of `<aside>`, `<main>`, `<article>`, or `<section>`.

#### `div.envelope` Usage

- The `div.envelope` can be included or excluded.
- Can be placed as a child of any element.

> **Note:** `div.envelope` is used as container in this framework where others framework like bootstrap use `div.container` as container.

### Guideline for Designing Grid (row columned) Layout

`layout.100.grid.css` is for designing grid system (row columned) layout. CSS rules are applied for creating a flexible grid layout using the class `.row` and `.total-columns-N` where N should 1 to 100.

#### Classes

- **`.row`:** The `.row` class is used to create a horizontal grouping of elements.
- **`.total-columns-N` along with `.row`:** N should 1 to 100, which is for specifying total column of a `.row`
- **`.clearfix`:** Quickly and easily clearing floated content within a block element by adding a `.clearfix` class.

## Usage

### Before Starting

- Download this repository. [Note: No needed for downloading after releasing the first version]

### Initialization with both `layout.css` and `layout.100grid.css`:

Create a file in the root directory or anywhere and set href properly according to the file structure:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML Easy Layout Implementation</title>
    <link rel="stylesheet" href="./dist/layout.css" />
    <link rel="stylesheet" href="./dist/layout.100grid.css" />
  </head>
  <body></body>
</html>
```

### Complete Example of `layout.css`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Eased Layout Complete Examples</title>
    <link rel="stylesheet" href="./dist/layout.css" />
    <style>
      header,
      aside,
      main,
      section,
      article,
      footer {
        border: 1px solid #000;
      }

      div.envelope {
        border: 1px solid red;
      }

      header,
      aside,
      main,
      section,
      article,
      footer,
      div.envelope {
        padding: 10px;
      }

      h1 {
        margin-top: 17px;
      }

      body {
        padding: 17px;
      }
    </style>
  </head>

  <body>
    <h1>
      Method 1 [header + (div.envelope -> aside + main + aside) + footer]:
    </h1>
    <header>Header, in body</header>
    <div class="envelope">
      <aside>Left aside, in div.envelope</aside>
      <main>Main Content as main, in div.envelope</main>
      <aside>Right aside, in div.envelope</aside>
    </div>
    <footer>Footer, in body</footer>

    <h1>Method 2.1 [header + main -> (aside + section + aside) + footer]:</h1>
    <header>Header, in body</header>
    <main>
      <aside>Left aside, in main, no any div.envelope</aside>
      <section>Main Content as section, in main, no any div.envelope</section>
      <aside>Right aside, in main, no any div.envelope</aside>
    </main>
    <footer>Footer, in body</footer>

    <h1>Method 2.2 [header + main -> (aside + article + aside) + footer]:</h1>
    <header>Header, in body</header>
    <main>
      <aside>Left aside, in main, no any div.envelope</aside>
      <article>Main Content as article, in main, no any div.envelope</article>
      <aside>Right aside, in main, no any div.envelope</aside>
    </main>
    <footer>Footer, in body</footer>

    <h1>Method 3 [main -> (header + aside + section + aside + footer)]:</h1>
    <main>
      <header>Header, in main, no any div.envelope</header>
      <aside>Left aside, in main, no any div.envelope</aside>
      <section>Main Content as section, in main, no any div.envelope</section>
      <aside>Right aside, in main, no any div.envelope</aside>
      <footer>Footer, in main, no div.envelope</footer>
    </main>

    <h1>
      Method 4 [(div.envelope -> header + aside + main + aside + footer)]:
    </h1>
    <div class="envelope">
      <header>Header, in div.envelope</header>
      <aside>Left aside, in div.envelope</aside>
      <main>Main Content as main, in div.envelope</main>
      <aside>Right aside, in div.envelope</aside>
      <footer>Footer, in div.envelope</footer>
    </div>
  </body>
</html>
```

### Complete Example of `layout.100grid.css`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Eased Layout Complete Examples</title>
    <!-- layout.css is must be included -->
    <link rel="stylesheet" href="./dist/layout.css" />
    <link rel="stylesheet" href="./dist/layout.100grid.css" />
    <style>
      div.row,
      div.row > *,
      section.row,
      section.row > * {
        border: 1px solid #000;
      }

      div.envelope {
        border: 1px solid red;
      }

      div.row,
      div.row > * {
        padding: 10px;
      }

      h1 {
        margin-top: 17px;
      }

      body {
        padding: 17px;
      }
    </style>
  </head>

  <body>
    <h1>1.1: Single columned grid without div.envelope</h1>
    <div class="row">
      <div>Column One</div>
    </div>

    <h1>1.2: 10 columned grid without div.envelope</h1>
    <div class="row total-columns-10">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
    </div>

    <h1>2.1: Single columned grid + external column is added</h1>
    <div class="row">
      <div>Column One</div>
      <div>Column Two</div>
    </div>

    <h1>2.2: 10 columned grid + external column is added</h1>
    <div class="row total-columns-10">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
    </div>

    <h1>
      2.3: 10 columned grid + external column is added (making 10 columned
      single row into 2 row)
    </h1>
    <div class="row total-columns-5">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
    </div>

    <h1>3.1: Single columned grid with div.envelope</h1>
    <div class="envelope row">
      <div>Column One</div>
    </div>

    <h1>3.2: 10 columned grid with div.envelope</h1>
    <div class="envelope row total-columns-10">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
    </div>

    <h1>4.1: Single columned grid with wrapping into div.envelope</h1>
    <div class="envelope">
      <div class="row">
        <div>Column One</div>
      </div>
    </div>

    <h1>4.2: 10 columned grid with wrapping into div.envelope</h1>
    <div class="envelope">
      <div class="row total-columns-10">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
      </div>
    </div>

    <h1>5: 10 columned Example with section element</h1>
    <section class="row total-columns-10">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
    </section>
  </body>
</html>
```
