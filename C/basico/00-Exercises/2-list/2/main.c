#include <stdio.h>
#include <stdlib.h>

int main(){
    system("cls");

    int questions;
    char grade;

    printf("Numero de questoes corretas: ");
    scanf("%d", &questions);

    if(questions <= 49){
        grade = "d";
    } else if(questions < 69){
        grade = "c";
    } else if(questions <= 89){
        grade = "b";
    } else {
        grade = "a";
    }

    printf("Com %d questoes certas, sua nota e %c", questions, grade);

}