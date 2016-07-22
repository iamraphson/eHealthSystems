/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/**
 *
 * @author Ayeni Olusegun
 */
public class Number2 {
    public static void main(String[] args) {
        String testString = "Hello, Sir, please click on the link www.example.com/confirmation?user1 and "
                + "visit our website at www.example.com";
        System.out.println(reformatStringWithUrl(testString));
    }

    public static String reformatStringWithUrl(String text){
        //hyperlink regex
        String hyperlinkRegex =
            "((http|ftp|https):\\/\\/)?[\\w\\-_]+(\\.[\\w\\-_]+)+([\\w\\-\\.,@?^=%&amp;:/~\\+#]*[\\w\\-\\@?^=%&amp;/~\\+#])?";

        return text.replaceAll(hyperlinkRegex, "<a href=\"$0\">$0</a>");
    }
}
