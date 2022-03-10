module.exports = {
  answer: [
    `#include<bits/stdc++.h>
    using namespace std;
    
    int main(){
        
        int n;
        cin>>n;
        
        vector<int> arr(n);
        for(int i=0;i<n;i++){
            cin>>arr[i];
        }
        
        cout<<accumulate(arr.begin(),arr.end(),0);
        
        return 0;
    }
    `,
  ],
};
