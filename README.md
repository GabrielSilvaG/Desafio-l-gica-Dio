# Classificador de Nível de Herói

Este projeto é um simples classificador de níveis para heróis com base na quantidade de experiência (XP) acumulada. Dependendo da quantidade de XP, o herói é classificado em diferentes níveis, como Ferro, Bronze, Prata, entre outros.

## Como Funciona

1. O usuário insere o nome do herói e a quantidade de experiência (XP) acumulada.
2. O programa utiliza uma estrutura de decisão para determinar o nível do herói com base na XP.
3. O nível do herói é então exibido em uma mensagem no console.

## Regras de Classificação

- **XP < 1000**: Ferro
- **1001 <= XP <= 2000**: Bronze
- **2001 <= XP <= 5000**: Prata
- **5001 <= XP <= 7000**: Ouro
- **7001 <= XP <= 8000**: Platina
- **8001 <= XP <= 9000**: Ascendente
- **9001 <= XP <= 10000**: Imortal
- **XP >= 10001**: Radiante
