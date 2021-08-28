# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres
to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2019-12-18

### Added

- Create package.json
- Setup .gitignore
- Add a CHANGELOG.md
- Add a Readme.md and a Contributing.md
- Add Styleguidist
- Add ESLint
- Add Stylelint
- Tests
- Build System
- useCallbackRef hook & tests
- useDidMount hook & tests
- useWillUnmount hook & tests
- useLifecycle hook & tests
- useWindowResize hook & tests
- Auto-generating documentation script

## [0.2.0] - 2019-12-20

### Added

- useDebouncedFn hook & tests

## [0.3.0] - 2019-12-21

### Added

- useMouseEvents hook & tests
- useMouseState hook & tests
- useMouse hook & tests

## [0.3.1] - 2019-12-23

### Fixed

- Adding babel-plugin-istanbul to solve [this issue with istanbul/nyc](https://github.com/istanbuljs/nyc/issues/706)

## [0.4.0] - 2019-12-23

### Added

- Adding playground build as a gitpages website
- Adding better documentation

## [0.5.0] - 2019-12-24

### Added

- useInterval hook & tests
- useTimeout hook & tests

## [0.5.1] - 2019-12-24

### Fixed

- Build workflow performs tests twice

## [0.6.0] - 2019-12-24

### Added

- useThrottledFn hook & tests
- debounce and throttle utilities

## [0.7.0] - 2019-12-24

### Added

- useWindowScroll hook & tests

## [0.8.0] - 2019-12-28

### Added

- useGlobalEvent hook & tests

## [0.8.1] - 2019-12-28

### Fixed

- Few documentation typos

## [0.8.2] - 2019-12-28

### Fixed

- Few documentation typos
- README image

### Added

- Types support

## [0.8.3] - 2019-12-28

### Fixed

- Few documentation typos

## [0.9.0] - 2019-12-29

### Fixed

- usePreviousValue hook & tests

## [0.9.1] - 2019-12-29

### Fixed

- peerDependencies
- build was missing
- usePreviousValue types were missing

## [0.9.2] - 2019-12-29

### Fixed

- React & ReactDom moved to `devDependencies`

## [0.9.3] - 2019-12-29

### Fixed

- Package name for public usage

## [0.10.0] - 2019-12-30

### Added

- Code of conduct
- Contributing guidelines
- issue template
- pull request template

## [0.10.1] - 2019-12-30

### Fixed

- correct package.json version
- dependencies update

## [0.11.0] - 2019-12-30

### Added

- Rewriting `useMouseHandler` into `useMouseEvents`

### Fixed

- documentation typos

## [0.11.1] - 2019-12-31

### Fixed

- documentation typos

## [0.12.0] - 2019-12-31

### Added

- useGeolocationEvents hook & tests
- useGeolocationState hook & tests
- useGeolocation hook & tests

## [0.13.0] - 2020-01-02

### Added

- useMediaQuery hook & tests
- change the order of the listed hooks into the Readme.md file

### Fixed

- `useOnMount` renamed to `useDidMount`

## [0.13.1] - 2020-01-02

### Fixed

- Usage example image

## [0.13.2] - 2020-01-02

### Fixed

- improved `useCallbackRef` documentation
- changed lib logo

## [0.13.3] - 2020-01-05

### Fixed

- removed wrong `useCallbackRef` dependencies
- dependency check on other event related hooks

## [0.13.4] - 2020-01-06

### Fixed

- Switching CI to Travis

## [0.13.5] - 2020-01-06

### Fixed

- useTimeout refactory

## [0.13.6] - 2020-01-07

### Fixed

- few hooks refactory
- Improved documentation by a better use of Styleguidist
- Improved types

## [0.13.7] - 2020-01-07

### Fixed

- `usePrev` renamed to `usePreviousValue`

## [0.13.8] - 2020-01-09

### Fixed

- Fix on `usePreviousValue` type

## [0.13.9] - 2020-01-09

### Fixed

- Fixing CI

## [0.14.0] - 2020-01-10

### Added

- useValueHistory hook & tests

## [0.15.0] - 2020-01-10

### Added

- useOnlineState hook

## [0.16.0] - 2020-01-10

### Added

- Repository ownership changed from `antonioru` to `beautifulinteractions`

## [0.17.0] - 2020-01-10

### Added

- useViewportSpy hook & tests
- Improved documentation

## [0.17.1] - 2020-01-10

### Fixed

- types reference into package.json

## [0.17.2] - 2020-01-12

### Fixed

- Fixed license in package.json

## [0.18.0] - 2020-01-13

### Added

- useDragEvents hook & tests
- useDrag hook

### Fixed

- event handlers uses the right parameters and avoid using (...args)
- `useCallbackRef` has been reverted to an internal utility

## [0.18.1] - 2020-01-14

### Fixed

- Build removed from the source package

## [0.18.2] - 2020-01-20

### Fixed

- useOnlineState returns true when the device does not support the `online/offline` state assuming the app is already online
- Improved test

## [0.19.0] - 2020-01-21

### Added

- useConditionalTimeout hook & tests

### Fixed

- adding react and react-dom as dev-dependencies

## [0.19.1] - 2020-01-21

### Fixed

- adding types for useConditionalTimeout

## [0.19.2] - 2020-01-22

### Fixed

- Updated typings for cancelable functions. Updated docs.

## [0.19.3] - 2020-01-25

### Added

- Support windows. Add .npmrc for saving exact version of dependencies

## [0.19.4] - 2020-01-25

### Fixed

- Updating dependencies
- Improving documentation by using `beautiful-react-ui` components

## [0.20.0] - 2020-01-27

### Added

- useValidatedState hook & tests

## [0.20.1] - 2020-01-27

### Fixed

- Adding useValidatedState into README.md
- Rewriting README.md
- Moved beautiful-react-ui from dependencies to dev-dependencies

## [0.21.0] - 2020-02-17

### Added

- useRequestAnimationFrame hook & tests

## [0.21.1] - 2020-02-20

### Fixed

- Fix isSupported when window is not defined to allow SSR

## [0.22.0] - 2020-02-21

### Added

- useLocalStorage hook & tests & docs & types

## [0.22.1] - 2020-02-21

### Fixed

- improving SSR check and window.* check before usage
- adding SSR warning to `useRequestAnimationFrame`
- improving `useLocalStorage` documentation

## [0.22.2] - 2020-02-21

### Fixed

- dependencies update

## [0.22.3] - 2020-03-11

### Added

- Adding Chinese translation of README.md

## [0.22.4] - 2020-03-11

### Fixed

- Fixing missing links between README.md files

## [0.22.5] - 2020-03-12

### Added

- Adding Italian translation of README.md

## [0.22.6] - 2020-03-12

### Fixed

- Fixing missing image links in italian Readme.md

## [0.22.7] - 2020-03-12

### Fixed

- Adding Spanish translation of README.md

## [0.22.8] - 2020-03-14

### Fixed

- Adding Ukranian translation of README.md

## [0.22.9] - 2020-03-14

### Fixed

- Fixing package version

## [0.22.10] - 2020-03-17

### Fixed

- Adding Polish translation of README.md

## [0.22.11] - 2020-03-17

### Fixed

- Fixing Polish translation of README.md

## [0.22.12] - 2020-03-17

### Fixed

- Fixing links to hooks in language specific README files

## [0.23.0] - 2020-03-17

### Added

- useDropZone hook & tests

## [0.23.1] - 2020-03-18

### Fixed

- Fixing links in Contributing section and minor typos in language specific README files

## [0.24.0] - 2020-03-26

### Added

- useStorage hook & tests

## [0.24.1] - 2020-05-09

### Fixed

- adding SSR warning to `useLocalStorage` hook
- adding warning to `useLocalStorage` hook if `localStorage` is not in `window` object
- adding new test for `useLocalStorage` hook that checks that `localStorage` in `window` object

## [0.25.0] - 2020-05-09

### Changed

- Improved build system by removing gulp and introducing rollup
- tests directory from `src` to `tests`
- Dependencies updated

## [0.25.1] - 2020-05-10

### Changed

- Tests improved by running them from the dist folder

## [0.25.2] - 2020-05-12

### Changed

- Fixed double `npm run build-doc` script run before deploy

## [0.25.3] - 2020-06-16

### Fixed

- Type declaration fix for `useDebouncedFn` and `useThrottledFn`

## [0.25.4] - 2020-06-16

### Fixed

- useInterval, clear the previous interval when the milliseconds value changes.

## [0.25.5] - 2020-06-17

### Fixed

- Introducing ESModules build

## [0.25.6] - 2020-07-03

### Fixed

- `module` property added to `package.jsoin` to support ESModules

## [0.26.0] - 2020-07-06

### Added

- useSessionStorage hook & documentation
- useStorage refactory
- useStorage types refactory

## [0.27.0] - 2020-07-06

### Added

- useResizeObserver hook & documentation

## [0.27.1] - 2020-07-08

### Fixed

- useStorage throws an error on server side rendering as the window object is not defined yet

## [0.27.2] - 2020-07-16

### Fixed

- useInterval clear function is now correctly used as useEffect cleanup
- Rollup configuration `preserveModules` bug

## [0.27.3] - 2020-08-12

### Fixed

- useTimeout clear function is now correctly used as useEffect cleanup
- CI minor issues

## [0.27.4] - 2020-08-15

### Added

- `useValueHistory` can now be used with distinct history

### Fixed

- dependencies update
- CI minor issues

## [0.28.0] - 2020-08-15

### Added

- `useDefaultedState` hook and tests

## [0.29.0] - 2020-08-31

### Added

- `useObservable` hook and tests

### Fixed

- CI minor issues

## [0.30.0] - 2020-09-04

### Added

- `useSystemVoices` hook and tests
- `useSpeechSynthesis` hook and tests

## [0.30.1] - 2020-09-11

### Fixed

- `useLocalStoreage` types fix

## [0.30.2] - 2020-09-27

### Added

- Better dist package

## [0.30.3] - 2020-09-27

### Fixed

- CI bugfix

## [0.30.4] - 2020-09-27

### Fixed

- Wrong path settings in package.json causes the library to be empty

## [0.30.5] - 2020-09-27

### Fixed

- Wrong CI settings causes the library to be empty

## [0.30.6] - 2020-10-09

### Fixed

- Webpack 5 error with the `isDevelopment` constant

## [0.31.0] - 2020-10-09

### Added

- `useRenderInfo` hook and tests

## [0.31.1] - 2020-10-09

### Added

- Support for SSR in `isAPISupport`

### Fixed

- Documentation link

## [0.32.0] - 2021-05-06

### Added

- `useTouchEvents`, `useTouchState` hook
- `useSwipe`, `useHorizontalSwipe` and `useVerticalSwipe` hook

### Fixed

- `useMouseEvents` flaws
- improved docs

### Removed

- `useConditionalTimeout` hook

## [0.32.1] - 2021-05-07

### Fixed

- `useSwipe` typings

### Removed

- `useConditionalTimeout` hook

## [0.33.0] - 2021-05-08

### Added

- `useSwipeEvents` hook

### Fixed

- typings module

## [0.33.1] - 2021-05-09

### Fixed

- `useSwipe` types

## [0.33.2] - 2021-05-09

### Fixed

- converted `HandlerSetter` type to better generic type

## [0.33.3] - 2021-05-09

### Fixed

- `useSwipeEvents` swipe performing only once in the same direction

## [0.33.4] - 2021-05-09

### Fixed

- `HandlerSetter` types a function taking another function as parameter

## [0.33.5] - 2021-05-12

### Fixed

- index exports `useHorizontalSwipe` and  `useVerticalSwipe`

## [0.34.0] - 2021-05-12

### Added

- `useSwipeEvents` exports `onSwipeMove`

### Fixed

- `useMediaQuery` addEventListener bug


## [0.34.1] - 2021-05-12

### Fixed

- removed useless console.log from `useSwipe`

## [0.35.0] - 2021-05-12

### Added

- `useSwipeEvents` exports`onSwipeEnd`,`onSwipeStart`

## [1.0.0] - 2021-08-27

### Change

- Complete typescript rewrite

## [1.0.1] - 2021-08-27

### Fixed

- Changing to the handler function do not cause the handler setter refs to update
