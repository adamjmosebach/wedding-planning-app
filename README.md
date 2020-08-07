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
| Basic HTML     |    L     |     1.5 hrs      |     2.5 hrs     |    2.5 hrs    |
| Basic CSS | L | 4 hrs | 4 hrs | 4 hrs |
| Create CRUD Actions |    H     |     3 hrs      |     3.5 hrs     |     3.5 hrs     |
| Display reviews to browse | H | 1 hr | 2 hrs | 2 hrs |
| Advanced CSS | L | 8 hrs | 9.5 hrs | 9.5 hrs |
| Responsive Design | H | 5 hrs | 8 hrs | 8 hrs |
| *Create dropdown options from airtable records | M | 2 hrs | 5.5 hrs | 5.5 hrs |
| *Display selected results | H | 1.5 hrs | 1 hr | 1 hr |
| *Send emails from site | L | 1 hr | 1 hr | 1 hr |
| *View user's past reviews | L | 2 hrs | 0 hrs | 0 hrs |
| *Star ratings | M | 3 hrs | 0 hrs | 0 hrs |
| *Logging in | M | 2 hrs | 0 hrs | 0 hrs |
| *Favorites | L | 2 hrs | 0 hrs | 0 hrs |
| **Creating logo | M | - | 2 hrs | 2 hrs |
| TOTAL               |          |     36 hrs      |     39 hrs     |     39 hrs     |

(* Denotes Post-MVP)
(** Denotes added during project build)

<br>

#### Helper Functions


|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| displayRecords | Displays records as per its props params |
| submitHandler | Validates name and email, then calls a GET function |
| apiPost | Posts api data |

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

Making a button pop out insead of in
```
.selectd-div {
  transition: 0.25s;
}
.selects-div:hover {
  box-shadow: 3px 3px rgb(255, 255, 255);
  transform: scale(1.02);
}
```

### Code Issues & Resolutions

* The responsive design was difficult, mainly becuase:
  * I had to undo their full-screen settings before I could make them look and function how I wanted them to
  * I had to move the selection options all over the screen
  * I had to make the CreateForm section say different things in mobile size than in full screen. To accomplish this I had to have both set of heading I needed on screen at all times and display:none the set I wasn't using in each case.
* The vendor name dropdown list:
  * Getting the specific vendor's name in the dropdown was difficult for me to get to go back to the top option each time. I spent a lot of time trying to figure it out, ultimitaly finding out that the solution was quite simple.
  * Making sure if a vendor is reviewed several times, they only show up once in the dropdown. Realize now the best way is to use the .reduce method