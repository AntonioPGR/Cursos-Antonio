#include <stdlib.h>
#include <stdio.h>

main(){
    system("cls");

    int number, divisor;
    divisor = 2;

    printf("Digite o numero: ");
    scanf("%d", &number);

    if(number%divisor==0){
        printf("Sim! o numero e divisivel por %d", divisor);
    } else {
        printf("Nao! o numero nao e divisivel por %d", divisor);
    }
}