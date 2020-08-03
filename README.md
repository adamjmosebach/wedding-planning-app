# PROJECT 2 README <!-- omit in toc -->

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

## Project Planning

> The Project Planning section should be completed for your project pitch with instructors.
>
> To ensure correct Markdown, I recommend cloning this wiki and copy/pasting the raw template code.

<br>

### Overview

**Vendor Connector** is an easy-to-use app whereby a person who is considering a wedding vendor can connect with people who have already used that vendor. They can hopefullly then gain more insight and make a more informed decision on whether on not to use them on their special day.

<br>

### Wireframes


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

The **Vendor Connector**'s goal is simple: connect someone planning an event to those who have done it already: make them more informed about who they choose as vendors.

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

> Use the Data Section to define the API(s) you will be consuming for your project, inluding sample URL queries.

|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| Airtable |      Yes      | airtable.com | https://api.airtable.com/v0/appGtN1jraBuzwFTz/Table%201 |

<br>

#### Component Hierarchy


```
src
|__ assets/
      |__ fonts
      |__ images
|__ App.js
|__ Header.js
|__ Form.js
|__ SelectVendor.js
|__ DisplayVendor.js
|__ Browse.js
```

<br>

#### Component Breakdown


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|   App    | functional |   n   |   n   | Backbone of the site - landing/navigation               |
|    Header    | functional |   n   |   n   | Site brand / where you can go               |
|  Form  | functional |   y   |   n   | What the user must input to create reviews       |
|   SelectVendor    |   functional    |   y   |   n   | Pick what vendors to research further      |
| DisplayVendor | functional |   n   |   y   | Display selected vendor's reviews                 |
|    Browse    | functional |   n   |   y   | Browse all reviews |

<br>

#### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above. 
>
> Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Basic HTML     |    L     |     1.5 hrs      |     0 hrs     |    TBD    |
| Basic CSS | L | 4 hrs | 0 hrs | TBD |
| Create CRUD Actions |    H     |     3 hrs      |     0 hrs     |     TBD     |
| Display reviews to browse | H | 1 hr | 0 hrs | TBD |
| Advanced CSS | L | 8 hrs | 0 hrs | TBD |
| *Create dropdown options from airtable records | M | 2 hrs | 0hrs | TBD |
| *Display selected results | H | 1.5 hrs | 0 hrs | TBD |
| *Send emails from site | L | 1 hr | 0 hrs | TBD |
| *View user's past reviews | L | 2 hrs | 0 hrs | TBD |
| *Star ratings | M | 3 hrs | 0 hrs | TBD |
| *Logging in | M | 2 hrs | 0 hrs | TBD |
| *Favorites | L | 2 hrs | 0 hrs | TBD |
| TOTAL               |          |     31 hrs      |     0 hrs     |     TBD     |

-* Denotes Post-MVP 

<br>

#### Helper Functions

> Use this section to document all helper functions– generic functions that can be reused in other applications.

|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| Capitalize | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Post-MVP


It would be nice if the user could be able to:
- Select specific vendor reviews from a dropdown of reviewed vendors
- View all of a user's past reviews
- Email a reviewer directly from site
- Star ratings
- Log in
- Favorites


<br>

***

## Project Delivery

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
