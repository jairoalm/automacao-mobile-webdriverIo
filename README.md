# 📱 Projeto de Automação Mobile com WebdriverIO e Appium

Este repositório contém a automação de testes para uma aplicação Android nativa, utilizando WebdriverIO, Appium, Allure Report, execução local via Android Studio e execução em nuvem com BrowserStack via GitHub Actions.

---

## 📚 Índice

- [📱 Tipo de Projeto](#-tipo-de-projeto)
- [✨ Funcionalidades do Projeto](#-funcionalidades-do-projeto)
- [📝 Documentação do APP](#-documentação-do-app)
- [🛠 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [🧩 Configuração Browserstack Cloud](#-configuração-browserstack-cloud)
- [📦 Bibliotecas Existentes no Projeto](#-bibliotecas-existentes-no-projeto)
- [📥 Instalações de Dependências](#-instalações-de-dependências)
- [▶️ Como Executar o Projeto](#️-como-executar-o-projeto)
- [📊 Gerar Relatórios](#-gerar-relatórios)
- [🔁 Versionamento no GitHub](#-versionamento-no-github)
- [👤 Autores](#-autores)

---

## 📱 Tipo de Projeto

Automação de testes mobile nativa Android com suporte a execução local e em nuvem, utilizando o WebdriverIO com Appium e integração com o BrowserStack.

---

## ✨ Funcionalidades do Projeto

- Validação de navegação de páginas.
- Validação do cadastro de usuário.
- Validação do formulário de autenticação.
- Validação de formulário.
- Validação de interação com Swipe.
- Validação de interação com DraganDrop.

---

## 📝 Documentação do APP

- APK utilizado: `android.wdio.native.app.v1.0.8.apk`
- Local do APK no projeto: `apps/android.wdio.native.app.v1.0.8.apk`
- O app é carregado automaticamente pelo Appium em execução local e via BrowserStack na nuvem.
- Os testes foram implementados para ambeinte android na vesão 15.0
- Para ambinete iOS é necessário utlizar um Macbook ou ter disponivel um arquivo .ipa para executar no Browserstack. Na documentação do native-demo-app explica como realizar automação
do iOS, mas existe essa dependência do ambiente iOS. [doc-native-demo-app](https://github.com/webdriverio/native-demo-app)
---

## 🛠 Tecnologias Utilizadas

- [x] [Node.js](https://nodejs.org/)
- [x] [WebdriverIO](https://webdriver.io/docs/gettingstarted)
- [x] [Appium](https://appium.io/docs/en/2.0/)
- [x] [Appium-Inspector](https://github.com/appium/appium-inspector)
- [x] [Allure Report](https://docs.qameta.io/allure/)
- [x] [BrowserStack](https://www.browserstack.com/)
- [x] [Android Studio](https://developer.android.com/studio)
- [x] [GitHub Actions](https://docs.github.com/en/actions)
- [x] [allure-commandline](https://www.npmjs.com/package/allure-commandline)

---

## 🧩 Configuração Browserstack Cloud

✔️ Criar conta no BrowserStack
* Vá em Automate > App Automate
* Clique em “Upload your app” e envie seu .apk
* Anote o app_url, algo como: bs://<app-id>
* App Automate: Pegar "User name e Access Key"

✔️ Capabilities no WebdriverIO (wdio.conf.js)
- Configuração para execução dos em cloud
    * Linha 24: capabilities
    * Linhas 70 a 78: Services e Configurações para conexão com BrowserStack ou local
    - Linha 90: Configuração de reporters

✔️ ci.yml com variáveis de ambiente
- env:
  - CLOUD: true # Define se os testes serão executados no BrowserStack
  - BROWSERSTACK_USERNAME: ${{ secrets.BROWSERSTACK_USERNAME }}
  - BROWSERSTACK_ACCESS_KEY: ${{ secrets.BROWSERSTACK_ACCESS_KEY }}

✔️ Secrets criadas no GitHub
- No GitHub, vá em: Settings > Secrets and Variables > Actions e adicione:
    * BROWSERSTACK_USERNAME: seu username 
    * BROWSERSTACK_ACCESS_KEY: sua access key

## 📦 Bibliotecas Existentes no Projeto

- `@wdio/cli`
- `@wdio/appium-service`
- `@wdio/allure-reporter`
- `@wdio/spec-reporter`
- `@wdio/local-runner`
- `@wdio/mocha-framework`
- `dotenv`
- `appium`
- `chai`
- `csv-parser`

---

## 📥 Instalações de Dependências

```
 - npm install
 - npm appium
 - npm init wdio@latest .
 - npm i allure-commandline
 - npm install csv-parser

```

## ▶️ Como Executar o Projeto
```
- Excutar projeto completo
    - npm run wdio

- Executar um teste especifico
    - npx wdio run wdio.conf.js --spec ./tests/<arquivo>.js

```
## 📊 Gerar Relatórios
```
- Executar o projeto
- Executar o allure-commandline no terminal
    - npx allure serve allure-results (Esse comando gera um relatório em página HTML)
```

## 🌐 Versionamento no GitHub

- [x] [GitHub](https://github.com/jairoalm/automacao-mobile-webdriverIo)
- [x] [Relatório-Page](https://github.com/jairoalm/automacao-mobile-webdriverIo/settings/pages)
- [x] [Pipeline](https://github.com/jairoalm/automacao-mobile-webdriverIo/actions)

## 👤 Autores
- [x] [Linkedin](https://www.linkedin.com/in/jairoalmeidamonteiro/)