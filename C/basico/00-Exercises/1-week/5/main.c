#include <stdio.h>
#include <stdlib.h>

main(){
    system("cls");

    float peso, altura, imc;

    printf("Peso: ");
    scanf("%f", &peso);

    printf("Altura: ");
    scanf("%f", &altura);

    imc = peso / (altura*altura);

    printf("Para uma pessoa que pesa %f e tem %f de altura, o imc e: %f", peso, altura, imc);
}