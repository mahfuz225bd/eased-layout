const { src, dest, watch, parallel } = require("gulp");
const cleanCSS = require("gulp-clean-css");
const terser = require("gulp-terser");
const rename = require("gulp-rename");
const through2 = require("through2");
const concat = require("gulp-concat");

const descriptions = {
  aside: `This is for Eased Layout Framework that support control aside as fixed-position or normal sidebar.
               - css file handles positioning left or right, collapsing, setting full height or width, disabling transition and setting background as white or black for asides.
               - js file manages interactive behavior like opening, closing, toggling panels, and applying optional background overlays for asides.
               Both files work together—CSS for appearance, JavaScript for functionality. Perfect for implementing aside.`,

  "basic-reset": `Basic CSS Reset with normalizes default browser styling by setting \`box-sizing: border-box\` for all elements and removing default margins from common HTML tags.`,

  "column-count": `This is for creating responsive multi-column-based layouts using the CSS column-count property with \`column-gap: 0\` as default.`,

  debugger: `A minimal CSS utility framework designed for visual debugging. It outlines elements with distinct colors for various states (hover, focus, active, invalid, etc.), 
                disables transitions/animations, and includes helper classes for color and pseudo-element inspection. Ideal for UI debugging and layout visualization.`,

  dragbar: `This is for make a resizable grid layouts.
                - CSS file defines styles for vertical and horizontal dragbars.
                - JS file adds interactive mouse-driven resizing for grid rows and columns.
                Both files are required for proper functionality—CSS for styling and layout, JavaScript for interactive behavior. Ideal for building flexible, user-resizable interfaces.`,

  focus: `It enhances focus visibility across interactive elements. It applies consistent and accessible outlines for general focus states, buttons, links, and common ARIA roles.
                This extension improves keyboard navigation clarity and supports better accessibility in user interfaces.`,

  "grid.flex": `This is for creating responsive grid layouts using CSS Flexbox.`,

  "grid.float": `This is for creating responsive grid layouts using CSS float.`,

  "grid.grid": `This is for creating responsive grid layouts using CSS Grid.`,

  helpers: `It provides a set of utility classes for common layout tasks, including typography, font styles, text alignment, offsets, margins, paddings, and more.
                This CSS file is designed to work seamlessly with the Eased Layout CSS Library (Or without), allowing for easy integration into existing projects.`,

  navbar: `Pure CSS for multi-level navigation menus, featuring hover-activated submenus, adaptable horizontal/vertical with or without .vertical/.horizontal classes, and indicator arrows.
                Valid Approaches:
                (i) nav ul
                (ii) [role="navigation"] ul
                (ii) ul[role="navigation"]`,

  print: `It is a part of Eased Layout Framework designed to optimize layout and styling for printed pages. It offers utility classes for display, spacing, 
                text formatting, borders, visibility, and page breaks, all scoped within @media print. Use it with the core framework to create clean, customizable print outputs.`,

  restore: `restore-box-sizing.css, restore-margins.css, and restore-semantic-layout.css restore default box-sizing, margins, and semantic layout behaviors respectively for consistent styling across browsers in the Eased Layout Framework.`,

  "semantic-layout": `It focuses on most minimalistic styling common HTML5 semantic elements such as header, footer, main, section, and article, along with div.container, allowing for clean and adaptable layouts.`,
  "semantic-layout.js": `This JavaScript fallback module provides layout support for browsers that do not support Flexbox. It dynamically adjusts element widths based on the pre-defined
                \`window.layoutConfig\` object, using its \`singleAsideWidth\` and \`doubleAsideWidth\` properties. It also applies float-based behavior to semantic layout elements
                such as <aside>, <main>, <section>, and <article>, effectively simulating a responsive layout using traditional CSS float techniques.`,

  "stretched-link": `It provides a CSS-only solution for creating a stretched link effect on elements.`,
  bundle: `eased-layout.css and eased-layout.js are concatenated bundles of core styles and scripts for the Eased Layout Framework.
                These files combine essential layout, accessibility, reset, print, and helper utilities to streamline usage in production deployments.`,
};

// Remove existing /*! ... */ header at the very top
const stripHeader = () =>
  through2.obj(function (file, _, cb) {
    if (file.isBuffer()) {
      let contents = file.contents.toString();
      contents = contents.replace(/^\/\*![\s\S]*?\*\/\s*/, "");
      file.contents = Buffer.from(contents);
    }
    cb(null, file);
  });

function createHeader(filePath) {
  const fileName = filePath.replace(/\\/g, "/").split("/").pop();
  const folder = filePath.replace(/\\/g, "/").split("/")[0]; // first segment (src folder is base)

  // If the file is one of the bundles, use the descriptions.bundle
  if (
    fileName === "eased-layout.css" ||
    fileName === "eased-layout.min.css" ||
    fileName === "eased-layout.js" ||
    fileName === "eased-layout.min.js"
  ) {
    return `/*!
 * Eased Layout Framework v1.0.0
 * File Name: ${fileName}
 * Description: ${descriptions.bundle}
 * Author: Muhammad Sultan Al Mahfuz
 * Copyright (c) 2025 by Muhammad Sultan Al Mahfuz
 * Licensed under the MIT License
 *
 * Full documentation and usage instructions are available in the \`README.md\` file. (https://github.com/mahfuz225bd/eased-layout?tab=readme-ov-file#documentation)
*/\n\n`;
  }

  // Use description by folder, fallback generic description
  const key =
    fileName.endsWith(".js") && descriptions[fileName] ? fileName : folder;
  let description =
    descriptions[key] || `File ${fileName} for the Eased Layout Framework.`;

  // Replace placeholders if needed, e.g. for restore folder multiple files
  if (folder === "restore") {
    if (fileName.includes("box-sizing"))
      description = `restore-box-sizing.css restores default box-sizing for consistent styling across browsers in the Eased Layout Framework.`;
    else if (fileName.includes("margins"))
      description = `restore-margins.css resets default margins for consistent styling across browsers in the Eased Layout Framework.`;
    else if (fileName.includes("semantic-layout"))
      description = `restore-semantic-layout.css restores semantic layout behaviors for consistent styling across browsers in the Eased Layout Framework.`;
  }

  return `/*!
 * Eased Layout Framework v1.0.0
 * File Name: ${fileName}
 * Description: ${description}
 * Author: Muhammad Sultan Al Mahfuz
 * Copyright (c) 2025 by Muhammad Sultan Al Mahfuz
 * Licensed under the MIT License
 *
 * Full documentation and usage instructions are available in the \`README.md\` file. (https://github.com/mahfuz225bd/eased-layout?tab=readme-ov-file#documentation)
*/\n\n`;
}

function addHeader() {
  return through2.obj(function (file, _, cb) {
    if (file.isBuffer()) {
      const header = createHeader(file.relative);
      file.contents = Buffer.concat([Buffer.from(header), file.contents]);
    }
    cb(null, file);
  });
}

function css() {
  return src("src/**/*.css", { base: "src" })
    .pipe(stripHeader())
    .pipe(addHeader())
    .pipe(dest("dist"))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(stripHeader())
    .pipe(addHeader())
    .pipe(dest("dist"));
}

function js() {
  return src("src/**/*.js", { base: "src" })
    .pipe(stripHeader())
    .pipe(addHeader())
    .pipe(dest("dist"))
    .pipe(terser())
    .pipe(rename({ suffix: ".min" }))
    .pipe(stripHeader())
    .pipe(addHeader())
    .pipe(dest("dist"));
}

function bundleCSS() {
  // Ordered list of CSS files for bundling
  const cssFiles = [
    "src/basic-reset/basic-reset.css",
    "src/focus/focus.css",
    "src/semantic-layout/semantic-layout.css",
    "src/aside/aside.css",
    "src/navbar/navbar.css",
    "src/helpers/helpers.css",
    "src/stretched-link/stretched-link.css",
    "src/dragbar/dragbar.css",
    "src/print/print.css",
    "src/grid/grid.css",
    "src/column-count/column-count.css",
    "src/debugger/debugger.css",
  ];

  return src(cssFiles, { allowEmpty: true })
    .pipe(stripHeader())
    .pipe(concat("eased-layout.css"))
    .pipe(addHeader())
    .pipe(dest("dist"))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(stripHeader())
    .pipe(addHeader())
    .pipe(dest("dist"));
}

function bundleJS() {
  // Ordered list of JS files for bundling
  const jsFiles = [
    "src/semantic-layout/semantic-layout.js",
    "src/aside/aside.js",
    "src/dragbar/dragbar.js",
    "src/grid/grid.js",
  ];

  return src(jsFiles, { allowEmpty: true })
    .pipe(stripHeader())
    .pipe(concat("eased-layout.js"))
    .pipe(addHeader())
    .pipe(dest("dist"))
    .pipe(terser())
    .pipe(rename({ suffix: ".min" }))
    .pipe(stripHeader())
    .pipe(addHeader())
    .pipe(dest("dist"));
}

function watchFiles() {
  watch("src/**/*.css", exports.css);
  watch("src/**/*.js", exports.js);
}

exports.css = parallel(css, bundleCSS);
exports.js = parallel(js, bundleJS);
exports.watch = watchFiles;
exports.default = parallel(exports.css, exports.js);
