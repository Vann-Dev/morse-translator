## Introduction

> A package for javascript or nodejs to translate a word, text, sentence, number into morse code

## Support

[Support server](https://discord.gg/hM8U8cHtwu) <a href = "https://discordapp.com/users/435497505883422721/">

<img src = "https://imgur.com/RSEvkDl.png" height= 15px width = 15px> Discord </a>&nbsp;&nbsp;


## Code Samples


```
const translate = require('morse-translator'); //morse-tranlator

let get;
try {
    get = translate('morse') //translate the word 'morse' to morse code
} catch (err) {
    console.log(err) 
    }

console.log(get) //send the result into console.log

```

## Instalation
```npm i morse-translator```