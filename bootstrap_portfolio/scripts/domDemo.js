console.log(document);

function testTheDom(){
    console.log("inside test the dom")
    var nodes=document.getElementsByTagName("li")
    console.log(nodes);

    for(let node of nodes){
        console.log(node.textContent);
    }

}

function depositChecking(){
    var checkingNode=document.getElementById("checking");
    console.log(checkingNode.textContent);
    //checkingNode.textContent="changed";
    var balance=parseInt(checkingNode.textContent);
    balance+=100;
    checkingNode.textContent=balance;
}

function depositSavings(){
    var savingsNode=document.getElementById("savings");
    var balance=parseInt(savingsNode.textContent);
    balance+=100;
    savingsNode.textContent=balance;

    if(savings==0){
        var title=document.getElementById('bankAccountTitle');
        title.textContent="Bank Account";
    }
}

function emptySavings(){
    var savingsNode=document.getElementById("savings");
    savingsNode.textContent=0;
    var title=document.getElementById('bankAccountTitle');
    title.textContent="ALERT:Savings Empty";
}