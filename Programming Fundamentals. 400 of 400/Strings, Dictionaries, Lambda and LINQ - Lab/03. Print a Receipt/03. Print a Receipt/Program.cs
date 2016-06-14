using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Print_a_Receipt
{
    class Program
    {
        static void Main(string[] args)
        {
            var nums = Console.ReadLine().Split(' ').Select(decimal.Parse);
            decimal sum = 0;
            Console.WriteLine(@"/----------------------\");
            foreach (var num in nums)
            {
                Console.WriteLine("| {0,20:f2} |", num);
                sum = sum+num;
            }
            Console.WriteLine(@"|----------------------|");
            Console.WriteLine(@"| {1} {0,13:f2} |", sum, "Total:");
            Console.WriteLine(@"\----------------------/");

        }
    }
}
