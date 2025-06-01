/*!
 * Eased Layout Framework v1.0.0
 * File Name: aside.js
 * Description: This is for Eased Layout Framework that support control aside as fixed-position or normal sidebar.
               - css file handles positioning left or right, collapsing, setting full height or width, disabling transition and setting background as white or black for asides.
               - js file manages interactive behavior like opening, closing, toggling panels, and applying optional background overlays for asides.
               Both files work together—CSS for appearance, JavaScript for functionality. Perfect for implementing aside.
 * Author: Muhammad Sultan Al Mahfuz
 * Copyright (c) 2025 by Muhammad Sultan Al Mahfuz
 * Licensed under the MIT License
 *
 * Full documentation and usage instructions are available in the `README.md` file. (https://github.com/mahfuz225bd/eased-layout?tab=readme-ov-file#documentation)
*/

function openAside(asideSelector, otherElementOrElements) {
  var aside = document.querySelector(asideSelector);
  if (!aside) return;

  aside.style.width = "auto";
  aside.style.display = "block";

  // Check class manually
  var className = aside.className;

  if (className.indexOf("fixed-left") !== -1) {
    setTimeout(function () {
      var width = aside.offsetWidth + "px";
      var elements = getElements(otherElementOrElements);
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.marginLeft = width;

        var tag = elements[i].tagName.toLowerCase();
        if (tag === "header" || tag === "footer") {
          elements[i].style.width = "auto";
        }
      }
    }, 0);
  }

  if (className.indexOf("fixed-right") !== -1) {
    setTimeout(function () {
      var width = aside.offsetWidth + "px";
      var elements = getElements(otherElementOrElements);
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.marginRight = width;

        var tag = elements[i].tagName.toLowerCase();
        if (tag === "header" || tag === "footer") {
          elements[i].style.width = "auto";
        }
      }
    }, 0);
  }

  if (
    className.indexOf("body-bg-opacity") !== -1 &&
    (className.indexOf("fixed-left") !== -1 ||
      className.indexOf("fixed-right") !== -1)
  ) {
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  var btns = aside.querySelectorAll("*");
  for (var j = 0; j < btns.length; j++) {
    if (btns[j].className.indexOf("btn-close-aside") !== -1) {
      btns[j].onclick = function () {
        closeAside(asideSelector, otherElementOrElements);
      };
    }
  }
}

function closeAside(asideSelector, otherElementOrElements) {
  var aside = document.querySelector(asideSelector);
  if (!aside) return;

  aside.style.width = "0";
  aside.style.display = "none";

  var elements = getElements(otherElementOrElements);
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.marginLeft = "0";
    elements[i].style.marginRight = "0";
  }

  if (aside.className.indexOf("body-bg-opacity") !== -1) {
    document.body.style.backgroundColor = "initial";
  }
}

function toggleAside(asideSelector, otherElementOrElements, showArrow) {
  var aside = document.querySelector(asideSelector);
  if (aside.style.width == "0px" || aside.style.width == "") {
    openAside(asideSelector, otherElementOrElements);
  } else {
    closeAside(asideSelector, otherElementOrElements);
  }
}

function isAsideOpen(asideSelector) {
  return document.querySelector(asideSelector).offsetWidth != 0;
}

function getElements(input) {
  var results = [];

  if (!input) {
    return results; // Return empty array if input is null or undefined
  }

  if (typeof input === "string") {
    var found = document.querySelectorAll(input);
    for (var i = 0; i < found.length; i++) {
      results.push(found[i]);
    }
  } else if (input.nodeType === 1) {
    results.push(input);
  } else if (typeof input.length === "number") {
    for (var j = 0; j < input.length; j++) {
      var nested = getElements(input[j]);
      for (var k = 0; k < nested.length; k++) {
        results.push(nested[k]);
      }
    }
  }

  return results;
}
