using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2
{
    class Program
    {
        static void Main(string[] args)
        {
            int a = int.Parse(Console.ReadLine());
            string hex = Convert.ToString(a, 16).ToUpper();
            string bin = Convert.ToString(a, 2);
            Console.WriteLine(hex);
            Console.WriteLine(bin);

        }
    }
}
