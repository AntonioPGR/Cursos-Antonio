using System;

namespace Array{
    class Program{
        static void Main(string[] args){
            Console.Clear();

            int[] numbers = new int [10];
            for (int i = 0; i < 10 ; i++){
                numbers[i] = i;
            }

            numbers[11] = 10;

            Console.WriteLine($"O primeiro numero do array numbers é {numbers[0]}");

            foreach(int number in numbers){
                Console.WriteLine(number);
            }
        }
    }
}
