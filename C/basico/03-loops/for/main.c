#include <stdio.h>
#include <stdlib.h>

main(){
    system("cls");

    printf("--------------------- \n");
    printf("TABUADA \n");
    printf("--------------------- \n");

    int num;
    printf("Numero que deseja ver a tabuada: ");
    scanf("%d", &num);
    printf("--------------------- \n");

    int c = 0;
    for ( c = 0; c <= 10; c++){
        printf("%d x %d = %d \n", num, c, c*num);
    }
}