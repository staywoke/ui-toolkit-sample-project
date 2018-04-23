<div align="center">
<p><img src="./src/assets/logo.jpg" alt="Stay Woke" width="280"/></p><p><a href="#"><img src="https://img.shields.io/badge/dynamic/style-2.X-lightgrey.svg?style=for-the-badge&label=Vue.js&colorA=409eff&colorB=88c3ff" alt="Vue.js 2.X" /></a> &nbsp; <a href="#"><img src="https://img.shields.io/badge/dynamic/style-Project-orange.svg?style=for-the-badge&label=Sample&colorA=67c23a&colorB=8fd66d" alt="Sample Project" /></a></p><p><img src="screenshot.gif" alt="Weather Bar" width="280" /></p>
</div>

Weather Bar
---

[![Download Latest Release](https://img.shields.io/badge/dynamic/style-Latest_Release-orange.svg?style=for-the-badge&label=Download&colorA=3899d5&colorB=33c4f4)](https://github.com/manifestinteractive/weather-bar-app/releases)

> Weather Bar is a Weather Application that lives in your Menu Bar giving you beautiful access to real-time weather conditions and a generous 15-day forecast.

* Live Weather Displayed in Menu Bar
* App Design Based on Actual Weather Conditions & Astronomy
* View Current Conditions and 15 Day Forecasts
* Ability to Save Custom Locations
* Support for top 10 Spoken Languages: Arabic, Chinese, English, French, German, Japanese, Malay, Portuguese, Russian, Spanish

Developer Overview
---

* [Getting Setup](docs/getting-setup.md)
* [Development Scripts](docs/development-scripts.md)
* [i18n Translations](docs/i18n-translations.md)
* [Unit & E2E Tests](docs/unit-testing.md)
* [Troubleshooting](docs/troubleshooting.md)





















![logo](./src/assets/logo.jpg "logo")

# UI Toolkit Sample Project

> Vue.js UI Toolkit for Rapid Project Development of StayWoke Projects.

Overview
---

*
About UI Toolkit
---

UI Toolkit is the home for all StayWoke's Vue.js 2 Components.  You can use any of these in your Vue.js 2 Projects.

#### [Visit UI Toolkit ⇨](https://github.com/staywoke/ui-toolkit)


Using our Sample Project
---

First, you will need to install the Vue.js CLI package to you can quickly clone our sample project as a base to start your own project.

```bash
npm install -g vue-cli
```

With Vue.js CLI installed, you can now change to your projects folder, run a single command, and have a copy of our sample project ready for you to start developing with.

```bash
cd /path/to/my-projects
vue init staywoke/ui-toolkit-sample-project my-project
```

Now we just need to change into the new project folder we just created, and kick things off.

```bash
cd my-project
npm install
npm run dev
```

Developer Scripts
---

> Developers of UI Toolkit really only need the following development scripts.

``` bash
# install dependencies
npm install

# serve interactive components with hot reload at localhost:9001
npm run storybook

# run all tests
npm test
```



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
