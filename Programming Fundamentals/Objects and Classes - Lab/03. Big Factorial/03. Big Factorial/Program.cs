using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;

namespace _03.Big_Factorial
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            BigInteger f = 1;
            for (int i = 1; i <= n; i++)
            {
                f = f*i;
            }
            Console.WriteLine(f);
        }
    }
}
