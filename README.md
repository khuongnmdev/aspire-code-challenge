# Aspire Code Challenge

This project was created for Aspire FE Code Challenge.

## Built With

| Technical                                | Version |
| ---------------------------------------- | :-----: |
| [Angular](https://angular.io/)           | v17.0.0 |
| [PrimeNG](https://primeng.org/)          | v17.0.0 |
| [SASS](https://sass-lang.com/)           | Latest  |
| [FireBase](https://firebase.google.com/) | Latest  |
| [Node](https://nodejs.org/)              | v21.1.0 |

## Prerequisites

##### Node Package Manager (NPM)

```sh
npm install npm@latest -g
```

##### GIT

Download from [GIT Download page](https://git-scm.com/downloads) and install.

## Installation

1. Clone the repository.

```sh
git clone https://github.com/khuongnmdev/aspire-code-challenge.git
```

2. Install NPM packages.

```sh
npm i
```

3. Install Firebase CLI for deployment (optional).

```sh
npm i firebase-tools
```

## Development server

To run DEV server. Run

```sh
ng serve
```

Navigate to `http://localhost:4200/`.
The application will automatically reload if you change any of the source files.

## Build

To build the project. Run

```sh
ng build
```

The build artifacts will be stored in the `dist/` directory.

## Running unit tests

To execute the unit tests via [Karma](https://karma-runner.github.io). Run

```sh
ng test
```

Due to the limitation of time. There are only contain Unit Test for Mask Pie and Card Component.

## Deployment production

To build and deploy to [Firebase](https://k-aspire-challege-code.web.app).

```sh
npm run deploy
```

This action with build and deploy to Firebase automatically by token.
The web url is https://k-aspire-challege-code.web.app

## Project structure

.
├── ...
├── modules  
│ ├── core # Core modules for project
│ │ ├── enums # Contain enum types
│ │ ├── models # Contain data models
│ │ └── services # Contain Angular service, HTTP request...
│ ├── shared # Contain shared components, pipes ...
│ │ ├── components # Contain sidebar, header, footer, re-useable components
│ │ └── pipes # Contain pipes directives.
│ ├── shared # Contain shared components, pipes ...
│ │ ├── components # Contain sidebar, header, footer, re-useable components
│ │ └── pipes # Contain pipes directives.
│ ├── theme # Implement Theme UI for component, support multiple UI (Bootstrap, Material...)
│ ├── web # Module for web UI.
│ └── ... # etc.
└── ...

## Contact

LinkedIn: [Khuong Nguyen Manh](https://www.linkedin.com/in/khuongnm91/)
Email: [khuongnm.dev@gmail.com](mailto:khuongnm.dev@gmail.com)
Skype: khuongnm.dev@gmail.com
