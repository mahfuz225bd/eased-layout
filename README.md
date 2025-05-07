# Eased Layout

![github release](https://img.shields.io/github/release/mahfuz225bd/eased-layout.svg?label=current+release) ![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)

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
|   ├── /_others (unnecessary, included for temporary)
|   ├── /extensions
|   |   ├── css-grid.css
|   |   ├── debugger.css
|   |   ├── helper.css
|   |   ├── navbar.css
|   |   ├── print.css
|   |   ├── restore-box-sizing.css
|   |   ├── restore-margins.css
|   ├── eased-layout.css
├── /tests (for testing, included temporarily)
```

### Builtin Features

#### Basic CSS Reset

No need for a basic CSS reset; a built-in basic CSS reset is already provided in the `eased-layout` library for all HTML elements with `box-sizing: border-box;`. Additionally, this provided zero margin for `body`, `h1` to `h6`, `p`, `pre`, `hr`, `table`, and `caption` elements to ensure consistent spacing across these elements and eliminate default browser styling that may interfere with the layout.

#### Focus Styles for Accessibility

This `eased-layout` library includes focus styles for accessibility: a green outline for buttons, blue for links and interactive items, as well as a red outline for all other focusable elements. The outline is offset by 3px to avoid content overlap.

##### Restoring the Focus Style

Not provided to restore the focus style. However, it can be removed to edit downloaded `eased-layout.css` or `eased-layout.min.css`.

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
7. **Nested Aside Layout:** For multiple layers of asides to organize content hierarchically, ideal for complex websites or applications with side content for navigation or highlighting sub-sections.

#### Use Cases for Different Approaches

The listed layout structures represent different approaches to organizing a webpage's content. Each has unique use cases, depending on the website's purpose, complexity, and design requirements. Here’s a breakdown of some basic ideas of when and why you may use each approach:

##### **1. [header + (div.container -> aside + main + aside) + footer]**

**Use Case: Standard Layout for Content-Rich Websites**

- **Purpose:** Common for blogs, news portals, or content-heavy sites where the header provides navigation, the main section holds the primary content, and asides offer related content or ads.
- **Advantages:**
  - Clear structure with a dedicated container for layout control.
  - Two asides for displaying supplementary information (e.g., navigation on one side and widgets or ads on the other).
  - Footer for global site information (e.g., copyright or links).
- **Examples:** News websites, online magazines, or e-commerce homepages.

##### **2. [header + main -> (aside + section + aside) + footer]**

**Use Case: Emphasis on Content Sections**

- **Purpose:** Suitable for websites with multiple sections of information within the main content, such as educational or technical documentation sites.
- **Advantages:**
  - Encourages a section-based design, which is ideal for organizing content hierarchically.
  - Asides for quick navigation (e.g., a table of contents or contextual links).
- **Examples:** Documentation, tutorial sites, or educational platforms.

##### **3. [header + main -> (aside + article + aside) + footer]**

**Use Case: Article-Centric Websites**

- **Purpose:** Best for single articles, blogs, or storytelling platforms where the article is the focal point.
- **Advantages:**
  - Focus on the article as a primary element.
  - Asides for supplementary content like author bios, related posts, or call-to-action widgets.
- **Examples:** Blogs, news articles, and storytelling platforms.

##### **4. [main -> (header + aside + section + aside + footer)]**

**Use Case: Content-Dominant Pages Without a Dedicated Header**

- **Purpose:** Ideal for standalone pages or single-page applications (SPAs) that don't need a persistent header outside the main content.
- **Advantages:**
  - Header is integrated within the main content for a streamlined appearance.
  - Suitable for microsites or standalone landing pages.
- **Examples:** Single-product landing pages, focused campaign pages, or standalone applications.

##### **5. [main -> (header + aside + article + aside + footer)]**

**Use Case: Article or Post-Oriented Standalone Layout**

- **Purpose:** Similar to the previous structure but tailored for pages where the article is the primary focus, and the header supports the article rather than the site as a whole.
- **Advantages:**
  - Flexible structure for pages like blog posts or editorials.
  - Footer and asides provide additional resources or navigation related to the article.
- **Examples:** Editorial pages, blog posts, or content-heavy product descriptions.

##### **6. [(div.container -> header + aside + main + aside + footer)]**

**Use Case: Fully Encapsulated Layout for Complete Control**

- **Purpose:** Used when you want strict control over layout width and behavior, with a self-contained design.
- **Advantages:**
  - Encapsulation ensures consistency across screen sizes and designs.
  - Ideal for dashboards or applications where layout constraints are essential.
- **Examples:** Admin dashboards, web applications, or corporate websites with strict design guidelines.

##### **7. Nested Aside Layout**

A **nested `aside` layout** introduces multiple layers of asides, typically used when content needs to be organized in a more hierarchical or nested fashion. This layout is suitable for more complex websites or applications where certain sections or sub-sections need to be highlighted or navigated through specific side content areas.

**Rules:**

- **Structure:** header + main -> (aside + div.container -> (aside + section -> (...) + aside) + aside) + footer

  _Or,_ header + div.container -> (aside + main -> (aside + section -> (...) + aside) + aside) + footer

- **(...):** div.container -> aside + section + aside Or, div.container -> aside + article + aside

- Can be implemented with one or two asides along with further nesting according to the **Structure** and **(...)**.

**Use Case: Complex Content Hierarchy with Multiple Contexts**

- **Purpose:** Ideal for websites with a lot of content that requires navigation, categorization, or deep linking within specific sub-sections.
- **Why Choose It:**
  - **Nested Asides** allow for contextual navigation where the content might change depending on what section the user is currently viewing.
  - Multiple **sidebars (asides)** within the main content area enable highly organized sections, such as:
    - Primary aside for overall navigation or category links.
    - Secondary asides for filtering options, related content, or sub-navigation that is relevant to specific sections or articles.
  - Great for **documentation**, **knowledge bases**, or **multi-level product pages** where there are deep categories or content types.

###### **Examples:**

1. **Documentation Platforms**
   - The main area could hold the primary document or tutorial, and nested asides could contain:
     - A **primary navigation sidebar** linking to other sections or chapters.
     - A **secondary sidebar** for quick links to glossary, references, or related documents.
     - A **third sidebar** for extra contextual information or notes specific to the section being viewed.
2. **E-commerce Sites with Multiple Categories**

   - The main area could display product listings or a product page, and nested asides could include:
     - A **primary aside** showing category navigation.
     - A **secondary aside** displaying filters for size, price, or other attributes.
     - A **tertiary aside** offering recommendations or related products for upselling.

3. **News or Multi-Topic Blogs**
   - Main content for articles could be flanked by asides for related stories or topics:
     - **Primary aside**: Related posts, categories, or featured news.
     - **Secondary aside**: Social sharing tools, comments, or popular topics.
     - **Tertiary aside**: Author info, ads, or external links related to the article.

###### **Advantages of Nested Aside Layout:**

- **Improved content organization**: Multiple layers of asides allow for more structured and organized content delivery, which is useful for hierarchical content.
- **Contextual relevance**: By placing relevant information in nested asides, users can easily find content that complements or relates to the section they are currently viewing.
- **Navigation efficiency**: This layout improves navigation for complex websites with multiple sections, categories, or sub-categories, helping users quickly locate information.
- **Scalability**: It's suitable for websites or applications that require scalable layouts with a large volume of content.

###### **Challenges:**

- **Increased complexity**: With multiple nested asides, the layout might get more complex and harder to manage, requiring careful planning for content flow and user navigation.
- **Possible clutter**: Too many sidebars or nested sections could overwhelm the user, so it's essential to maintain a clear focus on the most important content.

###### **Example Layout Breakdown:**

```html
<header>Header, in body</header>
<div class="container">
  <aside>Left aside</aside>
  <main>
    <aside>Left aside</aside>
    <section>
      <h3>Header</h3>
      <div class="container">
        <aside>Left aside</aside>
        <section>
          <h4>Sub Header</h4>
          <div class="container">
            <aside>Left aside</aside>
            <section>
              <h5>Sub Header</h5>
              <div class="container">
                <aside>Left aside</aside>
                <section>
                  <h6>Sub Header</h6>
                  <div class="container">
                    <aside>Left aside</aside>
                    <section>
                      <div class="container">
                        <aside>Left aside of the article</aside>
                        <article>Main Content as article</article>
                        <aside>Right aside of the article</aside>
                      </div>
                    </section>
                    <aside>Right aside</aside>
                  </div>
                </section>
                <aside>Right aside</aside>
              </div>
            </section>
            <aside>Right aside</aside>
          </div>
        </section>
        <aside>Right aside</aside>
      </div>
    </section>
    <aside>Right aside</aside>
  </main>
  <aside>Right aside</aside>
</div>
<footer>Footer, in body</footer>
```

This structure allows for **layered, multi-level navigation**, where each aside focuses on different types of supplementary content depending on the section or context within the page.

### Guideline for Designing Grid Layout

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
      <link rel="stylesheet" href="{root directory}/dist/eased-layout.css" />
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

For simplicity, there are no any class provided to make a container fluid. Moreover, `.total-columns-1` can be used for a container fluid which is completely optional.

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

#### Semantic Layout

No need for any extra classes to apply basic responsiveness; provided styles for it as built-in. It will automatically change asides from horizontal to vertical when the media screen is less than 900px.

#### Grid Layout

There are six built-in breakpoints provided (with plans to extend more smaller breakpoints) in this library. For applying those breakpoints for responsiveness, sm/md/lg/xl/xxl should be used as class infixes.

Along with `.row`, use any class according to the format: `.total-{available breakpoint}-{columns}`; columns should be 1 to 12.

##### 12+ Columns

Along with `.row`, use the class `.total-columns-breakpoints-n` and available CSS variables according to your need, whose format is --columns-{available breakpoint}: {columns}; columns can be any non-zero integer value.

Alternatively, along with `.row`, use multiple classes whose format is like `total-columns-{available breakpoint}-n` and available CSS variables according to your need, whose format is --columns-{available breakpoint}: {columns}; columns can be any non-zero integer value.

This is highly recommended: use a custom class for each variable, and remember that you don't need custom or additional classes and variables for any breakpoints if the total column number is not more than 12.

### Extensions

#### Restoring the Box Sizing

For restoring CSS style `box-sizing` as `content-box` (which is default by HTML), include `restore-box-sizing.css`. For including, `<link rel="stylesheet" href="{root directory}/dist/extensions/restore-box-sizing.css">` must be provided after the main library file `eased-layout.css` or `eased-layout.min.css`. You should set `href` to your HTML document carefully according to the [file structure](#basic-file-structure).

#### Restoring the Restoring Margins

For restoring the default margins of `body`, `h1` to `h6`, `p`, `pre`, `hr`, `table`, and `caption` HTML elements, include `restore-margins.css`. For including, `<link rel="stylesheet" href="{root directory}/dist/extensions/restore-margins.css">` must be provided after the main library file `eased-layout.css` or `eased-layout.min.css`. You should set `href` to your HTML document carefully according to the [file structure](#basic-file-structure).

### Complete Examples for HTML5 Semantic Elements:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>
      Complete Examples of Eased Layout with HTML5 Semantic Elements
    </title>
    <link rel="stylesheet" href="{root directory}/dist/eased-layout.css" />
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

      h2 {
        margin-top: 17px;
      }

      body {
        padding: 17px;
      }
    </style>
  </head>

  <body>
    <h2>
      Method 1 [header + (div.container -> aside + main + aside) + footer]:
    </h2>
    <header>Header, in body</header>
    <div class="container">
      <aside>Left aside, in div.container</aside>
      <main>Main Content as main, in div.container</main>
      <aside>Right aside, in div.container</aside>
    </div>
    <footer>Footer, in body</footer>

    <h2>Method 2.1 [header + main -> (aside + section + aside) + footer]:</h2>
    <header>Header, in body</header>
    <main>
      <aside>Left aside, in main, no any div.container</aside>
      <section>Main Content as section, in main, no any div.container</section>
      <aside>Right aside, in main, no any div.container</aside>
    </main>
    <footer>Footer, in body</footer>

    <h2>Method 2.2 [header + main -> (aside + article + aside) + footer]:</h2>
    <header>Header, in body</header>
    <main>
      <aside>Left aside, in main, no any div.container</aside>
      <article>Main Content as article, in main, no any div.container</article>
      <aside>Right aside, in main, no any div.container</aside>
    </main>
    <footer>Footer, in body</footer>

    <h2>Method 3.1 [main -> (header + aside + section + aside + footer)]:</h2>
    <main>
      <header>Header, in main, no any div.container</header>
      <aside>Left aside, in main, no any div.container</aside>
      <section>Main Content as section, in main, no any div.container</section>
      <aside>Right aside, in main, no any div.container</aside>
      <footer>Footer, in main, no div.container</footer>
    </main>

    <h2>Method 3.2 [main -> (header + aside + article + aside + footer)]:</h2>
    <main>
      <header>Header, in main, no any div.container</header>
      <aside>Left aside, in main, no any div.container</aside>
      <section>Main Content as article, in main, no any div.container</section>
      <aside>Right aside, in main, no any div.container</aside>
      <footer>Footer, in main, no div.container</footer>
    </main>

    <h2>
      Method 4 [(div.container -> header + aside + main + aside + footer)]:
    </h2>
    <div class="container">
      <header>Header, in div.container</header>
      <aside>Left aside, in div.container</aside>
      <main>Main Content as main, in div.container</main>
      <aside>Right aside, in div.container</aside>
      <footer>Footer, in div.container</footer>
    </div>

    <h2>Singe Aside Example 1:</h2>
    <header>Header</header>
    <div class="container">
      <aside>Left aside (25%)</aside>
      <main>Main Content (100 - 25 = 75%)</main>
    </div>
    <footer>Footer</footer>

    <h2>Singe Aside Example 2:</h2>
    <header>Header</header>
    <div class="container">
      <main>Main Content (100 - 25 = 75%)</main>
      <aside>Right aside (25%)</aside>
    </div>
    <footer>Footer</footer>

    <h2>Double Aside Example:</h2>
    <header>Header</header>
    <div class="container">
      <aside>Left aside (20%)</aside>
      <main>Main Content (100 - (20 + 20) = 60%)</main>
      <aside>Right aside (20%)</aside>
    </div>
    <footer>Footer</footer>

    <h2>Nested Aside Example:</h2>
    <header>Header, in body</header>
    <main>
      <aside>Left aside</aside>
      <div class="container">
        <aside>Left aside</aside>
        <article>
          <h3>Header</h3>
          <div class="container">
            <aside>Left aside</aside>
            <section>
              <h4>Sub Header</h4>
              <div class="container">
                <aside>Left aside</aside>
                <section>
                  <h5>Sub Header</h5>
                  <div class="container">
                    <aside>Left aside</aside>
                    <section>
                      <h6>Sub Header</h6>
                      <div class="container">
                        <aside>Left aside</aside>
                        <section>
                          <div class="container">
                            <aside>Left aside of the article</aside>
                            <article>Main Content as article</article>
                            <aside>Right aside of the article</aside>
                          </div>
                        </section>
                        <aside>Right aside</aside>
                      </div>
                    </section>
                    <aside>Right aside</aside>
                  </div>
                </section>
                <aside>Right aside</aside>
              </div>
            </section>
            <aside>Right aside</aside>
          </div>
        </article>
        <aside>Right aside</aside>
      </div>
      <aside>Right aside</aside>
    </main>
    <footer>Footer, in body</footer>
  </body>
</html>
```

### Complete Examples for Grid System:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complete Examples of Eased Layout Grid System</title>
    <link rel="stylesheet" href="{root directory}/dist/eased-layout.css">
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
    <h1>Complete Examples of Eased Layout Grid System</h1>
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

## Release Note (Draft)

**Release Note**

**Version 1.0.0 - {date}**

**Features:**

1. **Built-in Features:**

   **CSS Reset for Consistency:**

   - Introduced a basic CSS reset for consistent cross-browser styling:
     - Applied `box-sizing: border-box` for intuitive layout calculations.
     - Removed default margins from common elements (e.g., headings, paragraphs, and tables) to ensure uniform spacing.
   - Included a feature to restore browser defaults if needed.

   **Focus Styles for Accessibility:**

   This library added focus styles for accessibility with a green outline for buttons, blue for links and interactive items, and red for other focusable elements.

2. **Sematic Layout Design:**

   - Simplified layout creation with HTML5 semantic elements: `header`, `aside`, `main`, `section`, `article`, and `footer`.

3. **12-Column Grid System:**

   - Added a class-based grid system for responsive designs:
     - `.total-{available breakpoint}-{columns}` (e.g., `.total-md-6`).
     - Supported breakpoints (`sm`, `md`, `lg`, `xl`, `xxl`) and the value of {columns} should between 1 to 12 according to need.

4. **12+ Column Grid System:**

   - Introduced a flexible grid system for custom layouts:
     - Use `.total-columns-n` with CSS variables for unlimited column configurations.
     - Configure breakpoints with `.total-columns-breakpoints-n` and CSS variables like `--columns-{available breakpoint}: {columns}`.
     - Alternatively, configure with `total-columns-{available breakpoint}-n` and CSS variables like `--columns-{available breakpoint}: {columns}`.
     - The `{columns}` value should any non-zero integer column count for precise designs.

5. **Available Breakpoints for Responsive Design:** {some text}

6. **Extensions:** {some text}

This release lays the foundation for a robust, responsive, and customizable front-end framework.
