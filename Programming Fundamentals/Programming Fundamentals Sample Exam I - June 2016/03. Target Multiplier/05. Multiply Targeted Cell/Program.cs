using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Multiply_Targeted_Cell
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> nums = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            int rows = nums[0];
            int cols = nums[1];
            int[,] matrix = new int[rows, cols];
            for (long row = 0; row < rows; row++)
            {
                List<int> input = Console.ReadLine().Trim().Split(' ').Select(int.Parse).ToList();
                for (int col = 0; col < cols; col++)
                {
                    matrix[row, col] = input[col];
                }
            }
            int[] index = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            int indr = index[0];
            int indc = index[1];
            int initial = matrix[indr, indc];
            matrix[indr, indc] = (matrix[indr - 1, indc - 1] + matrix[indr - 1, indc] + matrix[indr - 1, indc + 1] +
                matrix[indr, indc-1] + matrix[indr, indc+1]+
                matrix[indr + 1, indc - 1] + matrix[indr + 1, indc] + matrix[indr + 1, indc + 1])*initial;
            matrix[indr - 1, indc - 1] *= initial;
            matrix[indr - 1, indc] *= initial;
            matrix[indr - 1, indc + 1] *= initial;
            matrix[indr, indc - 1] *= initial;
            matrix[indr, indc + 1] *= initial;
            matrix[indr + 1, indc - 1] *= initial;
            matrix[indr + 1, indc] *= initial;
            matrix[indr + 1, indc + 1] *= initial;

            for (int i = 0; i < rows; i++)
            {
                for (int j = 0; j < cols; j++)
                {
                    Console.Write(matrix[i, j] + " ");
                }
                Console.WriteLine();
            }
        }
    }
}
