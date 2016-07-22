/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.eHealth;
/**
 *
 * @author Ayeni Olusegun
 */
public class Number1 {
    public static void main(String[] args) {
        int number = 1041;
        System.out.println(getBinaryZeroGap(number));
    }

    private static int getBinaryZeroGap(int number) {
        int maxZeroGap = 0;
        int countofZero = 0;
        boolean foundFirst = false;

        while (number != 0){
            if ((number & 1) == 1){
                if (!foundFirst)
                    foundFirst = true;
                else
                    maxZeroGap = Math.max(maxZeroGap, countofZero);

                countofZero = 0;
            }else
                countofZero++;

            number = number >> 1;
        }
        return maxZeroGap;
    }
}
