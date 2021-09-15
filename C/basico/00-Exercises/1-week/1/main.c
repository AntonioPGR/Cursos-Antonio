#include <stdlib.h>
#include <stdio.h>

main(){
    // limpa a tela do terminal
    system("cls");

    float base, altura, area;

    // obtem os valores de base e altura
    printf("Base do triangulo: ");
    scanf("%f", &base);

    printf("Altura do triangulo: ");
    scanf("%f", &altura);

    // calculo da área
    area = (base*altura) / 2;

    // output
    printf("O triangulo digitado contem: \nbase = %f \naltura = %f \nPortanto, sua area e = %f ", base, altura, area);
}