# CS Map

A polished interactive web map that visualizes core areas of computer science, research connections, and local/global context for UVT.

## Overview

This mini website presents a multilevel Computer Science map with a dark editorial theme, area cards, and expandable modal details. It is built with:

- `index.html` — page structure and content
- `style.css` — visual design, responsive layout, and modal styling
- `javascript.js` — dynamic card rendering and modal interactions

## Features

- Responsive dark theme with gold accent styling
- Interactive area cards for CS fields like Algorithms, AI, Systems, Data, Security, and Software Engineering
- Expandable modal with extended local and global research details
- Animated UI touches and background effects for a polished presentation

## Files

- `index.html`
  - Defines the page layout, header, stat bar, dependency graph, card container, and modal structure.
  - Loads `style.css` and `javascript.js`.

- `style.css`
  - Contains the theme, typography, grid layout, responsive breakpoints, and modal styling.
  - Includes animated background, cards, buttons, and hover effects.

- `javascript.js`
  - Builds area cards dynamically from a data list.
  - Handles click events to open and close the modal.
  - Stores extended modal content for each CS area.

## How to Use

1. Open `index.html` in a browser.
2. Scroll through the CS area cards.
3. Click the **`ⓘ Expand`** button on a card to open the modal with deeper details.
4. Close the modal with the `×` button, clicking outside the modal, or pressing `Escape`.

## Notes

- Designed for desktop and mobile layouts.
- Content is static and self-contained; no build tools or backend are required.

## Credits

Created as a lightweight interactive information display for a Computer Science map concept.
