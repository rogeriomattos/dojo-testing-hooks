# Dojo: Como fazer testes unitários em hooks

## O que é um hook?
Hooks são funções que permitem usar os recursos do React no seu componente. Essa funções podem ser as nativas do framework ou customizadas. Um hook sempre inicializa com a palava ```use``` no seu nome

Exemplos de hooks mais usados: 

- useState
- useEffect
- useMemo
- useCallback
- etc…

## Porque não consigo testar como uma função?
Hooks são funções que necessitam serem execultadas dentro de um component React, logo esse tipo de função não pode ser simplesmente chamada dentro de um teste, como ocorre com funçõe normais do Javascript.

## Projeto de exemplo

## Como rodar o projeto
1. Clone o projeto:
```terminal
git clone https://github.com/rogeriomattos/dojo-testing-hooks
```

2. Dentro da pasta do projeto instale as dependencias
```terminal
npm install
```
ou
```terminal
yarn
```
3. Para subir o projeto execute:
```terminal
npm start
```
ou
```terminal
yarn start
```
   
## Testando o hook
Para testar rode o comando:
```terminal
npm test
```
ou
```terminal
yarn test
```

## Referencias
- Medium test custom hook: https://kentcdodds.com/blog/how-to-test-custom-react-hooks
- Documentação de como criar hook: https://react.dev/learn/reusing-logic-with-custom-hooks#extracting-your-own-custom-hook-from-a-component
- Apresentação react conf de 2018 sobre hooks: https://youtu.be/dpw9EHDh2bM?t=731
