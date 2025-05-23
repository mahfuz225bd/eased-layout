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

function layoutGrid(grid) {
  const rows = [];
  const children = Array.from(grid.children);

  for (let i = 0; i < children.length; i++) {
    if (children[i].getAttribute("role") !== "separator") {
      rows.push(children[i]);
    }
  }

  const rowHeight = 100 / rows.length;
  rows.forEach((row, i) => {
    row.style.top = `${i * rowHeight}%`;
    row.style.height = `${rowHeight}%`;

    layoutRow(row);
  });

  const hSeparators = grid.querySelectorAll(
    '[role="separator"][aria-orientation="horizontal"]'
  );
  hSeparators.forEach((sep, i) => {
    sep.style.top = `${(i + 1) * rowHeight}%`;
    sep.style.height = "4px";
    sep.style.position = "absolute";

    sep.addEventListener("mousedown", (e) => {
      e.preventDefault();
      const startY = e.clientY;
      const topRow = rows[i];
      const bottomRow = rows[i + 1];
      const gridHeight = grid.offsetHeight;

      const topStart = topRow.offsetHeight;

      function onMouseMove(e) {
        const dy = e.clientY - startY;
        const newTop = topStart + dy;
        const newTopPct = (newTop / gridHeight) * 100;
        const newBottomPct = 100 - newTopPct;

        topRow.style.height = `${newTopPct}%`;
        bottomRow.style.top = `${newTopPct + 1}%`;
        bottomRow.style.height = `${newBottomPct - 1}%`;
        sep.style.top = `${newTopPct}%`;
      }

      function onMouseUp() {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      }

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    });
  });
}

function layoutRow(row) {
  const children = Array.from(row.children);
  const panels = [];
  const separators = [];

  children.forEach((child) => {
    if (child.getAttribute("role") === "separator") {
      separators.push(child);
    } else {
      panels.push(child);
    }
  });

  let totalWidth = 0;
  panels.forEach((panel, i) => {
    const width = parseFloat(panel.style.width) || 100 / panels.length;
    panel.style.left = `${totalWidth}%`;
    panel.style.width = `${width}%`;
    totalWidth += width;

    if (separators[i]) {
      separators[i].style.left = `${totalWidth}%`;
      separators[i].style.width = "4px";

      separators[i].addEventListener("mousedown", (e) => {
        e.preventDefault();
        const startX = e.clientX;
        const leftPanel = panels[i];
        const rightPanel = panels[i + 1];
        const rowWidth = row.offsetWidth;

        const leftStart = leftPanel.offsetWidth;

        function onMouseMove(e) {
          const dx = e.clientX - startX;
          const newLeft = leftStart + dx;
          const leftPct = (newLeft / rowWidth) * 100;
          const rightPct = 100 - leftPct;

          leftPanel.style.width = `${leftPct}%`;
          rightPanel.style.left = `${leftPct + 0.5}%`;
          rightPanel.style.width = `${rightPct - 0.5}%`;
          separators[i].style.left = `${leftPct}%`;
        }

        function onMouseUp() {
          document.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseup", onMouseUp);
        }

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      });
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".resizable-grid").forEach(layoutGrid);
});
