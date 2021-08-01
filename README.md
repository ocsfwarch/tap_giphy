# TapGiphy

The purpose of this project is to create a GIF search engine using `Giphy's public API`.

## Description

Stash has decided to pivot from investing to the GIF-search-engine space,
and needs your help to build out a web-app prototype for their new product.

## Requirements

1. The app serves a page consisting of a simple form with a text field and a
   button.
2. When the user enters text, use Javascript to request some GIFs from the
   Giphy API
3. When the API responds, populate the page with GIFs.
4. A user can click a GIF to add it to their "favorites".
5. A user can view another page which displays their favorite GIFs.

## Acceptance Criteria

| Section             | Description                                                                            |
| ------------------- | -------------------------------------------------------------------------------------- |
| Requirements-Review | This app does something interesting or useful.                                         |
|                     | This app is responsive for mobile and desktop devices.                                 |
|                     | The content on the app is clear and readable.                                          |
|                     | The GitHub repository includes a comprehensive README                                  |
|                     | The app includes a landing page that explains what the app does and how to get started |
|                     | The app includes a Favicon.                                                            |
|                     | The app works across different browsers                                                |
| Code-Review         | The code follows consistent standards (use of indentation, semicolons, etc).           |
|                     | There are no errors in the console when the app is running.                            |
|                     | The code follows sound architectural patterns.                                         |
|                     | The code has comments where appropriate.                                               |

## Use Case 1 - Search for GIFs

- This use case starts when the user selects Search from the menu.
- The system displays a GIF search form.
- The system displays an empty results area.
- The user enters search term(s) in the search input element.
- The user selects the `Search` command button.
- The system performs a fetch to the GIF search api.
- The system displays the search results.
- This use case ends when the system has displayed the search results.

## Use Case 2 - Add to Favorites

- This use case starts when the user selects the `Add To Favorites` element.
- The system identifies the selected GIF.
- The system saves the selected GIF to the favorites list.
- The system displays a status message to the user.
- This use case ends when the status message is displayed to the user.

## Use Case 3 - Display Favorites

- This use case starts when the user selects `Favorites` from the menu.
- The system checks for available favorites.
- The system displays the available favorites to the user.
- This use case ends when the available favorites are displayed to the user.

## Use Case 4 - Remove from Favorites

- This use case starts when the user selects the `Remove From Favorites` element.
- The system identifies the selected GIF.
- The system removes the selected GIF to the favorites list.
- The system displays a status message to the user.
- The system displays an updated display of the available favorites.
- This use case ends when the system has updated the favorites.

## Areas of Interest

| Section   | Description                                                 |
| --------- | ----------------------------------------------------------- |
| Home      | This is the Landing Page and provides a brief introduction. |
| Search    | This is where users are allowed to search for GIFs.         |
| Favorites | This is where users can view their saved favorite GIFs.     |

## Design and Architecture

- Component Layout Diagram
  ![Component Layout](https://github.com/ocsfwarch/tap_giphy/blob/master/project_docs/component_layout.png?raw=true)

## Installation

1. Fork and clone this repository.
2. Run `npm install` to install project dependencies.
3. Run `npm start` to start the application.

## Running tests

- npm test

## App Images

![Landing Page](https://github.com/ocsfwarch/tap_giphy/blob/master/project_docs/landing_page.png?raw=true)

![Search Page](https://github.com/ocsfwarch/tap_giphy/blob/master/project_docs/search_page.png?raw=true)

![Favorites Page](https://github.com/ocsfwarch/tap_giphy/blob/master/project_docs/favorite_page.png?raw=true)

## References

**[Giphy Docs](https://developers.giphy.com/docs/sdk)**
