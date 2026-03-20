# 📱 Notícias do Elevador

Aplicativo mobile desenvolvido com **React Native + Expo**, com foco em simular um painel de atualizações de elevador com interface dinâmica.

---

## 🚀 Funcionalidades

- 📜 Lista de notícias com **ScrollView**
- 🌗 Alternância de tema **claro/escuro**
- 🔁 Controle de estado com **useState**
- ⏳ Indicador de carregamento simulando **atualizações OTA**
- 🧩 Componentização da interface

---

## 🛠️ Tecnologias utilizadas

- React Native
- Expo
- TypeScript
- EAS (Expo Application Services)

---

## 📱 Interface

A tela principal simula um painel de elevador exibindo:

- Atualizações recentes
- Informações do sistema
- Mudanças visuais em tempo real (tema)

---

## 🐞 Bug visual (proposital)

Foi inserido um bug visual no tamanho do título das notícias, reduzindo sua legibilidade.

### ✔ Correção

O bug foi corrigido ajustando o tamanho da fonte, simulando uma atualização OTA sem necessidade de rebuild completo.

---

## 🔄 OTA (Over The Air Update)

A correção foi aplicada utilizando o comando:

```bash
eas update --branch production --message "corrige bug visual"
```
## ▶️ Como executar o projeto

```bash
npm install
npm run web
```
Ou:

```bash
npx expo start
```

## 📦 Build com EAS

```bash
eas build --platform android
```

## 📌 Observações

Este projeto foi desenvolvido como atividade acadêmica, com foco em:

- Gerenciamento de estado

- Interface responsiva

- Atualizações OTA

- Organização em componentes
