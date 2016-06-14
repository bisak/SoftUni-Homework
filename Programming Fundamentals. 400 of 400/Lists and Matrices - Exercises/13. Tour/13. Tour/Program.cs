using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _13.Tour
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> input = new List<int>();
            int distance = 0;
            int n = int.Parse(Console.ReadLine());
            int[,] matrix = new int[n, n];
            for (int row = 0; row < n; row++)
            {
                input = Console.ReadLine().Trim().Split(' ').Select(int.Parse).ToList();
                for (int col = 0; col < n; col++)
                {
                    matrix[row, col] = input[col];
                }
            }
            input = Console.ReadLine().Trim().Split(' ').Select(int.Parse).ToList();
            input.Insert(0, 0);
            for (int i = 1; i < input.Count; i++)
            {
                distance += matrix[input[i], input[i - 1]];
            }
            Console.WriteLine(distance);
        }
    }
}
