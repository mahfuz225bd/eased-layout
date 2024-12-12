# Eased Layout

![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)

The `eased-layout.css` library provides predefined CSS for building web layouts. It offers a pre-designed responsive layout with HTML5 semantic elements such as `header`, `aside`, `main`, `section`, `article`, and `footer`, as well as a multi-columned grid system that offers 12 columns as primary and also can be extended with just a CSS variable.

## Documentation

Full documentation on a website (official) will be published as soon as possible.

### Getting Started

#### Project Initialization With Cloning This Repository

First, Download this repository. Here are the ways to download the repository:

1. **Clone with Git**:

   - If you don’t have Git installed, download and install it from [Git's official website](https://git-scm.com/downloads).
   - After installation is being complete successfully, run this command to clone the repository:
     ```bash
     git clone https://github.com/your-username/repository-name.git
     ```

2. **Download ZIP**:

   - After downloading, unzip the file before using the library. If you need assistance with unzipping, check this [blog post on unzipping files](https://www.wikihow.com/Unzip-a-File).

3. **Using GitHub Desktop**:
   - Download and install [GitHub Desktop](https://desktop.github.com/), and use it to clone the repository by pasting the repository URL.

Now, Create a file in the root directory or anywhere and set `href` properly according to the [file structure](#basic-file-structure):

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML Easy Layout Implementation</title>
    <link rel="stylesheet" href="./dist/eased-layout.css" />
  </head>
  <body></body>
</html>
```

### Basic File Structure

```
/eased-layout
├── /dist
|   ├── _others (unnecessary, included for temporary)
|   ├── eased-layout.css
|   ├── eased-layout.restore-box-sizing.css
|   ├── eased-layout.restore-margins.css
├── /tests (for testing, included temporarily)
```

### Basic CSS Reset

No need for a basic CSS reset; a built-in basic CSS reset is already provided in the `eased-layout` library for all HTML elements with `box-sizing: border-box;`. Additionally, this provided zero margin for `body`, `h1` to `h6`, `p`, `pre`, `hr`, `table`, and `caption` elements to ensure consistent spacing across these elements and eliminate default browser styling that may interfere with the layout.

#### Restoring the CSS Resets

##### Restoring Box Sizing

For restoring CSS style `box-sizing` as `content-box` (which is default by HTML), include `eased-layout.restore-box-sizing.css`. For including, `<link rel="stylesheet" href="{root directory}/dist/eased-layout.restore-box-sizing.css">` must be provided after the main library file `eased-layout.css` or `eased-layout.min.css`. You should set `href` to your HTML document carefully according to the [file structure](#basic-file-structure).

##### Restoring Margins

For restoring the default margins of `body`, `h1` to `h6`, `p`, `pre`, `hr`, `table`, and `caption` HTML elements, include `eased-layout.restore-margins.css`. For including, `<link rel="stylesheet" href="{root directory}/dist/eased-layout.restore-margins.css">` must be provided after the main library file `eased-layout.css` or `eased-layout.min.css`. You should set `href` to your HTML document carefully according to the [file structure](#basic-file-structure).

### Guideline for Designing Semantic Layout

This library is very helpful for making semantic layouts with one or two asides (sidebars), including responsiveness. Aside might be helpful for building layouts for blogs, documentations, e-commerce, dashboards, file managers, and much more, where sidebars play important roles, including navigation, table of contents, calendar, filtering items like products, portfolio, articles, article's archives, categories, tags, and many other useful widgets. This feature will not be required if you're not using aside as a sidebar.

#### Placement Options

##### `<header>` Placement Options

- Though technically it can be excluded, it is highly recommended to have at least a header section on a website for better SEO and accessibility.
- Can be placed in the body.
- Can be placed inside a `div.container`.
- Can be a child of `<aside>`, `<main>`, `<article>`, or `<section>`.

##### `<aside>` Combinations

- Can be a child of `div.container`, `<main>`, or directly `<body>`
- **Options**:
  - None
  - One (left)
  - One (right)
  - Two asides

##### Main Content

- For main content, use the `<main>` element. Additionally, `<section>` or `<article>` can be used directly instead of `<main>` as main content.

##### `<footer>` Placement Options

- Can be excluded
- Can be placed in the body.
- Can be placed inside a `div.container`.
- But can not be a child of `<aside>`, `<main>`, `<article>`, or `<section>`.

##### `div.container` Usage

- The `div.container` can be excluded, if aside is not used.
- Can be placed as a child of any element.

> **Note:** `div.container` is used as a container in this framework, while other frameworks like Bootstrap use `.container` too.

#### Layout Structures in Different Approaches

1. **[header + (div.container -> aside + main + aside) + footer]:** Standard two-aside layout with a container for content-rich sites.
2. **[header + main -> (aside + section + aside) + footer]:** Section-focused layout for hierarchical content.
3. **[header + main -> (aside + article + aside) + footer]:** Article-centric layout for blogs or storytelling.
4. **[main -> (header + aside + section + aside + footer)]:** Integrated header for standalone content-dominant pages.
5. **[main -> (header + aside + article + aside + footer)]:** Article-focused layout for single content pages.
6. **[(div.container -> header + aside + main + aside + footer)]:** Encapsulated layout for complete design control.

#### Use Cases for Different Approaches

The listed layout structures represent different approaches to organizing a webpage's content. Each has unique use cases, depending on the website's purpose, complexity, and design requirements. Here’s a breakdown of when and why you might use each approach:

##### **1. [header + (div.container -> aside + main + aside) + footer]**

###### **Use Case: Standard Layout for Content-Rich Websites**

- **Purpose:** Common for blogs, news portals, or content-heavy sites where the header provides navigation, the main section holds the primary content, and asides offer related content or ads.
- **Advantages:**
  - Clear structure with a dedicated container for layout control.
  - Two asides for displaying supplementary information (e.g., navigation on one side and widgets or ads on the other).
  - Footer for global site information (e.g., copyright or links).
- **Examples:** News websites, online magazines, or e-commerce homepages.

#### **2. [header + main -> (aside + section + aside) + footer]**

##### **Use Case: Emphasis on Content Sections**

- **Purpose:** Suitable for websites with multiple sections of information within the main content, such as educational or technical documentation sites.
- **Advantages:**
  - Encourages a section-based design, which is ideal for organizing content hierarchically.
  - Asides for quick navigation (e.g., a table of contents or contextual links).
- **Examples:** Documentation, tutorial sites, or educational platforms.

#### **3. [header + main -> (aside + article + aside) + footer]**

##### **Use Case: Article-Centric Websites**

- **Purpose:** Best for single articles, blogs, or storytelling platforms where the article is the focal point.
- **Advantages:**
  - Focus on the article as a primary element.
  - Asides for supplementary content like author bios, related posts, or call-to-action widgets.
- **Examples:** Blogs, news articles, and storytelling platforms.

#### **4. [main -> (header + aside + section + aside + footer)]**

##### **Use Case: Content-Dominant Pages Without a Dedicated Header**

- **Purpose:** Ideal for standalone pages or single-page applications (SPAs) that don't need a persistent header outside the main content.
- **Advantages:**
  - Header is integrated within the main content for a streamlined appearance.
  - Suitable for microsites or standalone landing pages.
- **Examples:** Single-product landing pages, focused campaign pages, or standalone applications.

#### **5. [main -> (header + aside + article + aside + footer)]**

##### **Use Case: Article or Post-Oriented Standalone Layout**

- **Purpose:** Similar to the previous structure but tailored for pages where the article is the primary focus, and the header supports the article rather than the site as a whole.
- **Advantages:**
  - Flexible structure for pages like blog posts or editorials.
  - Footer and asides provide additional resources or navigation related to the article.
- **Examples:** Editorial pages, blog posts, or content-heavy product descriptions.

#### **6. [(div.container -> header + aside + main + aside + footer)]**

##### **Use Case: Fully Encapsulated Layout for Complete Control**

- **Purpose:** Used when you want strict control over layout width and behavior, with a self-contained design.
- **Advantages:**
  - Encapsulation ensures consistency across screen sizes and designs.
  - Ideal for dashboards or applications where layout constraints are essential.
- **Examples:** Admin dashboards, web applications, or corporate websites with strict design guidelines.

### Guideline for Designing Grid System (Row Columned) Layout

`eased-layout.css` is also providing a design grid system (row-columned) layout. CSS rules are applied for creating a flexible grid layout using the classes `.row` and `.total-columns-N`, where N should be 1 to 12.

#### Classes

- **`.row`:** The `.row` class is used to create a horizontal grouping of elements. Child elements of `.row` should be considered as columns.

- **`.total-columns-N` along with `.row`:** For making a 12-columned maximum grid layout. N should be 1 to 12, which is for specifying the total column of a `.row`. For a single-column layout, you can use `.row` directly without `.total-columned-1`.

- **`.total-columns-n` along with `.row` and custom class or style attribute:** To create a grid with dynamically calculated N number of column widths using the `--columns` CSS variable. It can be done with both a custom class or style attribute. Here is the complete example:

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Methods of Using the .total-columns-n Class</title>
      <link rel="stylesheet" href="../dist/eased-layout.css" />
      <style>
        .custom-total-columns-15 {
          --columns: 15;
        }
      </style>
    </head>

    <body>
      <h1>Methods of Using the .total-columns-n Class</h1>

      <h2>Usage of .total-columns-n with style attribute</h2>
      <section class="row total-columns-n" style="--columns: 4;">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </section>

      <h2>
        Usage of .total-columns-n with user-defined class (e.g.,
        custom-total-columns-15)
      </h2>
      <section class="row total-columns-n custom-total-columns-15">
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
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
      </section>
    </body>
  </html>
  ```

> Note: It is suggested not to use the style attribute for setting `--columns` CSS; instead, always use a custom class.

#### Container Fluid

For simplicity, there are no any class provided to make a container fluid. Instead

### Helpers

### Responsive Design

#### Available Breakpoints

`eased-layout.css` has six default breakpoints for applying responsiveness. Here is a table showing breakpoints, class infixes, and dimensions for responsive layouts where the class infix for the specified screen widths is explained in the next sections.

| Breakpoint        | Class Infix | Dimensions |
| ----------------- | ----------- | ---------- |
| Extra small       | None        | <576px     |
| Small             | sm          | ≥576px     |
| Medium            | md          | ≥768px     |
| Large             | lg          | ≥992px     |
| Extra large       | xl          | ≥1200px    |
| Extra extra large | xxl         | ≥1400px    |

#### Responsive Design for Grid Semantic Layout

No need for any extra classes to apply responsiveness, provided styles for it as built-in. It will automatically change asides from horizontal to vertical when the media screen will be less than 900px.

#### Responsive Design for Grid System (Row Columned) Layout

There are six built-in breakpoints provided (with plans to extend more smaller breakpoints) in this library. For applying those breakpoints for responsiveness, sm/md/lg/xl/xxl should be used as class infixes.

##### For Fixed Grid (12 columns)

Along with `.row`, use any class according to the format: `.total-{sm|md|lg|xl|xxl}-{columns}`; columns should be 1 to 12.

##### For 12+ columns

Along with `.row`, use the class `.total-columns-breakpoints-n` and available CSS variables according to your need whose format is: --columns-{sm|md|lg|xl|xxl}: {columns}; columns can be any value

### Complete Example for HTML5 Semantic Elements:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Complete Example of Eased Layout with HTML5 Semantic Elements</title>
    <link rel="stylesheet" href="../dist/eased-layout.css" />
    <style>
      header,
      aside,
      main,
      section,
      article,
      footer {
        border: 1px solid #000;
      }

      div.container {
        border: 1px solid red;
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
      Method 1 [header + (div.container -> aside + main + aside) + footer]:
    </h1>
    <header>Header, in body</header>
    <div class="container">
      <aside>Left aside, in div.container</aside>
      <main>Main Content as main, in div.container</main>
      <aside>Right aside, in div.container</aside>
    </div>
    <footer>Footer, in body</footer>

    <h1>Method 2.1 [header + main -> (aside + section + aside) + footer]:</h1>
    <header>Header, in body</header>
    <main>
      <aside>Left aside, in main, no any div.container</aside>
      <section>Main Content as section, in main, no any div.container</section>
      <aside>Right aside, in main, no any div.container</aside>
    </main>
    <footer>Footer, in body</footer>

    <h1>Method 2.2 [header + main -> (aside + article + aside) + footer]:</h1>
    <header>Header, in body</header>
    <main>
      <aside>Left aside, in main, no any div.container</aside>
      <article>Main Content as article, in main, no any div.container</article>
      <aside>Right aside, in main, no any div.container</aside>
    </main>
    <footer>Footer, in body</footer>

    <h1>Method 3.1 [main -> (header + aside + section + aside + footer)]:</h1>
    <main>
      <header>Header, in main, no any div.container</header>
      <aside>Left aside, in main, no any div.container</aside>
      <section>Main Content as section, in main, no any div.container</section>
      <aside>Right aside, in main, no any div.container</aside>
      <footer>Footer, in main, no div.container</footer>
    </main>

    <h1>Method 3.2 [main -> (header + aside + article + aside + footer)]:</h1>
    <main>
      <header>Header, in main, no any div.container</header>
      <aside>Left aside, in main, no any div.container</aside>
      <section>Main Content as article, in main, no any div.container</section>
      <aside>Right aside, in main, no any div.container</aside>
      <footer>Footer, in main, no div.container</footer>
    </main>

    <h1>
      Method 4 [(div.container -> header + aside + main + aside + footer)]:
    </h1>
    <div class="container">
      <header>Header, in div.container</header>
      <aside>Left aside, in div.container</aside>
      <main>Main Content as main, in div.container</main>
      <aside>Right aside, in div.container</aside>
      <footer>Footer, in div.container</footer>
    </div>

    <h1>Singe Aside Example 1:</h1>
    <header>Header</header>
    <div class="container">
      <aside>Left aside (25%)</aside>
      <main>Main Content (100 - 25 = 75%)</main>
    </div>
    <footer>Footer</footer>

    <h1>Singe Aside Example 2:</h1>
    <header>Header</header>
    <div class="container">
      <main>Main Content (100 - 25 = 75%)</main>
      <aside>Right aside (25%)</aside>
    </div>
    <footer>Footer</footer>

    <h1>Double Aside Example:</h1>
    <header>Header</header>
    <div class="container">
      <aside>Left aside (20%)</aside>
      <main>Main Content (100 - (20 + 20) = 60%)</main>
      <aside>Right aside (20%)</aside>
    </div>
    <footer>Footer</footer>
  </body>
</html>
```

### Complete Example for Grid System:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complete Example of Eased Layout Grid System</title>
    <link rel="stylesheet" href="../dist/eased-layout.css">
    <style>
        div.row,
        div.row>*,
        section.row,
        section.row>* {
            border: 1px solid #000;
        }

        div.container {
            border: 1px solid red;
        }

        h2 {
            margin-top: 17px;
        }

        body {
            padding: 17px;
        }

        .custom-column-count {
            --columns-sm: 2;
            --columns-md: 4;
            --columns-lg: 8;
            --columns-xl: 12;
            --columns-xxl: 16;
        }

        .total-columns-xxl-16 {
            --columns-xxl: 16;
        }
    </style>
</head>

<body>
    <h1>Complete Example of Eased Layout Grid System</h1>
    <h2>1.1: 10 columned grid without .container</h2>
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

    <h2>1.2: 10 columned grid without .container + external column is added</h2>
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

    <h2>1.3: 10 columned grid without .container + external column is added (making 10 columned single row into 2 rows)
    </h2>
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

    <h2>2.1: 10 columned grid with .container</h2>
    <div class="container row total-columns-10">
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

    <h2>2.2: 10 columned grid with .container + external column is added</h2>
    <div class="container row total-columns-10">
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

    <h2>2.3: 10 columned grid with .container + external column is added (making 10 columned single row into 2 rows)
    </h2>
    <div class="container row total-columns-5">
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

    <h2>3.1: 10 columned grid with wrapping into div.container</h2>
    <div class="container">
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

    <h2>3.2: 10 columned grid with wrapping into div.container + external column is added</h2>
    <div class="container">
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
    </div>

    <h2>3.3: 10 columned grid with wrapping into div.container + external column is added (making 10 columned single row
        into 2 rows)</h2>
    <div class="container">
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
    </div>

    <h2>4: 10 columned Example with semantic elements (Eg: section)</h2>
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

    <h2>5: 10 columned grid with setting different different widths to all columns</h2>
    <div class="row total-columns-10">
        <div style="flex-basis: 50px;">1 (50px)</div>
        <div style="flex-basis: 75px;">2 (75px)</div>
        <div style="flex-basis: 50px;">3 (50px)</div>
        <div style="flex-basis: 100px;">4 (100px)</div>
        <div style="flex-basis: 50px;">5 (50px)</div>
        <div style="flex-basis: 80px;">6 (80px)</div>
        <div style="flex-basis: 50px;">7 (50px)</div>
        <div style="flex-basis: 60px;">8 (60px)</div>
        <div style="flex-basis: 90px;">9 (90px)</div>
        <div style="flex-basis: 50px;">10 (50px)</div>
    </div>

    <h2>6.1: Single columned Example without .total-columns-1 (by default, work as container fluid; .container can be
        include or excluded)</h2>
    <div class="row">
        <div>1</div>
    </div>

    <h2>6.2: Single columned Example with .total-columns-1 (work as container fluid, .container can be include or
        excluded)</h2>
    <div class="row total-columns-1">
        <div>1</div>
    </div>

    <h2>6.3: Single columned Example without .total-columns-1 + external column is added (work as by default, container
        fluid; .container can be include or excluded)</h2>
    <div class="row">
        <div>1</div>
        <div>2</div>
    </div>

    <h2>6.4: Single columned Example with .total-columns-1 + external column is added (work as container fluid,
        .container can be include or excluded)</h2>
    <div class="row total-columns-1">
        <div>1</div>
        <div>2</div>
    </div>

    <h2>7: 12+ Columned Grid</h2>
    <div class="row total-columns-n" style="--columns: 15;">
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
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
        <div>16</div>
        <div>17</div>
        <div>18</div>
        <div>19</div>
        <div>20</div>
        <div>20</div>
        <div>21</div>
        <div>22</div>
        <div>23</div>
        <div>24</div>
        <div>25</div>
        <div>26</div>
        <div>27</div>
        <div>28</div>
        <div>29</div>
        <div>50</div>
    </div>

    <h2>8.1: Responsive Grid Layout with Breakpoints (Total 8/12 Columns)</h2>
    <div class="row total-columns-sm-2 total-columns-md-4 total-columns-lg-8">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
    </div>

    <h2>8.2: Responsive Grid Layout with Breakpoints (Total 12/12 Columns)</h2>
    <div class="row total-columns-sm-2 total-columns-md-4 total-columns-lg-12">
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
        <div>12</div>
    </div>
    </section>

    <h2>8.3: Responsive Grid Layout with Breakpoints (Total 12+ Columns)</h2>
    <div class="row total-columns-breakpoints-n custom-column-count">
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
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
        <div>16</div>
    </div>

    <blockquote><strong>N.B.:</strong> Inline CSS is not a good practice. Always use an externally defined class
        instead of it.</blockquote>
</body>

</html>
```

## TODOs

[Click here](.todos) to show todos for future releases.
