#include <stdio.h>
#include <stdlib.h>

int main(){
    system("cls");

    float sal;
    printf("Salario do funcionario: ");
    scanf("%f", &sal);

    if(sal <= 200){
        sal += (sal/100)*13;
    } else if(sal <= 400){
        sal += (sal/100)*11;
    } else if(sal <= 800){
        sal += (sal/100)*9;
    } else {
        sal += (sal/100)*7;
    }

    printf("O novo salario e: %f", sal);
}