#include<stdio.h>
int main()
{
	float amt,creditamt,debitamt;
	char ch;
	printf("Enter initial amount\n");
	scanf("%f",&amt);
	printf("Enter\nc for credit\nd for debit\nb for balance\n");
	scanf("\n%c",&ch);
	switch(ch)
	{		
		case 'c':
			printf("Enter credit amount\n");
			scanf("%f",&creditamt);
			amt=amt+creditamt;
			printf("New Amount=%f",amt);
			break;
		case 'd':
			printf("Enter debit amount\n");
			scanf("%f",&debitamt);
			if(amt>=debitamt)
			{
			amt=amt-debitamt;
			printf("New Amount=%f",amt);
		    }
		    else
		    {
		    printf("Insufficient amount");
			}
			break;
		case 'b':
			printf("Amount in your account=%f",amt);
			break;
		default:
			printf("Invalid input!!");
	}
}
