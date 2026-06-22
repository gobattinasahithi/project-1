#include <iostream>
#include <list>
using namespace std;
int main(){


const int SIZE=10;
list<int>hashTable[SIZE];
//inser 4 element
int arr[4]={25,35,15,42};
for(int i=0; i<4; i++){
	int index=arr[i]%SIZE;
	hashTable[index].push_back(arr[i]);
}

cout<<"Hash Table after Insertion:\n";
for(int i=0; i<SIZE; i++){
	cout<<i<<"-->";
	for(int x: hashTable[i])
	cout<<x<<"->";
	cout<<"NULL\n";
}

int key=35;
int index=key%SIZE;

bool found=false;

for (int x: hashTable[index]){
	if(x==key){
		found = true;
		break;
	}
}

if(found)
cout<<"\n35 found\n";

else
cout<<"\n35 Not Found\n";

//delete
hashTable[index].remove(35);
cout<<"/n35 Deleted\n";

//display
cout<<"\nHash Table After Deletion:\n";

for(int i=0; i<SIZE;i++){
	cout<<i<<"-->";
	
	for(int x:hashTable[i])
    	cout<<x<<"->";
    cout<<"NULL\n";
}
return 0;
}
