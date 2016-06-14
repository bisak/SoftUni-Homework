using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Matrix_of_Palindromes
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> nums = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            int width = nums[0];
            int height = nums[1];
            string[,] matrix = new string[width, height];
            for (int row = 0; row < width; row++)
            {
                for (int col = 0; col < height; col++)
                {
                    matrix[row, col] = "" + (char)('a' + row) + (char)('a' + col + row) + (char)('a' + row);
                }
            }
            for (int row = 0; row < width; row++)
            {
                for (int col = 0; col < height; col++)
                {
                    Console.Write(matrix[row, col] + " ");
                }
                Console.WriteLine();
            }
        }
    }
}

