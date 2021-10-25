#include <stdio.h>
#include <stdlib.h>

int main(){
    system("cls");

    float freteFixo;
    printf("Valor fixo do frete: ");
    scanf("%f", &freteFixo);

    int regiao;
    printf("Numero da regiao: ");
    scanf("%d", &regiao);

    float valorFrete;
    switch(regiao){
        case 1:
            valorFrete = 0.5 * freteFixo;
            break;
        case 2:
            valorFrete = 0.3 * freteFixo;
            break;
        case 3:
            valorFrete = 0.8 * freteFixo;
            break;
        case 4: 
            valorFrete = 1.5 * freteFixo;
            break;
        default:
            valorFrete = freteFixo;
            break;
    }

    printf("O valor total do frete e: %2f", valorFrete);

    return 0;
}