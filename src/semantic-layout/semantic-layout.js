/*!
 * Eased Layout Framework v1.0.0
 * File Name: semantic-layout.js
 * Description: This JavaScript fallback module provides layout support for browsers that do not support Flexbox. It dynamically adjusts element widths based on the pre-defined
 *              `window.layoutConfig` object, using its `singleAsideWidth` and `doubleAsideWidth` properties. It also applies float-based behavior to semantic layout elements
 *              such as <aside>, <main>, <section>, and <article>, effectively simulating a responsive layout using traditional CSS float techniques.
 * Copyright (c) 2025 by Muhammad Sultan Al Mahfuz
 * Licensed under the MIT License
 *
 * Full documentation and usage instructions are available in the `README.md` file. (https://github.com/mahfuz225bd/eased-layout?tab=readme-ov-file#documentation)
 */

function isFlexNotSupported() {
  const el = document.createElement("div");
  el.style.display = "flex";
  return el.style.display != "flex";
}

if (isFlexNotSupported()) {
  window.layoutConfig = {
    singleAsideWidth: 230,
    doubleAsideWidth: 200,
  };

  window.updateLayoutConfig = function (newConfig) {
    if (newConfig.singleAsideWidth !== undefined) {
      window.layoutConfig.singleAsideWidth = newConfig.singleAsideWidth;
    }
    if (newConfig.doubleAsideWidth !== undefined) {
      window.layoutConfig.doubleAsideWidth = newConfig.doubleAsideWidth;
    }
    updateLayoutWidths();
  };

  function applyFloatLeft() {
    var elements = document.querySelectorAll(
      "aside, .container main, main .container, section, article"
    );
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.cssFloat = "left";
    }
  }

  function getPixelValue(value, total) {
    if (typeof value === "number") {
      return value;
    }
    if (typeof value === "string" && value.indexOf("%") !== -1) {
      var percent = parseFloat(value);
      return total * (percent / 100);
    }
    return 0;
  }

  function updateLayoutWidths() {
    var isSmallerDevice = window.innerWidth <= 900;
    var containers = document.querySelectorAll(".container, main");
    var singleAsideWidth = window.layoutConfig.singleAsideWidth;
    var doubleAsideWidth = window.layoutConfig.doubleAsideWidth;

    for (var i = 0; i < containers.length; i++) {
      var parent = containers[i];
      var asides = parent.querySelectorAll(":scope > aside");
      var mainContent = parent.querySelector(
        ":scope > main, :scope > .container, :scope > section, :scope > article"
      );
      if (!mainContent) continue;

      var parentWidth = parent.clientWidth;

      if (isSmallerDevice) {
        for (var j = 0; j < asides.length; j++) {
          asides[j].style.width = "100%";
        }
        mainContent.style.width = "100%";
      } else {
        if (asides.length === 2) {
          var asideWidth = getPixelValue(doubleAsideWidth, parentWidth);
          var mainWidth = parentWidth - 2 * asideWidth;
          for (var k = 0; k < asides.length; k++) {
            asides[k].style.width = asideWidth + "px";
          }
          mainContent.style.width = mainWidth + "px";
        } else if (asides.length === 1) {
          var asideWidthSingle = getPixelValue(singleAsideWidth, parentWidth);
          var mainWidthSingle = parentWidth - asideWidthSingle;
          asides[0].style.width = asideWidthSingle + "px";
          mainContent.style.width = mainWidthSingle + "px";
        } else {
          mainContent.style.width = parentWidth + "px";
        }
      }
    }
  }

  window.onload = function () {
    applyFloatLeft();
    updateLayoutWidths();
  };

  window.onresize = updateLayoutWidths;
}
