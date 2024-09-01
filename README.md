# Rick and Morty application

## Link to application

[Link to the deployed application](https://rick-and-morty-alpha-five.vercel.app/)

## Project overview. Stack

[Next.js](https://www.npmjs.com/package/next) 14 (App Router approach)

[TypeScript](https://www.npmjs.com/package/typescript) v5

Styles approach: module [SCSS](https://www.npmjs.com/package/sass)

Linters and formatters: [eslint](https://www.npmjs.com/package/eslint) and [prettier](https://www.npmjs.com/package/prettier)

Component library: [Ant Design](https://www.npmjs.com/package/antd)

API: [SWR](https://www.npmjs.com/package/swr?activeTab=readme)

Tests: [Jest](https://www.npmjs.com/package/jest) with [@Testing-library](https://www.npmjs.com/package/@testing-library/react)

## Setup instructions. How to start project locally?

Install dependencies

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to use the application?

This app allows you to learn more about the Rick and Morty universe, you can:

- See all the characters of the animated series on the Characters page
- Learn about all the locations on the Locations page
- View details about each episode of the series on the Episodes page
- To see more detailed information about an item in the list, simply left-click on the item.
- To see the next or previous items in a list, use the pagination bar at the bottom of the screen.

## Evaluation Criteria Details

### 1. Effectiveness of the UI design, particularly the responsiveness and usability across different devices

> The UI design has been optimized for responsiveness and usability across a range of devices, starting from 375px width. I adhered to current web standards to ensure consistent display and functionality across various screen sizes.

### 2. Technical Implementation: Correct and efficient use of React, TypeScript, and the Rick and Morty API. This includes handling API calls, state management, routing, and pagination

> I utilized useSWR with Axios as a fetcher for efficient data fetching from the Rick and Morty API. The application includes pagination for data display and includes four distinct pages: Home ('/'), Locations ('/locations'), Characters ('/characters'), and Episodes ('/episodes').

> I've developed a custom "Not Found" page to handle 404 errors, ensuring users have a clear message when following non-existent routes.

> I've implemented error page to manage and display user-friendly UI, enhancing overall application stability and user experience.

### 3. Code Quality and Organization: Use of best practices in code structure, including use of TypeScript for type safety and efficient component structuring

Some details about repo's structure:
>
> 1. The `components` folder contains folders with components by functionality, which will help conveniently scale the application and components folder. Now inside components there is a `shared` folder, which stores all the simple components that can be used throughout the application. And the `locations`, `episodes`, `characters` folders -  contain all the components necessary for their functionality. As soon as we need to create new functionality and pages, we can create a new folder by functionality and put components there.
>
> 2. The `layout` folder contains components that are used to divide the application into parts, such as Header, Footer, Content and AppWrapper.
We can easily change the header and footer as it suits us. And also wrap our application with global services, providers, in AppWrapper.
>
> 3. The `styles` folder contains global styles for the entire application, as well as variables, mixins, and functions for all .scss files.
>
> 4. If we need to take something out of the component (constant, enum, interface, function or etc.), then we create a `constants.ts` and put it
>       - a. if it used only in 1 Component, near the Component where it is used
>       - b. if it used in multiple Component within 1 feature, inside feature folder
>       - c. if it used in multiple Components within several features, inside `utils` folder

### 4. UI Design and Responsiveness: Effective use of CSS/SCSS to create an attractive, intuitive, and responsive user interface

> I implemented styling using the Module SCSS approach. This method provides scoped styles for each component, enhancing maintainability and preventing style conflicts, which contributes to a more organized and responsive design system.

### 5. Adherence to Deadline: Delivery of all specified components and documentation by the 7-day deadline

> The project was completed and all results were delivered within the specified seven-day deadline, specifically the last weekend of August.

### 6. Testing Coverage: Comprehensive Jest test cases that validate functionality and robustness of the application

> Jest configurations were added to the project, and I utilized React Testing Library to create tests for several components. To run tests, use `npm run test` or `npm run test:watch` to ensure functionality and robustness.

### 7. Handling of Edge Cases: Proper management of API errors, empty data responses, and user input validations

> Comprehensive edge case handling is implemented, covering scenarios such as API errors, empty data responses, and pagination issues. This ensures a robust user experience across all pages of the application.
