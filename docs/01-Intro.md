# 1.0 Introduction
This material is for those who are familiar with React and are willing to dive
into developing mobile apps with **React Native**.
React Native is a **framework** for building **mobile** applications with
**JavaScript** and **React** by leveraging **Native components**.
As we already know in React we have a virtual DOM which reflects the real DOM.
Each React Element corresponds to a node in the Virtual DOM and when an element
changes, that change is being reflected onto the real DOM. In React Native
we don't deal with the DOM but with the Native Components which are provided by
a specific platform. Instead of dealing with WebViews we will be using actual
platform-specific native components. That means that when writing our components
with **JSX** instead of using `<div>` to create a components or groupings of
multiple components, we would use the native `<View>` component.
Similarly we will use `<Text>` instead of `<span>`.
Later in this course we will introduce other, more complex, native
components and some platform specific components which look and behave
differently on each platform.
React Native embraces the **Learn Once And Apply Everywhere** paradigm, which is
quite different from **Write Once Use Everywhere**. This is because there are
some major differences between every mobile platform, and it is impossible
to cover all of those differences with the same codebase.

- how does it work?
  - what are **Native Components**
  - where is the JavaScript code executed

#### Required Knowledge
For this course we assume that our audience has at least some basic knowledge of
React and JavaScript. Also, being familiar with ES6 syntax and basic CSS would
definitely help with digesting this material.

## 1.1 Getting Started
You can find the most up to date information about how to get started
[here](https://facebook.github.io/react-native/docs/getting-started.html#content).

#### Update and upgrade `brew` for OS X
Since `brew` will be used to install all the needed tools, you should update it
to ensure that you will get the most recent versions of all the required
programs:
```sh
$ brew update && brew upgrade
```

#### Install Node and NPM
Using `brew`:
```sh
$ brew install node
```
Alternatively you can download node [here](https://nodejs.org/en/download/)
and manually install it.

#### Install `watchman`
This tool will be used by React Native to detect changes of your code and auto
reload your application.
```sh
$ brew install watchman
```

#### (Optional) Install `flow`

> [Flow](http://flowtype.org/) is a static type checker, designed to quickly
find errors in JavaScript applications

We will not be using this here, however you can download it if you want to
used it later on.
```sh
$ brew install flow
```

#### Install the **React Native** CLI tools:
```sh
$ npm install -g react-native-cli
```
Or, if you have *permission error* then use `sudo`:
```sh
$ sudo npm install -g react-native-cli
```

### Setup the environments
For **iOS** install **Xcode** from the App Store.
For **Android** follow these instructions [here](https://facebook.github.io/react-native/docs/android-setup.html).

#### Initiate a **React Native** project:
```sh
$ react-native init HelloWorld
```

### Run your `HelloWorld` app
After executing `react-native init HelloWorld` the output in the terminal is
extremely useful and it explains how to run your project:
```sh
To run your app on iOS:
   cd /Users/rangle/HelloWorld
   react-native run-ios
   - or -
   Open /Users/rangle/HelloWorld/ios/HelloWorld.xcodeproj in Xcode
   Hit the Run button
To run your app on Android:
   Have an Android emulator running (quickest way to get started), or a device connected
   cd /Users/rangle/HelloWorld
   react-native run-android
```

If running
```sh
$ react-native run-ios
```
throws the following error:
```
Command `run-ios` unrecognized. Did you mean to run this inside a react-native project?
```
then you might need to upgrade your `react-native` in the following way:
```sh
$ npm install --save react-native@latest
```
The result of running the `HelloWorld` app in the iOS simulator looks like this:
![HelloWorld iOS Simulator](./images/HelloWorld-iOS_Sim.png)

## 1.2 Hello World
- simple **Hello World** app
  - provide sample code
  - explain the `<View>` component from the sample code
