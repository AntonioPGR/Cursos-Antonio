using System;

namespace Methods{
    class Program{
        static int Sum(int n1 = 1, int n2 = 1){
            return n1 + n2;
        }

        static void Main(string[] args){
            Console.Clear();

            int Soma = Sum(5, 10);
            Console.WriteLine(Soma);
        }
    }
}