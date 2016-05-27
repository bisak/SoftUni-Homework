using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Last_K_Numbers_Sums
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = 6;
            var k = 3;
            var seq = new long[n];
            seq[0] = 1;
            for (int current = 1; current < n; current++)
            {
                var start = Math.Max(0, current - k);
                var end = current - 1;
                long sum = 0;
                for (int i = start; i <= end; i++)
                {
                    sum+= seq[i];
                }
                seq[current] = sum;
            }
            Console.WriteLine(string.Join(" ", seq));
        }
        
    }
}
