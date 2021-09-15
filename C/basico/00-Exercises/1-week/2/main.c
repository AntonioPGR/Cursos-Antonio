#include <stdio.h>
#include <stdlib.h>

main(){
    // limpar a tela do terminal
    system("cls");

    // declaração de variaveis
    float salario, porcento, novo_salario;
    char nome[40];

    // obtenção de dados
    printf("Nome do funcionario: ");
    scanf("%s", &nome);

    printf("Salario atual: ");
    scanf("%f", &salario);

    printf("Porcentagem de aumento: ");
    scanf("%f", &porcento);

    // calculo
    novo_salario = salario + (salario * (porcento / 100));

    // output
    printf("O funcionario %s tera um aumento de %f porcento em seu salario, portanto, seu salario que seria de %f, agora sera de %f", nome, porcento, salario, novo_salario);
}