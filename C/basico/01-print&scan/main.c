#include <stdio.h>
#include <stdlib.h>

int main () {
    system("cls");

    char nome[10];
    printf("Digite seu nome: ");
    scanf("%s" , &nome);

    printf("Ola, %s", nome);
}