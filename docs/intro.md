---
sidebar_position: 1
---

# Introdução ao Tutorial

Vamos descobrir o **Docusaurus em menos de 5 minutos**.

## Primeiros Passos

Comece por **criar um novo site**.

Ou **experimente o Docusaurus imediatamente** com **[docusaurus.new](https://docusaurus.new)**.

### O que vai precisar

- [Node.js](https://nodejs.org/en/download/) versão 20.0 ou superior:
  - Ao instalar o Node.js, é recomendado selecionar todas as opções relacionadas com dependências.

## Gerar um novo site

Gere um novo site Docusaurus usando o **modelo clássico**.

O modelo clássico será automaticamente adicionado ao seu projeto após executar o comando:

```bash
npm init docusaurus@latest my-website classic
```

Pode escrever este comando no Prompt de Comando, Powershell, Terminal, ou qualquer outro terminal integrado do seu editor de código.

O comando também instala todas as dependências necessárias para executar o Docusaurus.

## Iniciar o seu site

Execute o servidor de desenvolvimento:

```bash
cd my-website
npm run start
```

O comando `cd` muda o diretório com o qual está a trabalhar. Para trabalhar com o seu novo site Docusaurus, precisará navegar até lá no terminal.

O comando `npm run start` compila o seu website localmente e serve-o através de um servidor de desenvolvimento, pronto para visualizar em http://localhost:3000/.

Abra `docs/intro.md` (esta página) e edite algumas linhas: o site **recarrega automaticamente** e mostra as suas alterações.
