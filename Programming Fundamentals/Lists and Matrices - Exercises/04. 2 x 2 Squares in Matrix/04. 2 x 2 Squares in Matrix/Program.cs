using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04._2_x_2_Squares_in_Matrix
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> nums = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            int rows = nums[0];
            int cols = nums[1];
            int count = 0;
            char[,] matrix = new char[rows, cols];
            for (int row = 0; row < rows; row++)
            {
                List<char> input = Console.ReadLine()
                    .Trim().Split(' ').Select(char.Parse).ToList();
                for (int col = 0; col < cols; col++)
                {
                    matrix[row, col] = input[col];
                }
            }
            for (int row = 0; row < rows-1; row++)
            {
                for (int col = 0; col < cols-1; col++)
                {
                    if (matrix[row, col] == matrix[row, col+1] && 
                        matrix[row, col] == matrix[row + 1, col] && 
                        matrix[row, col] == matrix[row+1,col+1])
                        count++;
                }
            }
            Console.WriteLine(count);
            
        }
    }
}
