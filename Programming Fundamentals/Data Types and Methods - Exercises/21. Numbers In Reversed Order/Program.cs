using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            Console.WriteLine(Reverse(input));
        }
        static char[] Reverse(string text)
        {
            char[] array = text.ToCharArray();
            Array.Reverse(array);
            return array;
        }
    }
}
