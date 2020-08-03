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
- Be able to find reviews others have made about a vendor
- Be able to browse vendor reviews in general
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
| :--------: | :-----------: | :------------ | :-------------------------------------- 
| Airtable |      Yes      | airtable.com | https://api.airtable.com/v0/appGtN1jraBuzwFTz/Table%201 |

<br>

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app.

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

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
| Gallery Card | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

<br>

#### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above. 
>
> Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

<br>

#### Helper Functions

> Use this section to document all helper functions– generic functions that can be reused in other applications.

|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| Capitalize | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

- _Add user account and auth capabilities._
- _Utilize the Giphy API to welcome new users with funny gifs._

<br>

***

## Project Delivery

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
