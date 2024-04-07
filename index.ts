#! /usr/bin/env node
import inquirer from "inquirer"
const currency:any ={
    USD:"1",
    PKR:"279.35",
    INR:"72.57",
    EUR:"0.91",
    GBP:"0.76",
   };let user_answer =await inquirer.prompt(
    [
      {
      name:"FROM",
      message:"Enter From currency",
      type:"list",
      choices: ["USD","INR","PKR","EUR","GBP"]
      },
      {
      name:"TO",
      message:"Enter TO currency",
      type:"list",
      choices: ["USD","INR","PKR","EUR","GBP"]
       },
      {
      name:"AMOUNT",
      message:"Enter YOUR AMOUNT",
      type:"NUMBER",
      }
    ]
  );
  let userFromCurrency = user_answer.FROM
  let userToCurrency = user_answer.TO
  let fromAmount = currency [userFromCurrency] //exchange rate
  let TOAmount = currency [userToCurrency] //exchange rate
  let AMOUNT = user_answer.AMOUNT
  let baseAmount = AMOUNT/ fromAmount // usd base currency //4
  let convertedAmount = baseAmount * TOAmount
  console.log(convertedAmount)

