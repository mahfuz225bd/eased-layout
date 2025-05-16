/*!
 * Eased Layout CSS Library v1.0.0
 * Extension: Dragbar
 * Description: An Extension for creating resizable grid layouts with dragbars. This extension allows users to resize grid items (both horizontally and vertically) by dragging the dividers between them, providing a flexible and interactive layout experience.
 * Author: Muhammad Sultan Al Mahfuz
 * Copyright (c) 2025 by Muhammad Sultan Al Mahfuz
 * Licensed under the MIT License
 *
 * Full documentation and usage instructions are available in the `README.md` file. (https://github.com/mahfuz225bd/eased-layout?tab=readme-ov-file#documentation)
*/

function setRowHeightsForAllGrids() {
  var grids = document.getElementsByClassName("resizable-grid");
  for (var i = 0; i < grids.length; i++) {
    var grid = grids[i];
    var children = [];
    var gridChildren = grid.children;
    for (var j = 0; j < gridChildren.length; j++) {
      var el = gridChildren[j];
      if (!(el.getAttribute("role") === "separator" && el.getAttribute("aria-orientation") === "horizontal")) {
        children.push(el);
      }
    }

    var rowHeightPercent = 100 / children.length;
    for (var k = 0; k < children.length; k++) {
      children[k].style.height = rowHeightPercent + "%";
    }
  }
}

function initVerticalDrag(bar, leftPanel, rightPanel) {
  var isDragging = false;

  bar.onmousedown = function(e) {
    e.preventDefault();
    isDragging = true;
    document.body.style.userSelect = "none";
  };

  document.onmousemove = function(e) {
    if (!isDragging) return;

    var container = bar.parentNode;
    var rect = container.getBoundingClientRect();
    var pointerX = e.clientX - rect.left;

    var leftRect = leftPanel.getBoundingClientRect();
    var rightRect = rightPanel.getBoundingClientRect();

    var leftStart = leftRect.left - rect.left;
    var totalWidth = leftRect.width + rightRect.width;
    var newLeftWidth = pointerX - leftStart;
    var min = 50;

    if (newLeftWidth > min && newLeftWidth < totalWidth - min) {
      var containerWidth = container.offsetWidth;
      leftPanel.style.width = (newLeftWidth / containerWidth) * 100 + "%";
      rightPanel.style.width = ((totalWidth - newLeftWidth) / containerWidth) * 100 + "%";
    }
  };

  document.onmouseup = function() {
    isDragging = false;
    document.body.style.userSelect = "";
  };
}

function initHorizontalDrag(bar, topRow, bottomRow, grid) {
  var isDragging = false;

  bar.onmousedown = function(e) {
    e.preventDefault();
    isDragging = true;
    document.body.style.userSelect = "none";
  };

  document.onmousemove = function(e) {
    if (!isDragging) return;

    var rect = grid.getBoundingClientRect();
    var pointerY = e.clientY - rect.top;
    var totalHeight = rect.height;
    var newTopHeight = pointerY;
    var min = 50;

    if (newTopHeight > min && newTopHeight < totalHeight - min) {
      var topPercent = (newTopHeight / totalHeight) * 100;
      var bottomPercent = 100 - topPercent;

      topRow.style.height = topPercent + "%";
      bottomRow.style.height = bottomPercent + "%";
    }
  };

  document.onmouseup = function() {
    isDragging = false;
    document.body.style.userSelect = "";
  };
}

function applyDragbarAll() {
  setRowHeightsForAllGrids();

  var grids = document.getElementsByClassName("resizable-grid");
  for (var i = 0; i < grids.length; i++) {
    var grid = grids[i];
    var children = [];
    var gridChildren = grid.children;

    for (var j = 0; j < gridChildren.length; j++) {
      var el = gridChildren[j];
      if (!(el.getAttribute("role") === "separator" && el.getAttribute("aria-orientation") === "horizontal")) {
        children.push(el);
      }
    }

    var hBars = grid.querySelectorAll('[role="separator"][aria-orientation="horizontal"]');
    for (var k = 0; k < hBars.length; k++) {
      var bar = hBars[k];
      if (children[k + 1]) {
        initHorizontalDrag(bar, children[k], children[k + 1], grid);
      }
    }

    for (var m = 0; m < children.length; m++) {
      var row = children[m];
      var panels = [];
      var rowChildren = row.children;

      for (var n = 0; n < rowChildren.length; n++) {
        var panel = rowChildren[n];
        if (!(panel.getAttribute("role") === "separator" && panel.getAttribute("aria-orientation") === "vertical")) {
          panels.push(panel);
        }
      }

      var bars = row.querySelectorAll('[role="separator"][aria-orientation="vertical"]');
      for (var p = 0; p < bars.length; p++) {
        var vBar = bars[p];
        if (panels[p + 1]) {
          initVerticalDrag(vBar, panels[p], panels[p + 1]);
        }
      }
    }
  }
}

if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", function() {
    applyDragbarAll();
  });
} else {
  window.attachEvent("onload", applyDragbarAll);
}
