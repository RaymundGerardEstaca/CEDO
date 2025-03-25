"use strict";
/// <reference types="@figma/plugin-typings" />

// If a UI file is provided (via ui.html and manifest.json), __html__ is automatically injected.
// If you don't need a UI, you can remove this block and also remove the "ui" property from manifest.json.
if (typeof __html__ !== "undefined") {
    figma.showUI(__html__, { width: 300, height: 200 });
} else {
    console.log("No UI provided.");
}

// Log a message indicating the plugin loaded successfully.
console.log("Plugin loaded successfully!");

// Log the names of all selected nodes on the current Figma page.
const selection: readonly SceneNode[] = figma.currentPage.selection;
selection.forEach((node: SceneNode) => {
    console.log("Selected node:", node.name);
});

// Close the plugin when finished.
figma.closePlugin();
