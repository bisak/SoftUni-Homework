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
            string firstname = Console.ReadLine();
            string lastname = Console.ReadLine();
            string age = Console.ReadLine();
            Console.WriteLine($"Hello, {firstname} {lastname}. \nYou are {age} years old.");
        }
    }
}
