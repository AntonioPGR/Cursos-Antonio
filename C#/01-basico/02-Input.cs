using System;

namespace Run{
    class Program{
        static void Main(string[] args){
            Console.Clear();

            Console.Write("Digite seu nome: ");
            string username = Console.ReadLine();

            Console.Write("Digite o ano de seu nascimento: ");
            int birthyear = Convert.ToInt32(Console.ReadLine());

            int age = 2021 - birthyear;

            Console.WriteLine("Olá " + username + ", Sua idade é " + age + " anos");
        }
    }
}
