const applyFlexVendorPrefixes = () => {
  // Get all elements with display: flex
  const allElements = document.querySelectorAll("*");

  // List of flex-related properties to check and apply vendor prefixes
  const flexPropertiesToApply = [
    "flex", // flex shorthand (flex-grow, flex-shrink, flex-basis)
    "order", // controls the order of flex items within a flex container
    "flexFlow", // shorthand for flex-direction and flex-wrap
    "justifySelf", // align-self along inline axis
    "alignSelf", // alignment of the item along the cross-axis
    "gap", // space between flex items
    "placeItems", // shorthand for align-items and justify-items
    "placeContent", // shorthand for align-content and justify-content
    "placeSelf", // shorthand for align-self and justify-self for items
  ];

  // Loop through each element with display: flex
  allElements.forEach((element) => {
    const computedStyle = window.getComputedStyle(element);

    // Check if the element is using display: flex (including prefixed versions)
    if (
      computedStyle.display === "flex" ||
      computedStyle.display === "-webkit-flex" ||
      computedStyle.display === "-ms-flexbox" ||
      computedStyle.display === "-moz-flex"
    ) {
      // Loop through each property in the flexPropertiesToApply array
      flexPropertiesToApply.forEach((prop) => {
        const camelCaseProp = prop.replace(/([A-Z])/g, "-$1").toLowerCase(); // Convert camelCase to kebab-case for property names

        // Check if the property exists in the computed styles
        if (computedStyle[camelCaseProp]) {
          const value = computedStyle[camelCaseProp];

          // Apply the property and its vendor prefixes if the value exists
          element.style[camelCaseProp] = value;

          // Add vendor prefixes
          element.style[`Webkit${prop[0].toUpperCase() + prop.slice(1)}`] =
            value;
          element.style[`Moz${prop[0].toUpperCase() + prop.slice(1)}`] = value;
          element.style[`ms${prop[0].toUpperCase() + prop.slice(1)}`] = value;
        }
      });
    }
  });
};

window.onload = function () {
  var rows = document.getElementsByClassName("row");
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var totalColumnsClass = row.className.match(/total-columns-(\d+)/);
    if (totalColumnsClass) {
      var columnCount = parseInt(totalColumnsClass[1]);
      if (columnCount > 0) {
        adjustColumns(row, columnCount);
      }
    }
  }

  function adjustColumns(row, columnCount) {
    var columns = row.children;
    var totalColumns = columns.length;
    var columnWidth = 100 / columnCount;

    for (var i = 0; i < totalColumns; i++) {
      columns[i].style.width = columnWidth + "%";
    }
  }
};

// Call the function
applyFlexVendorPrefixes();
