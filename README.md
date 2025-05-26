# Eased Layout

<!-- ![GitHub release (v1.0.0)](https://img.shields.io/badge/release-1.0.0-brightgreen.svg?style=flat)  --> ![github release](https://img.shields.io/github/release/mahfuz225bd/eased-layout.svg?label=current+release) ![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)

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
|   |   ├── debugger.css
|   |   ├── grid.grid.css
|   |   ├── helper.css
|   |   ├── navbar.css
|   |   ├── print.css
|   |   ├── restore-box-sizing.css
|   |   ├── restore-margins.css
|   ├── eased-layout.css
├── /tests
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

> **Note:** `div.container` is used as a container in this framework, while other frameworks like Bootstrap use `div.container` too.

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


### Responsive Design

#### Available Breakpoints

`eased-layout.css` has eleven default breakpoints for applying responsiveness. Here is a table showing breakpoints, class infixes, and dimensions for responsive layouts where the class infix for the specified screen widths is explained in the next sections.

| Breakpoint        | Class Infix | Dimensions |
| ----------------- | ----------- | ---------- |
| Miniscule         | None        | <64px      |
| Tiny              | tn          | ≥64px      |
| Ultra Small       | us          | ≥128px     |
| Compact           | cp          | ≥240px     |
| Extra extra small | xxs         | ≥360px     |
| Extra small       | xs          | ≥454px     |
| Small             | sm          | ≥576px     |
| Medium            | md          | ≥768px     |
| Large             | lg          | ≥992px     |
| Extra large       | xl          | ≥1200px    |
| Extra extra large | xxl         | ≥1400px    |

#### Semantic Layout

No need for any extra classes to apply basic responsiveness; provided styles for it as built-in. It will automatically change asides from horizontal to vertical when the media screen is less than 900px.

### Extensions

#### Debugger

#### CSS Flexbox Based Grid Layout

`eased-layout.css` is also providing a design grid system (row-columned) layout. CSS rules are applied for creating a flexible grid layout using the classes `.row` and `.total-columns-N`, where N should be 1 to 12.

##### Classes

- **`.row`:** The `.row` class is used to create a horizontal grouping of elements. Child elements of `.row` should be considered as columns. The `.row` class must be used on a &lt;div&gt; element. Applying it to other elements is not supported and may break the grid layout.

- **`.total-columns-{N}` along with `.row`:** For making a 12-columned maximum grid layout. `{N}` should be 1 to 12, which is for specifying the total column of a `.row`. For a single-column layout, you can use `.row` directly without `.total-columned-1`.

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

##### Container Fluid

For simplicity, there are no any class provided to make a container fluid. Moreover, `.total-columns-1` can be used for a container fluid which is completely optional.

##### Responsive

There are six built-in breakpoints provided (with plans to extend more smaller breakpoints) in this library. For applying those breakpoints for responsiveness, sm/md/lg/xl/xxl should be used as class infixes.

Along with `.row`, use any class according to the format: `.total-{available breakpoint}-{columns}`; columns should be 1 to 12.

###### 12+ Columns

Along with `.row`, use the class `.total-columns-breakpoints-n` and available CSS variables according to your need, whose format is --columns-{available breakpoint}: {columns}; columns can be any non-zero integer value.

Alternatively, along with `.row`, use multiple classes whose format is like `total-columns-{available breakpoint}-n` and available CSS variables according to your need, whose format is --columns-{available breakpoint}: {columns}; columns can be any non-zero integer value.

This is highly recommended: use a custom class for each variable, and remember that you don't need custom or additional classes and variables for any breakpoints if the total column number is not more than 12.

#### CSS Grid Based Grid Layout

#### Helpers

The following table provides a comprehensive list of helper classes available in the `eased-layout.css` library. These classes are designed to simplify common styling tasks and enhance the flexibility of your layouts.

| Category | Format | Breakpoint Format | Description |
| --- | --- | --- | --- |
| Typography | .lead |     | It makes a paragraph stand out. |
|     | .display-{1-6} |     | Display headings are used to stand out more than normal headings (larger font-size and lighter font-weight), and there are six classes to choose from: .display-1 to .display-6. |
| Font | .fs-{1-6} |     | Responsive font size utility classes where .fs-1 is the largest and .fs-6 is the smallest. Sizes scale using calc() for .fs-1 to .fs-4 to adapt to viewport width, while .fs-5 and .fs-6 use fixed rem values. |
|     | .font-monospace |     | Applies a monospace font stack for consistent character spacing, ideal for displaying code or tabular data. |
|     | .font-style-{italic\|normal} |     | To specify italic or normal text. |
|     | .font-weight-{lighter\|light\|normal\|medium\|semibold\|bold\|bolder} |     | Font weight utility classes using numeric values from 300 to 700, where each class name represents a visual weight: lighter (lighter than normal), light (300), normal (400), medium (500), semibold (600), bold (700), and bolder (bolder than bold). |
| Text | .text-align-{left\|right} | .text-align-{left\|right}-{available breakpoints} | To specify text align left or right. |
|     | .text-decoration-{none\|underline\|line-through} | .text-decoration-{none\|underline\|line-through}-{available breakpoints} | To specify the decoration line of a text. |
|     | .text-{lowercase\|uppercase\|capitalize} | .text-{lowercase\|uppercase\|capitalize}-{available breakpoints} | To specify the text transformation (lowercase, uppercase, capitalize). |
|     | .white-space-{normal\|nowrap} | .text-{normal\|nowrap}-{available breakpoints} | To specify how white-space inside an element is handled. |
|     | .text-color-{black\|white\|muted\|black-50\|white-50\|reset} | .text-color-{black\|white\|muted\|black-50\|white-50\|reset}-{available breakpoints} | Text color utility classes for applying solid or semi-transparent black/white colors, muted tone (rgba(33, 37, 41, 0.75)), or resetting to the inherited text color. |
|     | .text-break | .text-break-{available breakpoints} | Ensures long words or URLs break and wrap within their container to prevent overflow, using word-wrap and word-break properties for consistent behavior across browsers. |
| Offset | .offset-{1-11} | .offset-{1-11}-{available breakpoints} | Utility classes for applying left margin offsets as percentages of the container width, ranging from 8.33% (.offset-1) to 91.66% (.offset-11), allowing for precise positioning of elements within a grid system. |
| Margin and Padding | .m-{0-5\|auto} | .m-{0-5\|auto}-{available breakpoints} | Sets margin on all sides with values from 0px (no space) to 5px (maximum space), or auto for automatic margin. |
|     | .mt-{0-5\|auto} | .mt-{0-5\|auto}-{available breakpoints} | Sets margin-top with values from 0px to 5px, or auto for automatic top margin. |
|     | .ml-{0-5\|auto} | .ml-{0-5\|auto}-{available breakpoints} | Sets margin-left with values from 0px to 5px, or auto for automatic left margin. |
|     | .mr-{0-5\|auto} | .mr-{0-5\|auto}-{available breakpoints} | Sets margin-right with values from 0px to 5px, or auto for automatic right margin. |
|     | .mb-{0-5\|auto} | .mb-{0-5\|auto}-{available breakpoints} | Sets margin-bottom with values from 0px to 5px, or auto for automatic bottom margin. |
|     | .mx-{0-5\|auto} | .mx-{0-5\|auto}-{available breakpoints} | Sets horizontal margin (left and right) with values from 0px to 5px, or auto for automatic horizontal margins. |
|     | .my-{0-5\|auto} | .my-{0-5\|auto}-{available breakpoints} | Sets vertical margin (top and bottom) with values from 0px to 5px, or auto for automatic vertical margins. |
|     | .p-{0-5} | .p-{0-5}-{available breakpoints} | Sets padding on all sides with values from 0px to 5px. |
|     | .pt-{0-5} | .pt-{0-5}-{available breakpoints} | Sets padding-top with values from 0px to 5px. |
|     | .pl-{0-5} | .pl-{0-5}-{available breakpoints} | Sets padding-left with values from 0px to 5px. |
|     | .pr-{0-5} | .pr-{0-5}-{available breakpoints} | Sets padding-right with values from 0px to 5px. |
|     | .pb-{0-5} | .pb-{0-5}-{available breakpoints} | Sets padding-bottom with values from 0px to 5px. |
|     | .px-{0-5} | .px-{0-5}-{available breakpoints} | Sets horizontal padding (left and right) with values from 0px to 5px. |
|     | .py-{0-5} | .py-{0-5}-{available breakpoints} | Sets vertical padding (top and bottom) with values from 0px to 5px. |
| Gutter | .g-{1-5} |     | Sets consistent gap (margin) between elements in all directions. Values range from 0.25rem to 3rem, with higher numbers representing larger gaps. |
|     | .gx-{1-5} |     | Sets horizontal gap (margin-left and margin-right) between elements. Values range from 0.25rem to 3rem, with larger numbers increasing the horizontal spacing. |
|     | .gy-{1-5} |     | Sets vertical gap (margin-top and margin-bottom) between elements. Values range from 0.25rem to 3rem, with larger numbers increasing the vertical spacing. |
| Ratio | .ratio-{1x1\|4x3\|16x9\|21x9} |     | These classes create responsive aspect ratios for elements. They use padding-top to maintain specific ratios (e.g., 1:1, 4:3, 16:9, 21:9) based on the width of the container. The child elements are absolutely positioned within these ratios to ensure they scale properly while preserving the intended aspect ratio. |
| Position | .position-static\|relative\|absolute\|fixed\|sticky |     | Sets the CSS position property to control element placement within the document flow or relative to the viewport or parent. |
|     | .position-absolute-{top-left\|top-center\|top-right\|middle-left\|middle-center\|middle-right\|bottom-left\|bottom-center\|bottom-right} |     | Absolutely positions the element at a specified corner or center of its relative parent. |
|     | .position-fixed-{top-left\|top-center\|top-right\|middle-left\|middle-center\|middle-right\|bottom-left\|bottom-center\|bottom-right} |     | Fixes the element at a specified position relative to the viewport with z-index: 1030. |
|     | .position-sticky-{top-left\|top-center\|top-right\|middle-left\|middle-center\|middle-right\|bottom-left\|bottom-center\|bottom-right} |     | Sticks the element at a specified position within the scroll container using position: sticky and z-index: 1020. |
|     | .top-{0\|50\|100} |     | Sets the top position to 0%, 50%, or 100%. |
|     | .left-{0\|50\|100} |     | Sets the left position to 0%, 50%, or 100%. |
|     | .right-{0\|50\|100} |     | Sets the right position to 0%, 50%, or 100%. |
|     | .bottom-{0\|50\|100} |     | Sets the bottom position to 0%, 50%, or 100%. |
|     | .translate-middle |     | Centers the element both horizontally and vertically using transform: translate(-50%, -50%). |
|     | .translate-middle-x |     | Centers the element horizontally using transform: translateX(-50%). |
|     | .translate-middle-y |     | Centers the element vertically using transform: translateY(-50%). |
|     | .h-center |     | Horizontally centers content using display: flex and justify-content: center. |
|     | .center |     | Fully centers content both horizontally and vertically using flexbox. |
|     | .absolute-{center\|h-center\|v-center} |     | Absolutely positions the element and centers it: fully (center), horizontally (h-center), or vertically (v-center) using CSS transforms. |
|     | .v-center |     | Vertically centers content within a flex column layout that fills the container height. |
|     | .v-align-{baseline\|top\|middle\|bottom\|text-bottom\|text-top} |     | Applies vertical alignment to inline or table-cell elements using the corresponding vertical-align value. |
| Stacking Elements | .hstack |     | Places items in a row, evenly spaced and lined up in the center, stretching to fit the container. |
|     | .vstack |     | Stacks items in a column, one below the other, stretching to fill the available space. |
| Visibility | .visible |     | Makes an element visible on the page. |
|     | .invisible |     | Hides an element from view without removing it from the layout. |
|     | .visibility-hidden-focusable |     | Hides content visually but keeps it accessible for screen readers and makes it visible when focused (useful for accessibility). |
| Opacity | .opacity-{0\|25\|50\|75\|100} |     | Changes how see-through an element is — 0 means completely invisible, 100 means fully solid. |
| Overflow | .overflow-{auto\|hidden\|visible\|scroll\|x-auto\|x-hidden\|x-visible\|x-scroll\|y-auto\|y-hidden\|y-visible\|y-scroll} |     | Controls the overflow behavior for content, either horizontally (x) or vertically (y), with options to auto-scroll, hide, show, or always scroll. |
| Float, Clear and Clearfix | .float-{start\|end\|none} |     | Controls the floating behavior of an element, either to the left (start), right (end), or removes floating (none). |
|     | .clear-{left\|right\|both\|none} |     | Clears the float effect, either on the left, right, both sides, or removes clearing. |
|     | .clearfix |     | Clears floats within a container, ensuring it properly contains floated elements. |
| Object Fit | .object-fit-{contain\|cover\|fill\|scale\|none} |     | Controls how an image or video fits within its container, adjusting size and aspect ratio (e.g., contain scales to fit, cover fills and may crop, fill stretches, scale shrinks, none keeps original size). |
| Display | .d-{inline\|block\|contents\|flex\|grid\|inline-block\|inline-flex\|inline-table\|run-in\|table\|table-caption\|table-column-group\|table-header-group\|table-footer-group\|row-group\|table-cell\|table-column\|table-row\|none} |     | Controls how elements are displayed on the page, with options for inline elements (inline), block-level elements (block), flexible layouts (flex), grid layouts (grid), table elements (table, table-cell, etc.), and visibility (none hides elements). |
| Border | .border-style-{none\|hidden\|dotted\|dashed\|solid\|double\|groove\|ridge\|inset\|outset} |     | Sets the style of the border for an element, with options for no border (none), invisible (hidden), dotted (dotted), dashed (dashed), solid lines (solid), double lines (double), grooved (groove), ridged (ridge), inset (inset), or outset (outset). |
|     | .border-{1-5} |     | Sets the border width to a specified value from 1px to 5px. |
|     | .border-{top\|left\|right\|bottom}-{1-5} |     | Sets the border width for the specific side (top, left, right, bottom) to a value from 1px to 5px. |
| Weight and Height | .w-{any number divisible by 5\|auto} |     | Sets the width to a percentage value (5% to 100%) or to auto. |
|     | .max-w-100 |     | Sets the maximum width to 100%. |
|     | .w-vw-100 |     | Sets the width to 100% of the viewport width (100vw). |
|     | .min-width-vw-100 |     | Sets the minimum width to 100% of the viewport width (100vw). |
|     | .h-{any number divisible by 5\|auto} |     | Sets the height to a percentage value (5% to 100%) or to auto. |
|     | .max-h-100 |     | Sets the maximum height to 100%. |
|     | .h-vh-100 |     | Sets the height to 100% of the viewport height (100vh). |
|     | .min-h-vh-100 |     | Sets the minimum height to 100% of the viewport height (100vh). |
| Line Height | .line-height-{normal|0-1} |     | Sets the line height to normal or 0 or 1 for the text inside the element. |
| Link Offset | .link-offset-{1-3} |     | Makes the underline on a link appear slightly lower, making it easier to read. Technically, it sets text-underline-offset to 0.125em, 0.25em, or 0.375em. |
| User Select and Pointer Event | .link-offset-{1-3}-hover |     | Lowers the underline on a link only when you hover over it, creating a cleaner look. |
| Border Radius | .rounded-{0-5\|circle\|pill} |     | Gives rounded corners to an element to make it look softer or more modern. Technically, it applies border-radius values: 0 for sharp corners, 1–5 for increasingly round corners (0.25rem to 2rem), circle makes the element fully circular (50%), and pill gives it an elongated capsule shape (50rem). |
|     | .rounded-top-{0-5\|circle\|pill} |     | Rounds only the top-left and top-right corners of an element. Values from 0 to 5 adjust how rounded they are, while circle and pill give them fully rounded or capsule-like appearance. |
|     | .rounded-left-{0-5\|circle\|pill} |     | Applies rounding to the top-left and bottom-left corners of an element. Values 0 to 5 adjust the curvature, with circle and pill making them more rounded or pill-shaped. |
|     | .rounded-right-{0-5\|circle\|pill} |     | Rounds the top-right and bottom-right corners of an element. Values range from 0 (no rounding) to 5 (more rounded), with circle for a full curve and pill for an elongated curve. |
|     | .rounded-bottom-{0-5\|circle\|pill} |     | Adds rounding to the bottom-left and bottom-right corners. The rounding level increases from 0 to 5, or use circle or pill for full or capsule-like curves. |
| Z-index | .z-{n1\|0-3} |     | Sets how "in front" or "behind" an element appears on the screen — .z-n1 places the element behind others (z-index: -1), and .z-0 to .z-3 bring it progressively forward with higher stacking levels (z-index: 0 to 3). |
| Flex | .flex-fill |     | This class makes the flex item take up all available space in a flex container. It sets the flex property to 1 1 auto, making it flexible and ensuring it expands to fill the container's space. |
|     | .flex-direction-{row\|row-reverse\|column\|column-reverse} |     | Controls the direction of flex items in a container. row arranges them horizontally from left to right, row-reverse reverses that order, column arranges items vertically, and column-reverse reverses the vertical order. |
|     | .flex-wrap-{nowrap\|wrap\|wrap-reverse} |     | Defines whether flex items wrap onto multiple lines. nowrap prevents wrapping, wrap allows items to wrap onto a new line if needed, and wrap-reverse wraps items in the opposite direction. |
|     | .flex-basis-{0\|auto} |     | Sets the initial size of a flex item before any free space is distributed. 0 makes it take up no space initially, while auto means the size is based on the content of the item. |
|     | .flex-grow-{0-1} |     | Determines how much a flex item will grow relative to other items in the container. 0 means no growth, and 1 means the item will grow to fill available space equally with other items. |
|     | .flex-shrink-{0-1} |     | Specifies how a flex item should shrink if there is not enough space. 0 prevents shrinking, and 1 allows the item to shrink if necessary to fit into the container. |
| Grid | .grid-auto-flow-{row\|column\|dense\|row-dense\|column-dense} |     | Controls the flow of items in a grid. row and column specify whether items should be placed in rows or columns, while dense attempts to fill in gaps by placing items in available spaces. row-dense and column-dense apply the dense layout in specific directions. |
|     | .grid-auto-flow-{available breakpoints}-{row\|column\|dense\|row-dense\|column-dense} |     | Similar to the previous, but applies the flow setting to specific breakpoints (e.g., .grid-auto-flow-md-row). |
|     | .grid-auto-rows-{auto\|0\|max-content\|min-content} |     | Sets the size of rows in a grid. auto adjusts the row size based on content, 0 collapses the row, max-content sets the row to the size of the largest item, and min-content sets it to the smallest item. |
|     | .grid-auto-rows-{available breakpoints}-{auto\|0\|max-content\|min-content} |     | Similar to the previous, but applies to specific breakpoints (e.g., .grid-auto-rows-lg-auto). |
|     | .grid-auto-columns-{auto\|0\|max-content\|min-content} |     | Similar to grid-auto-rows, but for column sizes. auto adjusts the column size based on content, 0 collapses the column, max-content sets the column to the size of the largest item, and min-content sets it to the smallest item. |
|     | .grid-auto-columns-{available breakpoints}-{auto\|0\|max-content\|min-content} |     | Similar to the previous, but applies to specific breakpoints (e.g., .grid-auto-columns-md-auto). |
|     | .align-content-{stretch\|center\|left\|right\|space-between\|space-around\|space-evenly} |     | Aligns multiple rows or columns within a flex or grid container. stretch stretches them to fill the space, center centers them, left aligns to the left, right aligns to the right, and the space-* options add varying amounts of space between items. |
|     | .align-items-{normal\|stretch\|left\|right\|center\|baseline} |     | Aligns individual items in a flex or grid container along the cross axis. normal uses default alignment, stretch stretches them, left and right align them to respective sides, center centers them, and baseline aligns them based on the baseline of the text. |
|     | .justify-content-{left\|right\|center\|space-between\|space-around\|space-evenly} |     | Aligns items along the main axis in a flex or grid container. left aligns items to the left, right to the right, center in the middle, and the space-* options distribute items with varying amounts of space between them. |
|     | .align-self-{auto\|stretch\|center\|left\|right\|baseline} |     | Allows individual items to override their container’s align-items property. auto uses the container’s alignment, stretch stretches the item, center, left, and right align the item, and baseline aligns it based on the baseline. |
|     | .column-gap-{0\|normal} |     | Sets the space between columns in a multi-column layout. 0 removes the gap, and normal applies the default gap size. |
|     | .row-gap-{0\|normal} |     | Sets the space between rows in a multi-row layout. 0 removes the gap, and normal applies the default gap size. |
|     | .order-{first\|0-12} |     | Controls the order in which items appear within a flex or grid container. first places the item first in the order, while numbers from 0 to 12 assign specific order positions. |
| Others | .text-truncate |     | The .text-truncate class ensures that any overflowed text within an element is hidden and replaced with an ellipsis (...). It uses text-overflow: ellipsis to show this and prevents the text from wrapping onto the next line with white-space: nowrap. |
|     | .vr |     | This class creates a vertical rule (a line) using inline-block display. It stretches to the height of its container (align-self: stretch) and has a width of 1px. The color of the line is defined by the currentcolor property, and its opacity is set to 0.25, making it faint and subtle. |
|     | .focus-ring |     | The .focus-ring class adds a faint background color to elements, typically used to indicate focus in forms or interactive elements. The background color is set to a semi-transparent gray with rgba(108, 117, 125, 0.25), which gives a soft ring effect around the focused item. |
|     | .background-gradient |     | This class applies a vertical gradient background to an element, transitioning from a semi-transparent white at the top to a fully transparent white at the bottom. The gradient uses linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0)), creating a soft fade effect. The !important ensures the gradient is applied even if other styles try to override it. |

#### Navbar

#### Print

#### Restore Box Sizing

For restoring CSS style `box-sizing` as `content-box` (which is default by HTML), include `restore-box-sizing.css`. For including, `<link rel="stylesheet" href="{root directory}/dist/extensions/restore-box-sizing.css">` must be provided after the main library file `eased-layout.css` or `eased-layout.min.css`. You should set `href` to your HTML document carefully according to the [file structure](#basic-file-structure).

#### Restore Margins

For restoring the default margins of `body`, `h1` to `h6`, `p`, `pre`, `hr`, `table`, and `caption` HTML elements, include `restore-margins.css`. For including, `<link rel="stylesheet" href="{root directory}/dist/extensions/restore-margins.css">` must be provided after the main library file `eased-layout.css` or `eased-layout.min.css`. You should set `href` to your HTML document carefully according to the [file structure](#basic-file-structure).

### Complete Examples for HTML5 Semantic Elements:

```html

```

### Complete Examples for Grid System:

```html

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

5. **Available Breakpoints for Responsive Design:**

  - **Miniscule** (`<64px`): No class infix needed.
  - **Tiny** (`≥64px`): Uses the `tn` class infix.
  - **Ultra Small** (`≥128px`): Uses the `us` class infix.
  - **Compact** (`≥240px`): Uses the `cp` class infix.
  - **Extra extra small** (`≥360px`): Uses the `xxs` class infix.
  - **Extra small** (`≥454px`): Uses the `xs` class infix.
  - **Small** (`≥576px`): Uses the `sm` class infix.
  - **Medium** (`≥768px`): Uses the `md` class infix.
  - **Large** (`≥992px`): Uses the `lg` class infix.
  - **Extra large** (`≥1200px`): Uses the `xl` class infix.
  - **Extra extra large** (`≥1400px`): Uses the `xxl` class infix.


6. **Extensions:**
  - **Debugger**: 
  - **Drag Bar**: 
  - **CSS Flex Based Grid Layout**: 
  - **CSS Grid Based Grid Layout**: 
  - **Helpers**: 
  - **Navbar**: 
  - **Print**: 
  - **Restore Box Sizing**: 
  - **Restore Margins**: 

This release lays the foundation for a robust, responsive, and customizable front-end framework.
