#include <stdio.h>
#include <stdlib.h>

main(){
    system("cls");

    float soma, nota, media;
    int n_notas = 3;

    for(int i = 0; i < n_notas; i++){
        printf("Digite a %d nota: ", i+1);
        scanf("%f", &nota);

        soma += nota;
    }

    media = soma / n_notas;

    printf("A media das notas do aluno e%2.f, portanto o aluno esta ", media);

    if(media >= 7){
        printf("APROVADO");
    } else {
        printf("REPROVADO");
    }
}