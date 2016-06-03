using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Print_String_Letters
{
    class Program
    {
        static void Main(string[] args)
        {
            var s = Console.ReadLine();
            var arr = s.ToArray();
            int count = 0;
            foreach(var l in arr)
            {
                
                Console.WriteLine("str[{0}] -> '{1}'", count, l);
                count++;
            }
        }
    }
}
