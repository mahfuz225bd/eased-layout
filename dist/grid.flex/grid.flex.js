/*!
 * Eased Layout Framework v1.0.0
 * File Name: grid.flex.js
 * Description: This is for creating responsive grid layouts using CSS Flexbox.
 * Author: Muhammad Sultan Al Mahfuz
 * Copyright (c) 2025 by Muhammad Sultan Al Mahfuz
 * Licensed under the MIT License
 *
 * Full documentation and usage instructions are available in the `README.md` file. (https://github.com/mahfuz225bd/eased-layout?tab=readme-ov-file#documentation)
*/

function adjustColumnWidthsIfAuto() {
  var targetElements = document.querySelectorAll(".total-columns-auto");
  for (var i = 0; i < targetElements.length; i++) {
    var el = targetElements[i];
    var children = el.children;
    var childrenCount = children.length;

    if (childrenCount === 0) continue;

    var totalWidth = el.clientWidth;
    var childWidth = totalWidth / childrenCount;

    for (var j = 0; j < children.length; j++) {
      children[j].style.flex = "0 0 " + childWidth + "px";
      children[j].style.width = childWidth + 'px';
    }
  }
}

// Execute adjustColumnWidthsIfAuto on DOM ready
document.addEventListener("DOMContentLoaded", adjustColumnWidthsIfAuto);

// Execute adjustColumnWidthsIfAuto on window resize
window.addEventListener("resize", adjustColumnWidthsIfAuto);
