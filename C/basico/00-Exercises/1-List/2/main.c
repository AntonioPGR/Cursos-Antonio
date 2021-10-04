#include <stdio.h>
#include <stdlib.h>

main(){
    system("cls");

    int altura;
    float pesoIdeal;
    char sexo;

    printf("Altura em cm: ");
    scanf("%d", &altura);

    printf("Sexo (M/F) : ");
    scanf(" %c", &sexo);

    if(sexo == 'M' || sexo == 'm'){
        pesoIdeal = (72.7 * altura) / 100 - 58;
        printf("Seu peso ideal e %.2f", pesoIdeal);
    } else {
        pesoIdeal = (62.1 * altura) / 100 - 44.7;
        printf("Seu peso ideal e: %.2f", pesoIdeal);
    }
}