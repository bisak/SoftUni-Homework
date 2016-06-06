using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Blur_Filter
{
    class Program
    {
        static void Main(string[] args)
        {
            long ammount = long.Parse(Console.ReadLine());
            List<long> nums = Console.ReadLine().Split(' ').Select(long.Parse).ToList();
            long rows = nums[0];
            long cols = nums[1];
            long[,] matrix = new long[rows, cols];
            for (long row = 0; row < rows; row++)
            {
                List<long> input = Console.ReadLine().Trim().Split(' ').Select(long.Parse).ToList();
                for (long col = 0; col < cols; col++)
                {
                    matrix[row, col] = input[(int)col];
                }
            }
            long[] index = Console.ReadLine().Split(' ').Select(long.Parse).ToArray();
            long indr = index[0];
            long indc = index[1];
            for (long i = indr - 1; i <= indr + 1; i++)
            {
                for (long j = indc - 1; j <= indc + 1; j++)
                {
                    try
                    {
                        matrix[i, j] += ammount;
                    }
                    catch (Exception) //<---ГРОЗНО!
                    {
                    }
                }
            }
            for (long i = 0; i < rows; i++)
            {
                for (long j = 0; j < cols; j++)
                {
                    Console.Write(matrix[i, j] + " ");
                }
                Console.WriteLine();
            }
        }
    }
}
