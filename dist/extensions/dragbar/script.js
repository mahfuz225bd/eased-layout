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

function applyDragbarAll() {
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

document.addEventListener("DOMContentLoaded", () => {
  applyDragbarAll();
});
