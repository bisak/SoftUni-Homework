using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Prime_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            decimal n = decimal.Parse(Console.ReadLine());

            bool[] e = new bool[(ulong)n+1];
            for (decimal i = 2; i < n; i++)
            {
                e[(ulong)i] = true;
            }
            for (decimal j = 2; j < n; j++)
            {
             
                    for (decimal p = 2; (p * j) < n; p++)
                    {
                        e[(ulong)p * (ulong)j] = false;
                    }
                
            }
            for (decimal i = 0; i < n; i++)
            {
                if (e[(ulong)i])
                    Console.Write(i + " ");
            }
        }
    }
}
