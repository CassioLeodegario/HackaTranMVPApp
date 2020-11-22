<h1 align="center">#euFiscalizo</h1>

<h1 align="center">
  <img alt="NextLevelWeek" width="300" title="#NextLevelWeek" src="https://i.ibb.co/PjVgwBw/Whats-App-Image-2020-11-21-at-22-51-31.jpg" />
</h1>

<p align="center">Projeto desenvolvido durante o evento HackaTRAN 2020 promovido pelo DENATRAN com o tema: "Educação no trânsito. Perceba os riscos proteja a vida!"</p>


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [JDK](https://www.oracle.com/technetwork/pt/java/javase/downloads/index.html), 
[Gradle](https://gradle.org/) . 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/CassioLeodegario/HackaTRANMVPApp.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd HackaTRANMVPApp

# Vá para a pasta server
$ cd server

# Instale as dependências
$ gradle clean build

# Acesse a pasta de ilbs
$ /build/libs

# Execute a aplicação com um  prompt de comando
$ java -jar eu-fiscalizo-api-0.0.1-SNAPSHOT.jar

# O servidor inciará na porta:8090 - acesse <http://localhost:8090/api>
```

### 🎲 Rodando o APP

```bash
# Clone este repositório
$ git clone <https://github.com/CassioLeodegario/HackaTRANMVPApp.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd HackaTRANMVPApp

# Vá para a pasta app
$ cd app

# Instale as dependências
$ npm install

# Execute a aplicação com o emulador android/mac
$ npx react-native run-android

# O emulador iniciará com a aplicação
```

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [JAVA](https://www.oracle.com/technetwork/pt/java/javase/downloads/index.html)
- [Spring-Boot](https://spring.io/projects/spring-boot)
- [ASP.net](https://www.microsoft.com/)
