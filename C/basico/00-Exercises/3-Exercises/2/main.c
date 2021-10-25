#include <stdio.h>
#include <stdlib.h>

int main(){
    system("cls");

    float salario;
    printf("Salario atual do funcionario: ");
    scanf("%f", &salario);

    int plano; 
    printf("Plano de trabalho:");
    scanf("%d", &plano);

    int aumento;
    switch(plano){
    case 1:
        aumento = 10;
        break;
    case 2:
        aumento = 15;
        break;
    case 3:
        aumento = 20;
        break;
    default:
        aumento = 0;
        break;
    }

    float novoSalario = salario + (salario/100) * aumento;
    printf("O novo salario com %d de aumento e: %f", aumento, novoSalario);
}