#include <stdio.h>
int main(){
	double numb1,numb2;
	char op;
	     printf("Enter first number\n");
		 scanf("%lf",&numb1);
	 printf("Enter second number\n");
	 scanf("%lf",&numb2);
	 printf("Enter\n+ for Add\n-for sub\n*for multiply\n/for div\n");
     scanf("\n%c",&op);
	  switch(op)
	 {
	 case '+':
	 printf("Add:%lf",numb1+numb2);
	 break;
	 case '-':
	 printf("Sub:%lf",numb1-numb2);
	 break;
	 case '*':
	 printf("Mult:%lf",numb1*numb2);
	 break;
	 case '/':
	 printf("Div:%lf",numb1/numb2);
	 break;
	 default:
	 	printf("sytax error!!");
	 }
	 return 0;
}