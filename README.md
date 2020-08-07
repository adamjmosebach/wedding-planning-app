# Vendor Connector - readme

- [Project Planning](#Project-Planning)
  - [Overview](#Overview)
  - [Wireframes](#Wireframes)
  - [MVP](#MVP)
    - [Goals](#Goals)
    - [Libraries](#Libraries)
    - [Data](#Data)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
    - [Helper Functions](#Helper-Functions)
  - [Post-MVP](#Post-MVP)
- [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)

<br>

## Project Planning

<br>

### Overview

**Vendor Connector** is an easy-to-use app whereby a person who is considering a wedding vendor can connect with people who have already used that vendor. They can hopefullly then gain more insight and make a more informed decision on whether on not to use them on their special day.

<br>

### Wireframes:


#### Desktop

- [Desktop landing](https://wireframe.cc/FooNMC)

- [Create Reviews](https://wireframe.cc/6Dlx53)

- [Read Reviews](https://wireframe.cc/XL2QiL)

- [Browse Reviews](https://wireframe.cc/1ecskb)

#### Mobile

- [Mobile landing](https://wireframe.cc/9Uf1yg)

#### Tablet

- [Tablet landing](https://wireframe.cc/E2Srqb)

<br>

### MVP

The **Vendor Connector**'s goal is simple: connect someone planning an event to someone who's done it already: make them more informed about who they choose as vendors.

<br>

#### Goals

A user should be able to:
- Create a review for each of their vendors
- Be able to browse vendor reviews
- Be able to connect with the person who made the review

<br>

#### Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | Allows for different paths for components
|  Axios  |  Makes requests for Airtable data  |

<br>

#### Data


|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| Airtable |      Yes      | airtable.com | https://api.airtable.com/v0/appGtN1jraBuzwFTz/Table%201 |

<br>

#### Component Hierarchy


```
src
|__ images/
      |__ images
|__ App.js
|__ CreateForm.js
|__ DisplayARecord.js
|__ FormComponent.js
|__ Home.js
|__ Nav.js
|__ Reviews.js
|__ SpecificVendor.js
```

<br>

#### Component Breakdown


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|   App    | functional |   n   |   n   | Backbone of the site - landing/navigation  |
|    CreateForm    | functional |   y   |   n   | User creates new revivews here via inputs  |
|  DisplayARecord  | functional |   n   |   y   | Component to display a record  |
|   FormComponent    |   functional    |   n   |   y   | Component to display inputs for vendor name & review  |
| Home | functional |   n   |   n   | Displays main buttons to create or read reviews  |
|    Nav    | functional |   n   |   n   | Contains logo |
|    Reviews    | functional |   y   |   n   | Browse all reviews |
| SpecificVendor | functional |   y   |   n   | Dropdown to select specific type & name / Display results  |


<br>

#### Component Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Basic HTML     |    L     |     1.5 hrs      |     2.5 hrs     |    TBD    |
| Basic CSS | L | 4 hrs | 4 hrs | TBD |
| Create CRUD Actions |    H     |     3 hrs      |     3.5 hrs     |     TBD     |
| Display reviews to browse | H | 1 hr | 2 hrs | TBD |
| Advanced CSS | L | 8 hrs | 9.5 hrs | TBD |
| Responsive Design | H | 5 hrs | 8 hrs | TBD |
| *Create dropdown options from airtable records | M | 5.5 hrs | 0hrs | TBD |
| *Display selected results | H | 1.5 hrs | 1 hr | TBD |
| *Send emails from site | L | 1 hr | 1 hr | TBD |
| *View user's past reviews | L | 2 hrs | 0 hrs | TBD |
| *Star ratings | M | 3 hrs | 0 hrs | TBD |
| *Logging in | M | 2 hrs | 0 hrs | TBD |
| *Favorites | L | 2 hrs | 0 hrs | TBD |
| Creating logo | M | - | 2 hrs | TBD |
| TOTAL               |          |     36 hrs      |     0 hrs     |     TBD     |

(* Denotes Post-MVP)

<br>

#### Helper Functions


|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| displayRecords | Displays records as per its props params |
| submitHandler | Validates name and email, then calls a GET function |

<br>

### Post-MVP


It would be nice if the user would be able to:
- Select specific vendor reviews from a dropdown of reviewed vendors
- View all of a user's past reviews
- Email a reviewer directly from site
- Give star ratings
- Log in
- See thier favorites


<br>

***

## Project Delivery

### Code Showcase

> Looking forward to including a brief code snippet of functionality that I am proud of.

### Code Issues & Resolutions

> In the future I will use this section to list of all major issues encountered and their resolution, as well as areas I deviated from the project proposal and why.
