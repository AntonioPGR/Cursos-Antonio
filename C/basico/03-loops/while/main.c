#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

main(){
    system("cls");

    bool i = false;
    int count = 0;
    float notas[40];
    float result;

    while(result >= 0){
        count++;

        printf("Digite a %d nota (valor negativo para parar) : ", count);
        scanf("%d", &result);

        if(result >= 0){
            notas[count] = result; 
        }
    }

    printf(notas);
}