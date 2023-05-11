## Description

This is a demo project that shows the integration of [Localazy](https://localazy.com/) with Vercel for CI/CD. \
This project translates idioms from English to Czech, Finnish and Spanish Languages. It uploads the source file strings and changes made in the source file to localazy whenever a commit is made. It also downloads the translated files before building.

## Installation
Install project dependencies with the command:
```bash
# install packages
$ npm install
```
This command also installs the localazy cli as it is part of the project devDependencies.

## Create Project on Localazy
Log in or create a [Localazy](https://localazy.com/) account if you do not have one.
Select create a new project. Enter a project name of choice. Use English as the source language. Then, click the create new project button.

## Configuration

Create a file called `localazy.keys.json`. Then, copy the contents from `localazy.keys.json.sample` file and paste in the created file.
Replace the writeKey and readKey with values copied from your Localazy Project Settings.


## Vercel Custom Workflow Integration

To integrate with Vercel,

- Sign up or Log in on [Vercel](https://vercel.com/).
-  Add **environment variables**  - LOCALAZY_READ_KEY, LOCALAZY_WRITE_KEY and LOCALAZY_RELEASE_TAG.
- Deploy Application
- Add and update release tag for different environments.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run localazy:upload`

Uploads the application source files to Localazy Project.

### `npm run localazy:download`

Downloads the translated files from the Localazy Project.

### `npm run localazy:download-remote`

Downloads the translated files from the Localazy Project for the remote repository. \
This ensures authorization keys are used from the environment variables set and release tags can be used.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

It runs the `npm run download:remote` command first to download translated files. \
Then, it builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.