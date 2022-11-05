import { loadStdlib,ask } from "@reach-sh/stdlib";
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib('ALGO');

const startingBalance = stdlib.parseCurrency(100);

var isAlice = await ask.ask(
    `Do you want your fortune read \n yes: I want my fortune read \n no I want to read your fortune`,
    ask.yesno
);
let acc = null;
const newAcc = await ask.ask(`
    Do you want to create a new Test account (This only works in devnet)`,
    ask.yesno
);

if(newAcc){
    acc = await stdlib.newTestAccount(startingBalance);
}else{
    const secret = await ask.ask(
        `Paste your account secret here `,
        (x=>x)
    );
    acc = await stdlib.newAccountFromSecret(secret);
}


const formatByteToString = (byte) =>{
    let i = 0;
    let output = '';
    let len = String(byte).length;
    for(i = 0;i<len;i++){
        let char = byte[i];
        if(String(char) !== String('\u0000')){
            output+= char.toString();
        }
    }
    
    return output;
}


let ctc = null;

if(isAlice){
    ctc = acc.contract(backend);
    ctc.getInfo().then(info =>{
        console.log(`The contract is deployed as = ${JSON.stringify(info)}`);
    })
}
else{
    let info = ask.ask(
        `Get contract Into and paste it here`,
        JSON.parse
    )
    ctc = acc.contract(backend,info)
}

const deadline = {ETH:100,ALGO:100000,CFX:10}[stdlib.connector];
const interact = {};

interact.informTimeout = ()=>{
    console.log(`Sorry the application Timeout`);
    process.exit(1);
}
interact.seeOutcome = () =>{
    console.log(`The fortune was good and so it was paid for`);
    process.exit(1);
}

const fmt = (x)=> stdlib.formatCurrency(x,4);


if(isAlice){
    const amount = await ask.ask(`How much tokens are you willing to pay reading your fortune?`,
        stdlib.parseCurrency
    );
    interact.amount = amount;
    interact.deadline = deadline;
}
else{
    interact.acceptAmount = async (amt)=>{
        const accept = await ask.ask(`Do you accept ${fmt(amt)} as payment for fortune reading`,
            ask.yesno
        )
        if(!accept){
            process.exit(0);
        }
    }
}


if(!isAlice){
    interact.readFuntune = async () =>{
        const fortune = await ask.ask(`Write down the fortune`,
        (x=>x));
        return fortune;
    }
}
else{

    interact.acceptFuntune = async (byte) =>{
        const decison = await ask.ask(`Do you accept the fortune: \n
        ${formatByteToString(byte)}`,
        ask.yesno
        )
        return decison;
    }
}

let play = isAlice? ctc.p.Alice:ctc.p.Bob;

await play(interact);

console.log('Done')
aks.done();
