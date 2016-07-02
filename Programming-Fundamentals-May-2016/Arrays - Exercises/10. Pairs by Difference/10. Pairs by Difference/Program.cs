using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10.Pairs_by_Difference
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] input = Console.ReadLine().Trim().Split(' ').Select(int.Parse).ToArray();
            int diff = int.Parse(Console.ReadLine());
            int counter = 0;
            for (int i = 0; i < input.Length; i++)
            {
                for (int j = i; j < input.Length; j++)
                {
                    if (Math.Abs(input[j] - input[i]) == diff)
                    {
                        counter++;
                    }
                }  
            }
            Console.WriteLine(counter);
        }
    }
}
