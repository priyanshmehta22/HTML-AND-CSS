import java.io.*;

import java.util.Scanner;


class ct1{

    public static void main(String[] args){

        System.out.println(Integer.parseInt("10")+Integer.valueOf("10a"));

        Scanner in=new Scanner(System.in);

        int i,n,x,j;

        int[][] ja=new int[4][];

         for( i=0;i<4; i++){

            System.out.println("input number of students in batch"+(i+1));

            x=in.nextInt();

            n=(x/4)+((x/4)*4==x?0:1);

            ja[i]=new int[n];

            for(j=0;j<n;j++,x-=4) ja[i][j]=x>4?4:x;

        }

        System.out.println("array made, now we parse:");

        int tot=0;

        for( i=0;i<4; i++){

            System.out.println("");

            System.out.println("batch "+(i+1));

            for(j=0;j<ja[i].length;j++){

                System.out.print(ja[i][j]+", ");

                if(ja[i][j]==4) tot++;

            }

        }

        System.out.println("total number of full groups is:"+tot);

    }

}w