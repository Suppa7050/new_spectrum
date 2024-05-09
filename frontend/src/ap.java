import java.util.*;
public class ap{
    public static int rohit(int n,int k){
        if(n==1){
            return 0;
        }
        else if (k<=Math.pow(2,n-2)){
            return rohit(n-1,k);
        }
        else{
            if (rohit(n-1,k-n+1)==0){
                return 1;
            }
            else{
                return 0;
            }
        }
    }
    public static void main (String[] args) {
        Scanner sc=new Scanner(System.in);
        int a=sc.nextInt();
        int b=sc.nextInt();
        int g=rohit(a,b);
        System.out.println(g);
    }
}