using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _09.Rotate_a_Matrix
{
    class Program
    {
        static void Main(string[] args)
        {
            int rows = int.Parse(Console.ReadLine());
            int cols = int.Parse(Console.ReadLine());
            string[][] matrix = new string[rows][];
            string[][] result = new string[cols][];
            for (int row = 0; row < rows; row++)
            {
                matrix[row] = Console.ReadLine().Trim().Split(' ').ToArray();
            }
            for (int fill = 0; fill < cols; fill++)
            {
                result[fill] = new string[cols];
            }
            for (int col = 0; col < cols; col++)
            {
                for (int row = 0; row < rows; row++)
                {
                    result[col][row] = matrix[rows-row-1][col];
                }
            }
            for (int row = 0; row < cols; row++)
            {
                Console.WriteLine(string.Join(" ", result[row]));
            }
        }
    }
}
