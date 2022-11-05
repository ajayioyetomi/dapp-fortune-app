'reach 0.1';
'use strict';

const returnData = Bytes(128)

export const main = Reach.App(()=>{
    const Alice = Participant('Alice',{
        amount: UInt,
        acceptFuntune: Fun([returnData],Bool),
        informTimeout: Fun([],Null),
        seeOutcome:Fun([],Null),
        deadline:UInt,
    });
    const Bob = Participant('Bob',{
        acceptAmount: Fun([UInt],Null),
        readFuntune: Fun([],returnData),
        informTimeout: Fun([],Null),
        seeOutcome:Fun([],Null),
    })
    init();

    Alice.only(()=>{
        const amount = declassify(interact.amount);
        const deadline = declassify(interact.deadline);
    });

    Alice.publish(amount,deadline).pay(amount)
    commit();

    const informTimeout = ()=>{
        each([Alice,Bob],()=>{
            interact.informTimeout();
        })
    }
    Bob.only(()=>{
        declassify(interact.acceptAmount(amount));
    })
    Bob.publish().timeout(relativeTime(deadline),()=>closeTo(Alice,informTimeout))
 
    var acceptedFuntune = false;
    invariant(balance() == amount)
    while(acceptedFuntune == false){
        commit();
        Bob.only(()=>{
            const fortune = declassify(interact.readFuntune());
        });
        Bob.publish(fortune).timeout(relativeTime(deadline),()=> closeTo(Alice,informTimeout));
        commit();
    
        Alice.only(()=>{
            const decision = declassify(interact.acceptFuntune(returnData.pad(fortune)));
        })
        Alice.publish(decision).timeout(relativeTime(deadline),()=> closeTo(Bob,informTimeout));
        acceptedFuntune = decision;
        continue;
    }

    assert(acceptedFuntune == true);
    transfer(amount).to(Bob);
    commit();

    each([Alice,Bob],()=>{
        interact.seeOutcome();
    });
    exit();
})