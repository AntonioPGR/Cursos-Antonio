#include <stdio.h>
#include <stdlib.h>

int main(){
    system("cls");

    float x = 5, y = 2;

    if((x < 6) && (y < x)){
        x++; y++;
    } else {
        x = x + 2;
    }
    y = y + 3;

    if(x == y){
        x++;
    }else{
        y--;
    }

    if((x < 10) && (y > 8)){
        x--;
    }else{
        y--;
    }

    printf("%f", x);
}