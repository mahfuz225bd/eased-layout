/*!
 * Eased Layout Framework v1.0.0
 * File Name: eased-layout.js
 * Description: eased-layout.css and eased-layout.js are concatenated bundles of core styles and scripts for the Eased Layout Framework.
                These files combine essential layout, accessibility, reset, print, and helper utilities to streamline usage in production deployments.
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

function setRowHeightsForAllGrids() {
  document.querySelectorAll(".resizable-grid").forEach((grid) => {
    const children = Array.from(grid.children).filter(
      (el) => !el.matches('[role="separator"][aria-orientation="horizontal"]')
    );
    const rowHeightPercent = 100 / children.length;
    children.forEach((row) => {
      row.style.height = `${rowHeightPercent}%`;
    });
  });
}

function initVerticalDrag(bar, leftPanel, rightPanel) {
  let isDragging = false;

  bar.addEventListener("mousedown", (e) => {
    e.preventDefault();
    isDragging = true;
    document.body.style.userSelect = "none";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const container = bar.parentElement;
    const rect = container.getBoundingClientRect();
    const pointerX = e.clientX - rect.left;

    const leftRect = leftPanel.getBoundingClientRect();
    const rightRect = rightPanel.getBoundingClientRect();

    const leftStart = leftRect.left - rect.left;
    const totalWidth = leftRect.width + rightRect.width;
    const newLeftWidth = pointerX - leftStart;
    const min = 50;

    if (newLeftWidth > min && newLeftWidth < totalWidth - min) {
      const containerWidth = container.offsetWidth;
      leftPanel.style.width = (newLeftWidth / containerWidth) * 100 + "%";
      rightPanel.style.width =
        ((totalWidth - newLeftWidth) / containerWidth) * 100 + "%";
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    document.body.style.userSelect = "";
  });
}

function initHorizontalDrag(bar, topRow, bottomRow, grid) {
  let isDragging = false;

  bar.addEventListener("mousedown", (e) => {
    e.preventDefault();
    isDragging = true;
    document.body.style.userSelect = "none";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const rect = grid.getBoundingClientRect();
    const pointerY = e.clientY - rect.top;

    const totalHeight = rect.height;
    const newTopHeight = pointerY;
    const min = 50;

    if (newTopHeight > min && newTopHeight < totalHeight - min) {
      const topPercent = (newTopHeight / totalHeight) * 100;
      const bottomPercent = 100 - topPercent;

      topRow.style.height = `${topPercent}%`;
      bottomRow.style.height = `${bottomPercent}%`;
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    document.body.style.userSelect = "";
  });
}

function initAllGrids() {
  setRowHeightsForAllGrids();

  document.querySelectorAll(".resizable-grid").forEach((grid) => {
    const children = Array.from(grid.children).filter(
      (el) => !el.matches('[role="separator"][aria-orientation="horizontal"]')
    );

    const hBars = grid.querySelectorAll(
      '[role="separator"][aria-orientation="horizontal"]'
    );

    // Horizontal drag
    hBars.forEach((bar, i) => {
      if (children[i + 1]) {
        initHorizontalDrag(bar, children[i], children[i + 1], grid);
      }
    });

    // Vertical drag within each row
    children.forEach((row) => {
      const panels = Array.from(row.children).filter(
        (el) => !el.matches('[role="separator"][aria-orientation="vertical"]')
      );
      const bars = row.querySelectorAll(
        '[role="separator"][aria-orientation="vertical"]'
      );
      bars.forEach((bar, i) => {
        if (panels[i + 1]) {
          initVerticalDrag(bar, panels[i], panels[i + 1]);
        }
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", initAllGrids);
