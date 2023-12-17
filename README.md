# Backroads App

[This repo deployead at netlify](https://backroads-app-67f1fc.netlify.app)

[Working Application - Deployed](https://backroads-app.netlify.app/)

- backroads-html - working html/css/javascript project (contains assets)
- final(complete source code) - working react application
  - navigate to the folder
  - run 'npm install'
  - once the dependencies are installed run 'npm start'

#### John Smilga React Course:

[My React Course](https://www.udemy.com/course/react-tutorial-and-projects-course/?referralCode=FEE6A921AF07E2563CEF)



#### Warnings "Gotcha"

- Netlify treats warnings as errors

package.json

```json
"scripts": {
    "start": "react-scripts start",
    "build": "CI= react-scripts build",
    "local-build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```
