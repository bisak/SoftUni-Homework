using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication11
{
    class Program
    {
        static void Main(string[] args)
        {
            string animal = Console.ReadLine();
            switch (animal)
            {
                case "crocodile":
                case "tortoise":
                case "snake": Console.WriteLine("reptile"); break;
                case "dog": Console.WriteLine("mammal"); break;
                default: Console.WriteLine("unknown"); break;
            }
        }
    }
}
