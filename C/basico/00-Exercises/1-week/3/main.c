#include <stdlib.h>
#include <stdio.h>

main(){
    system("cls");

    float espetaculo, ingresso;
    int minimo;

    printf("Valor para execucao do espetaculo: ");
    scanf("%f", &espetaculo);

    printf("Valor do ingresso: ");
    scanf("%f", &ingresso);

    // calculo
    minimo = ceil(espetaculo / ingresso);

    printf("Sera nescessario que se venda ao menos %d ingressos para que o espetaculo possa ocorrer sem prejuizos", minimo);
}