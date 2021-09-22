<h1 align="center">#euFiscalizo</h1>

<h1 align="center">
  <img alt="EUFiscalizo" width="300" title="#EUFiscalizo" src="https://i.ibb.co/PjVgwBw/Whats-App-Image-2020-11-21-at-22-51-31.jpg" />
</h1>

<p align="center">This project was made during the "HackaTRAN" 2020 a hackaton promoted by DENATRAN the brazilian transist regulation agency with the theme: "Traffic education. Realize the risks protect life!"</p>


<p align="center"><b>Our team ended up in 4th place over of 40 other teams!</b></p>

<p align="center">The goal of the project was for people spot traffic infractions and report, but all the infractions reported by the app will not become a fine for the infractor it are going to be used just for raise awareness</p>


### Prerequisites

Before starting you are going to need the following tools:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [JDK](https://www.oracle.com/technetwork/pt/java/javase/downloads/index.html), 
[Gradle](https://gradle.org/) . 
On top of that is good to have an editor for working with the code like [VSCode](https://code.visualstudio.com/)

### 🎲 Running the Back End (server)

```bash
# Clone the repository
$ git clone <https://github.com/CassioLeodegario/HackaTRANMVPApp.git>

# access the project folder via terminal/cmd
$ cd HackaTRANMVPApp

# go to the "server" folder
$ cd server

# Install all the dependencies
$ gradle clean build

# Access the lib folder
$ /build/libs

# Run the application
$ java -jar eu-fiscalizo-api-0.0.1-SNAPSHOT.jar

# The server will start on the port:8090 - <http://localhost:8090/api>
```

### 🎲 Running the app

```bash
# Clone the repository
$ git clone <https://github.com/CassioLeodegario/HackaTRANMVPApp.git>

# Access the project folder via terminal/cmd
$ cd HackaTRANMVPApp

# Go to the "app" folder
$ cd app

# Install all dependencies
$ npm install

# Run the app on the android/ios emulator
$ npx react-native run-android

# The emulator will start the aplication
```

### 🛠 Tecnologies

The following tools were used in the project:

- [Node.js](https://nodejs.org/en/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [JAVA](https://www.oracle.com/technetwork/pt/java/javase/downloads/index.html)
- [Spring-Boot](https://spring.io/projects/spring-boot)
