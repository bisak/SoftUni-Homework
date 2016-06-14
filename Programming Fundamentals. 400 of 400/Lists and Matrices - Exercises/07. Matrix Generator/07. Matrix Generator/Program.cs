using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07.Matrix_Generator
{
    class Program
    {
        static void Main(string[] args)
        {
            List<char> input = Console.ReadLine().Trim().Split(' ').Select(char.Parse).ToList();
            char type = input[0];
            int rows = (int)Char.GetNumericValue(input[1]);
            int cols = (int)Char.GetNumericValue(input[2]);
            int[,] matrix = new int[rows, cols];
            switch (type)
            {
                case 'A': TypeA(matrix, rows, cols); break;
                case 'B': TypeB(matrix, rows, cols); break;
                case 'C': TypeC(matrix, rows, cols); break;
                case 'D': TypeD(matrix, rows, cols); break;
                default:
                    break;
            }
            PrintOut(matrix, rows, cols);
        }


        static void TypeA(int[,] matrix, int rows, int cols)
        {
            int count = 1;
            for (int col = 0; col < cols; col++)
            {
                for (int row = 0; row < rows; row++, count++)
                {
                    matrix[row, col] = count;
                }
            }
        }

        static void TypeB(int[,] matrix, int rows, int cols)
        {
            int dir = -1;
            int count = 1;
            for (int col = 0; col < cols; col++)
            {
                dir = -dir;
                if (dir > 0)
                    for (int row = 0; row < rows; row += dir)
                    {

                        matrix[row, col] = count;
                        count++;
                    }
                if (dir < 0)
                    for (int row = rows-1; row >= 0; row += dir)
                    {

                        matrix[row, col] = count;
                        count++;
                    }
            }
        }

        static void TypeC(int[,] matrix, int rows, int cols)
        {
           // throw new NotImplementedException();
        }

        static void TypeD(int[,] matrix, int rows, int cols)
        {
           // throw new NotImplementedException();
        }

        static void PrintOut(int[,] matrix, int rows, int cols)
        {
            for (int row = 0; row < rows; row++)
            {
                for (int col = 0; col < cols; col++)
                {
                    Console.Write(matrix[row, col] + " ");
                }
                Console.WriteLine();
            }
        }
    }
}
