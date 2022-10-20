import java.util.Scanner;

public class gugudan {
  public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);

    while(true){
        System.out.println("Insert number(0:Exit) : ");
        int i = sc.nextInt();

        if(i == 0) {
          break;
        } else if (i>1 && i<10) {
            for(int j=1; j<=9; j++) {
              System.out.println(i +"*"+ j +"=" + i*j);
          }
      } else {
        System.out.println("Insert number 2~9. Retype Again~!!\n");
      }
    }
    }
}
