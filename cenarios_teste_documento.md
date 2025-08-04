**Documento de Cenários de Teste - Aplicativo Mobile**

---

### ✨ **Sumário**

1. Introdução
2. Objetivo
3. Ambiente de Teste
4. Estrutura dos Testes Automatizados
5. Lista de Cenários por Módulo
   - 5.1. Home
   - 5.2. Formulário
   - 5.3. Drag and Drop
   - 5.4. Cadastro de Usuário
   - 5.5. Login
   - 5.6. Swipe
   - 5.7. WebView
6. Considerações Finais

---

### 1. **Introdução**
Este documento descreve os cenários de testes automatizados da aplicação mobile, estruturados com base nos arquivos de teste desenvolvidos com a biblioteca WebdriverIO.

### 2. **Objetivo**
Validar o correto funcionamento das funcionalidades principais do aplicativo através de testes automatizados, garantindo qualidade, segurança e estabilidade nas entregas.

### 3. **Ambiente de Teste**
- Plataforma: Android
- Ferramenta de automação: WebdriverIO
- Linguagem: JavaScript (Node.js)
- Framework de testes: Mocha
- Appium
- Appium Inspector
- Browserstack

### 4. **Estrutura dos Testes Automatizados**
Os testes estão organizados com Page Object, sendo cada tela representado por um arquivo de teste com o sufixo `.tests.js`. Cada `describe` representa um conjunto de cenários relacionados a uma funcionalidade.

---

### 5. **Lista de Cenários por Telas**

#### 5.1. **Home Page** (`home.tests.js`)
- **Cenário:** Validar acesso e visualização da Home
  - Ações: Clicar no texto "Demo App"
  - Resultado esperado: O texto "Demo App" deve estar visível na tela após o clique

#### 5.2. **Formulário** (`forms.tests.js`)
- **Cenário:** Preenchimento correto do formulário
  - Ações: Clicar em "Forms", interagir com o componente, validar texto do botão
  - Resultado esperado: O botão deve indicar um estado ativo

#### 5.3. **Drag and Drop** (`drag.tests.js`)
- **Cenário:** Arrastar todos os elementos para os destinos corretos
  - Ações: Realizar drag-and-drop dos elementos `c1`, `c2`, `c3`, `l1`, `l2`, `l3`, `r1`, `r2`, `r3`
  - Resultado esperado: Mensagem de sucesso visível + opção de "Retry"

#### 5.4. **Cadastro de Usuário** (`user.tests.js`)
- **Cenário 1:** Formulário totalmente vazio
- **Cenário 2:** Email inválido
- **Cenário 3:** Senha fraca
- **Cenário 4:** Confirmação de senha incorreta
- **Cenário 5:** Apenas email preenchido
- **Cenário 6:** Apenas senha preenchida
- **Cenário 7:** Apenas confirmação de senha preenchida
- **Cenário 8:** Email e senha preenchidos (sem confirmação)
- **Cenário 9:** Email e confirmação de senha (sem senha)
- **Cenário 10:** Dados corretos
  - Resultado esperado: Validações de erro apropriadas ou sucesso na criação de conta

#### 5.5. **Login** (`login.tests.js`)
- **Cenário 1:** Email inválido
- **Cenário 2:** Email vazio
- **Cenário 3:** Senha vazia
- **Cenário 4:** Email e senha vazios
- **Cenário 5:** Senha fraca
- **Cenário 6:** Login válido
- **Cenário 7:** Email e senha inválidos
  - Resultado esperado: Validações de erro ou sucesso com fechamento do modal de alerta

#### 5.6. **Swipe Horizontal** (`swipe.tests.js`)
- **Cenário 1:** Swipe à esquerda no primeiro card
  - Resultado esperado: Texto do segundo card: "GREAT COMMUNITY"
- **Cenário 2:** Swipe à esquerda e à direita retornando ao estado anterior
  - Resultado esperado: Texto do segundo card permanece "GREAT COMMUNITY"

#### 5.7. **WebView** (`webview.tests.js`)
- **Cenário 1:** Acesso ao menu WebView + clique em "Get Started" + validação de texto
- **Cenário 2:** Acesso ao menu lateral dentro da WebView
  - Resultado esperado: Validação da visibilidade da documentação

---

### 6. **Considerações Finais**

Os testes descritos garantem cobertura essencial das funcionalidades do aplicativo. Com esses cenários implementados e validados via automação, é possível identificar falhas rapidamente, validar requisitos funcionais e assegurar maior confiança nas entregas para produção.