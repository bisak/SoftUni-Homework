using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Hourglass_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            long currentSum = 0;
            long maxSum = -999999999999999999;
            long[,] matrix = new long[6, 6];
            for (long row = 0; row < 6; row++)
            {
                List<long> input = Console.ReadLine()
                    .Trim().Split(' ').Select(long.Parse).ToList();
                for (int col = 0; col < 6; col++)
                {
                    matrix[row, col] = input[col];
                }
            }
            for (long row = 0; row < 6 - 2; row++)
            {
                for (long col = 0; col < 6 - 2; col++)
                {
                    currentSum = matrix[row, col] + matrix[row, col + 1] + matrix[row, col + 2] +
                         matrix[row + 1, col + 1] +
                        matrix[row + 2, col] + matrix[row + 2, col + 1] + matrix[row + 2, col + 2];
                    if (currentSum > maxSum)
                    {
                        maxSum = currentSum;
                    }
                    currentSum = 0;
                }

            }
            Console.WriteLine(maxSum);
        }
    }
}


