"use strict";
/// <reference types="@figma/plugin-typings" />
// If using a UI (the __html__ variable is injected when a ui.html file is provided)
if (typeof __html__ !== "undefined") {
    figma.showUI(__html__, { width: 300, height: 200 });
}
// Plugin logic: Log the names of all selected nodes.
const selection = figma.currentPage.selection;
selection.forEach((node) => {
    console.log("Selected node:", node.name);
});
// Close the plugin after work is done.
figma.closePlugin();
