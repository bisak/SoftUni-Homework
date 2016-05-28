using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _11.Equal_Sums
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] input = Console.ReadLine().Trim().Split(' ').Select(int.Parse).ToArray();
            int sumLeft = 0;
            int sumRight = 0;
            bool check = true;
            if (input.Length == 1)
            {
                Console.WriteLine("0");
                check = false;
            }
            else
                for (int i = 0; i < input.Length; i++)
                {
                    sumLeft = 0;
                    sumRight = 0;
                    for (int j = 0; j < input.Length; j++)
                    {
                        if (j < i) sumLeft = sumLeft + input[j];
                        if (j > i) sumRight = sumRight + input[j];
                    }
                    if (sumLeft == sumRight)
                    {
                        Console.WriteLine(i);
                        check = false;
                    }
                }
            if (check) Console.WriteLine("no");
        }
    }
}
