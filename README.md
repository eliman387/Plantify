# Plantify

## Overview

An app that allows the user to search for house plants in the New York City area, view details on various common household plants and add them to your favorites.

## MVP

<br>

### Features

- Users will be able to create an account
- A library list of 50+ common houshold plants
- A search bar for quickly finding the houseplant you need
- A way to filter and browse plants by genus/types
- A way to filter plants based on availability at local stores

### Challenges

- A way to find a good collection of different houseplants
- Authentican for users

<br>

### Libraries and Dependencies

|     Library     | Description                                                 |
| :-------------: | :---------------------------------------------------------- |
|      React      | _Framework that the front-end client side is built on_      |
|  React Router   | _Dependency that allows for linking and routing components_ |
| React Bootstrap | _Library that has built-out UI React Components_            |
|   PostgreSQL    | _Database that the back-end of the app is built on_         |
|      Ruby       | _Back-end language that will be used_                       |
|      Rails      | _Back-end MVC framework that Ruby will be built on_         |

<br>

### Client (Front End)

#### Wireframes

- Homepage (Desktop)

![Homepage Desktop](</assets/images/HOMEPAGE_WIREFRAME_(Desktop).png>)

- Browse Page (Desktop)

![Browse Plants Page](</assets/images/Browse_Page_(Desktop).png>)

- Browse Store Page (Desktop)

![Browse Store Page](</assets/images/Local_Store_Page_(Desktop).png>)

- Detailed Plant Page (Desktop)

![Detailed Plant Page](</assets/images/Detailed_Plant_Page(Desktop).png>)

- Detailed Store Page (Desktop)

![Detailed Store Page](</assets/images/Store_Page_(Desktop).png>)

#### Component Hierarchy

```structure

client
|__ src/
      |__ components /
            |__ Header.jsx
            |__ PlantCard.jsx
            |__ Map.jsx
      |__ containers /
            |__ MainContainer.jsx
      |__ layouts /
            |__ Layout.jsx
      |__ screens /
            |__ HomePage.jsx
            |__ BrowsePlantPage.jsx
            |__ DetailedPlantPage.jsx
            |__ BrowseStorePage.jsx
            |__ DetailedStorePage.jsx
            |__ Favorites.jsx
            |__ AccountPage.jsx
            |__ Login.jsx
            |__ Register.jsx
      |__ services /
            |__ apiConfig.js
            |__ auth.js
            |__ plants.jsx
            |__ stores.jsx

```

#### Component Tree

[Component Tree](https://whimsical.com/plantify-5G4KEwXVNYpcEmfTQPNjVY@2Ux7TurymMmgWBBzGec1)

#### Time Estimates

| Task                     | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------ | :------: | :------------: | :-----------: | :---------: |
| Add Login Page           |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Add SignUp Page          |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Add Homepage             |    H     |     3 hrs      |     2 hrs     |     TBD     |
| Add Browse Plant Pge     |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Add Detailed Plant Page  |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Add Browse Store Page    |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Add Detailed Store Page  |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Add Account Page         |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Add Favorite Page        |    H     |     3 hrs      |     1 hrs     |     TBD     |
| CSS Animations           |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Creating Back-end Server |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Add Conntrollers         |    H     |     4 hrs      |     1 hrs     |     TBD     |
| Add Models               |    H     |     2 hrs      |     1 hrs     |     TBD     |
| Add Routes               |    H     |     2 hrs      |     1 hrs     |     TBD     |
| TOTAL                    |          |    ~38 hrs     |      TBD      |     TBD     |

<br>

### Server (Back End)

#### ERD Model

![PlantifyERD](https://lucid.app/publicSegments/view/a6dae1e1-2413-4014-830d-57df99cafbea/image.png)

<br>

---

## Post-MVP

- Care Tips section
- Add store hours in back-end and populate i detailed store page

---

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
