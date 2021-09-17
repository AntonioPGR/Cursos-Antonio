#include <stdio.h>
#include <stdlib.h>

main(){
    system("cls");

    int n1, n2;

    printf("Primeiro numero:");
    scanf("%d", &n1);

    printf("Segundo numero:");
    scanf("%d", &n2);

    if(n1 > n2){
        printf("O primeiro numero e maior");
    } else if (n1 < n2){
        printf("O segundo numero e maior");
    } else {
        printf("Os dois numeros sao iguais");
    }
    
}