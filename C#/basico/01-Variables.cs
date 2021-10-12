using System;

namespace Run{
    class Program{
        static void Main(string[] args){
            Console.Clear();
            string Nome = "Antonio";
            int Idade = 15;
            char Sexo = 'M';
            double Altura = 1.82D;

            Console.WriteLine("Olá! meu nome é " + Nome + ", Atualmente tenho " + Idade + " anos, " + Altura + "m de altura e sou do sexo " + Sexo);
        }
    }
}
