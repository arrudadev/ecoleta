<h1 align="center">
    <img alt="Ecoleta" title="Ecoleta" src=".github/assets/ecoleta.svg" width="220px" />
</h1>

<h4 align="center">
  🚀 Next Level Week #01
</h4>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-overview">Overview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-contributing">Contributing</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

<div align="center">
  
![build](https://github.com/monteiro-alexandre/ecoleta/workflows/build/badge.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/monteiro-alexandre/ecoleta/badge.svg?branch=master)](https://coveralls.io/github/monteiro-alexandre/ecoleta?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
</div>

<br>

<p align="center">
  <img alt="Ecoleta" src=".github/assets/web-home-page.png" width="100%">
</p>

<br>

<p align="center">
  <img alt="Ecoleta" src=".github/assets/web-create-point-page.png" width="100%">
</p>

<br>

<p align="center">
  <img alt="Ecoleta" src=".github/assets/web-success-create-point.png" width="100%">
</p>

<br>

<p align="center">
  <img alt="Ecoleta" src=".github/assets/mobile-home-page.jpg" width="100%">
</p>

<br>

<p align="center">
  <img alt="Ecoleta" src=".github/assets/mobile-points-page.jpg" width="100%">
</p>

<br>

<p align="center">
  <img alt="Ecoleta" src=".github/assets/mobile-detail-page.jpg" width="100%">
</p>

## 🚀 Technologies

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [Typescript](https://www.typescriptlang.org/)

## 💻 Overview

Ecoleta is a marketplace that helps people find waste collection points efficiently.

## 📝 Getting started

First you need to have `node` and `yarn` installed on your machine. Then, you can clone this repository.

```bash
git clone https://github.com/monteiro-alexandre/ecoleta.git
```
Install dependencies:

```bash
yarn
```

Packages dependencies:

```bash
yarn bootstrap
```

## Backend setup

Enter in folder packages/backend and Configure environment variables:
<br>
(create .env file based on .env.example)

```bash
# Port that the server is running, example: 3333
SERVER_PORT=3333 

# URL from URL that of the application backend, example: http://localhost:3333
SERVER_URL=http://your_machine_ip_address:3333
```

Run database migrations:

```bash
yarn migrate:latest
```

Run database seeds:

```bash
yarn seed:run
```

Start server:

```bash
yarn start
```
## Frontend setup

Enter in folder packages/frontend and Configure environment variables:
<br>
(create .env file based on .env.example)

```bash
# backend url
REACT_APP_API_BASE_URL=http://your_machine_ip_address:3333
```

Start aplication:

```bash
yarn start
```

## Mobile setup

Enter in folder packages/mobile and Configure environment variables:
<br>
(create environment.ts file based on environment.example.ts)

```js
import Constants from 'expo-constants';

const ENV = {
	development: {
		apiUrl: 'http://your_machine_ip_address:3333/',
	},
	staging: {
		apiUrl: '',
	},
	production: {
		apiUrl: '',
	},
};

const getEnvVars = (env = Constants.manifest.releaseChannel): any => {
	let environment;
	// What is __DEV__ ?
	// This variable is set to true when react-native is running in Dev mode.
	// __DEV__ is true when run locally, but false when published.
	// eslint-disable-next-line
	if (__DEV__) {
		environment = ENV.development;
	} if (env === 'staging') {
		environment = ENV.staging;
	} if (env === 'production') {
		environment = ENV.production;
	}
	return environment;
};

export default getEnvVars;
```

Start Expo DevTools:

```bash
yarn start
```

Than you can open the app in your cell phone using the Expo client app for IOS and Android, see:

<a href="https://docs.expo.io/get-started/installation/#2-expo-client-app-for-ios-and">Expo Documentation</a>

<br>

## 🤔 Contributing

Please read [CONTRIBUTING.md](.github/CONTRIBUTING.md) for details on the code of conduct and the process for submitting pull requests.

## :memo: License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.