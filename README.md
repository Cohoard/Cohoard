# Cohoard
Cohoard is an organizational tool that helps people keep track of important resources.

## Description
Modern day software engineering is built off of decades of research and learning, and during that time, there have been countless resources created to help beginners learn. While it is a blessing to have a countless number of quality resources to learn from, it can also be very difficult to stay organized and keep track of all of the useful resources that one might ecounter.

Enter Cohoard. Cohoard seeks to solve this problem by providing a platform that enables people to centralize their resources. When a user creates account, Cohoard currently allows users to view resources and commment on them.

### Technologies Used (and Why)
#### Front End
  - React
    - React offers state management and stateful components, which is important for an app of this scale (small-medium). Even though Redux can simplify where state is kept and how it managed, it felt a little overboard for a project of this scale so we stuck with React.
  - React Router
    - React Router offers a great way to creat multiple pages without the need to create multiple HTML files and serve them with Express.
  - React-Bootstrap
    - React-Bootstrap offers the needed styling options in a way that works well with React.

#### Backend
  - ExpressJS
    - Express is a great solution for modularizing backend logic via middleware. It made sense for this project as it is functional, unopinionated and gives the ability handle concurrent requests. 
  - MongoDB
    - As the data for this application is largely non-relational, MongoDb was a great choice. It offers the speed and flexibility we needed.
  - Mongoose
    - Even though the data is non-relational, the added structure that Mongoose Schemas provide was why we choose to include Mongoose.
#### Bundling
  - Webpack
    - We chose Webpack to transpile and bundle our code. Its hot module reloading also allowed us to speed up our development process.