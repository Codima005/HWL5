
do{
    operation = prompt('Enter one of operation +, -, *, /');
    if(operation){
    operation = operation.trim();
    }
}while (operation != `+` && operation!= `-` && operation != `*` && operation != `/`);

do{
    NumberOfOper = parseInt( prompt(`haw many operands do you whant ? (1<caunt<7)`));
}while (NumberOfOper<= 1 || NumberOfOper >= 7);

result = 0;

for(i=1; i<=NumberOfOper; i++){
    do{
        operand = +prompt(`Enter operand #${i}`);
    }while(isNaN(operand)|| !operand);
    if(i==1){
        result = operand;
    } else{
        switch(operation){
            case '+':
                result += operand;
                break;
            case '-':
                result -= operand;
                break;
            case '*':
                result *= operand;
                break;
            case '/':
                result /= operand;
                break;
        }
    }
}
           
alert(`Final Result: ${result}`);

