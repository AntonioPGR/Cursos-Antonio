#include <stdio.h>
#include <stdlib.h>

main(){
    system("cls");

    int tshirt_p, tshirt_m, tshirt_g, value, value_p, value_m, value_g;
    value_p = 10;
    value_m = 12;
    value_g = 15;

    printf("Numero de camisetas P: ");
    scanf("%d", &tshirt_p);

    printf("Numero de camisetas M: ");
    scanf("%d", &tshirt_m);

    printf("Numero de camisetas G: ");
    scanf("%d", &tshirt_g);

    value = (value_p * tshirt_p) + (value_m * tshirt_m) + (value_g * tshirt_g);

    printf("O valor de compra de %d camisetas P, %d camisetas M e %d camisetas G fica %d", tshirt_p, tshirt_m, tshirt_g, value);
}