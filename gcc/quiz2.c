#include <stdio.h>
#include "libcheckprime.h"

void main(){
  while(1)
  {
    int n;
    printf("\n input integer => ");
    scanf("%d", &n);
    if(n==0)
      break;
    if (checkprimec(n) == n)
      printf("%d is a prime number");
    else
      printf("%d is not prime number");
  }
}
