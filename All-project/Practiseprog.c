#include<stdio.h>
int main()
{
	int x,y;
	printf("Enter first number\n");
	scanf("%d",&x);
	printf("Enter second number\n");
	scanf("%d",&y);
	if(x>y)
	{
		printf("first no is greater");
	}
	if(x<y)
	{
		printf("second no is greater");
	}
	if(x==y)
	{
		printf("both are equal");
	}
}
