#include <stdio.h>
#include <stdlib.h>

main(){
    system("cls");

    int n1, n2, op;

    printf("Primeiro numero: ");
    scanf("%d", &n1);

    printf("Segundo numero: ");
    scanf("%d", &n2);

    printf("Escolha uma opcao: \n1-soma \n2-subtracao \n3-multiplicacao \n4-divisao \nescolha: ");
    scanf("%d", &op);

    switch (op){
    case 1:
        printf("A soma e igual a: %d", n1+n2);
        break;
    case 2:
        printf("A subtracao e igual a %d", n1-n2);
        break;
    case 3:
        printf("A multiplicacao e igual a %d", n1 * n2);
        break;
    case 4:
        printf("A divisao e igual a %d", n1 / n2);
        break;
    default:
        printf("Nao temos essa opcao");
        break;
    }
}