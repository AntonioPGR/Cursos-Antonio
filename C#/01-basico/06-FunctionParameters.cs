using System;

namespace Methods{
    class Program{
        static void PrintSomething(string value = "hello world!"){
            Console.WriteLine(value);
        }

        static void Main(string[] args){
            Console.Clear();

            PrintSomething("Ola, meu nome é antonio");
            PrintSomething();
        }
    }
}