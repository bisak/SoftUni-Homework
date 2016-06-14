using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Max_Platform_3_x_3
{
    class Program
    {
        static void Main(string[] args)
        {
            List<long> nums = Console.ReadLine().Split(' ').Select(long.Parse).ToList();
            long rows = nums[0];
            long cols = nums[1];
            long currentSum = 0;
            long maxSum = long.MinValue;
            long[,] matrix = new long[rows, cols];
            long[,] result = new long[3, 3];
            for (long row = 0; row < rows; row++)
            {
                List<long> input = Console.ReadLine()
                    .Trim().Split(' ').Select(long.Parse).ToList();
                for (int col = 0; col < cols; col++)
                {
                    matrix[row, col] = input[col];
                }
            }
            for (long row = 0; row < rows - 2; row++)
            {
                for (long col = 0; col < cols - 2; col++)
                {
                    currentSum = matrix[row, col] + matrix[row, col + 1] + matrix[row, col + 2] +
                        matrix[row + 1, col] + matrix[row + 1, col + 1] + matrix[row + 1, col + 2] +
                        matrix[row + 2, col] + matrix[row + 2, col + 1] + matrix[row + 2, col + 2];
                    if (currentSum > maxSum)
                    {
                        maxSum = currentSum;
                        for (long a = 0; a < 3; a++)
                        {
                            for (long b = 0; b < 3; b++)
                            {
                                result[a, b] = matrix[row + a, col + b];
                            }
                        }
                    }
                    currentSum = 0;
                }

            }
            Console.WriteLine(maxSum);
            for (long a = 0; a < 3; a++)
            {
                for (long b = 0; b < 3; b++)
                {
                    Console.Write(result[a, b] + " ");
                }
                Console.WriteLine();
            }
        }
    }
}
