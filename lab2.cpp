#include<iostream>
#include<list>

using namespace std;

#define SIZE 10

int main(){
	int keys[]={25,35,15,42};
	int n=4;
	
	list<int> chainTable[SIZE];
	
	int probeTable[SIZE];
	for(int i=0;i<SIZE;i++)
	  probeTable[i]=-1;
	  
	for(int i=0;i<n;i++)
	{
		int key=keys[i];
		int index=key % SIZE;
		
		chainTable[index].push_back(key);
		
		int pos=index;
		
		while(probeTable[pos] !=-1)
		  pos=(pos+1)%SIZE;
		  
		probeTable[pos]=key;
	}
	cout<<"Seperate Chaining:\n";
	for(int i=0;i<SIZE;i++)
	{
		cout<<i<<"-->";
	for(int x: chainTable[i])
	   cout<<x<<"->";
	   cout<<"NULL\n";
    }
    
    
    cout<<"\nLinear Probing:\n";
    for(int i=0;i<SIZE;i++)
    {
    	cout<<i<<"-->";
    	if(probeTable[i] == -1)
    	   cout<<"NULL";
    	else
    	   cout<<probeTable[i];
    	cout<<endl;
    	
    }
    
    
    return 0;
	}
