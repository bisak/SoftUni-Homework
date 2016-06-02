using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Diagonal_Difference
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int primary=0;
            int secondary = 0;
            int[,] matrix = new int[n, n];
            for (int row = 0; row < n; row++)
            {
                List<int> nums = Console.ReadLine().Trim().Split(' ').Select(int.Parse).ToList();
                for (int col = 0; col < n; col++)
                {
                    matrix[row, col] = nums[col];
                }
            }
            for (int p = 0, j=n-1; p < n; p++, j--)
            {
                primary += matrix[p, p];
                secondary += matrix[p, j];
            }
            Console.WriteLine(Math.Abs(primary-secondary));
        }
    }
}
