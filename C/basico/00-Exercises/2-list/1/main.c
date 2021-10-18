#include <stdio.h>
#include <stdlib.h>

int main(){
    system("cls");

    float value, new_value;
    int desc;

    printf("Valor da compra: ");
    scanf("%f", &value);

    if(value <= 1000){
        desc = 10;
    } else if(value <= 5000){
        desc = 20;
    } else {
        desc = 30;
    }

    new_value = value - (value/100) * desc ;

    printf("Devido ao valor de sua compra, voce ganhou um desconto de %d porcento \n", desc);
    printf("Portanto, seu novo valor e de %f", new_value);
}