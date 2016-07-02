using System;
using System.Collections.Generic;
using System.Linq;

namespace _03.Matrix_Operator
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            var rows = int.Parse(Console.ReadLine());
            var matrix = new List<List<int>>();

            ReadArray(rows, matrix);
            Work(matrix, rows);
            Print(matrix);
            
        }

        private static void Work(List<List<int>> matrix, int rows)
        {
            while (true)
            {
                var input = Console.ReadLine().Split().ToArray();
                if (input[0] == "end") break;


                Remove(input, matrix, rows);


                Swap(input, matrix);


                Insert(input, matrix);
            }
        }

        private static void Print(List<List<int>> matrix)
        {
            for (var row = 0; row < matrix.Count; row++)
                Console.WriteLine(string.Join(" ", matrix[row]));
        }

        private static void Insert(string[] input, List<List<int>> matrix)
        {
            if (input[0] == "insert")
            {
                var row = int.Parse(input[1]);
                var element = int.Parse(input[2]);
                matrix[row].Insert(0, element);
            }
        }

        private static void Swap(string[] input, List<List<int>> matrix)
        {
            if (input[0] == "swap")
            {
                var firstRow = int.Parse(input[1]);
                var secondRow = int.Parse(input[2]);
                var tempArr = matrix[firstRow];
                matrix[firstRow] = matrix[secondRow];
                matrix[secondRow] = tempArr;
            }
        }

        private static void Remove(string[] input, List<List<int>> matrix, int rows)
        {
            if (input[0] == "remove")
            {
                var index = int.Parse(input[3]);

                if (input[1] == "positive")
                {
                    if (input[2] == "row")
                    {
                        matrix[index].RemoveAll(x => x >= 0);
                    }
                    if (input[2] == "col")
                    {
                        for (var i = 0; i < rows; i++)
                        {
                            if (index < matrix[i].Count)
                                if (matrix[i][index] >= 0) matrix[i].RemoveAt(index);
                        }
                    }
                }


                if (input[1] == "negative")
                {
                    if (input[2] == "row")
                    {
                        matrix[index].RemoveAll(x => x < 0);
                    }
                    if (input[2] == "col")
                    {
                        for (var i = 0; i < rows; i++)
                        {
                            if (index < matrix[i].Count)
                                if (matrix[i][index] < 0) matrix[i].RemoveAt(index);
                        }
                    }
                }

                if (input[1] == "odd")
                {
                    if (input[2] == "row")
                    {
                        matrix[index].RemoveAll(x => x%2 != 0);
                    }
                    if (input[2] == "col")
                    {
                        for (var i = 0; i < rows; i++)
                        {
                            if (index < matrix[i].Count)
                                if (matrix[i][index]%2 != 0) matrix[i].RemoveAt(index);
                        }
                    }
                }

                if (input[1] == "even")
                {
                    if (input[2] == "row")
                    {
                        matrix[index].RemoveAll(x => x%2 == 0);
                    }
                    if (input[2] == "col")
                    {
                        for (var i = 0; i < rows; i++)
                        {
                            if (index < matrix[i].Count)
                                if (matrix[i][index]%2 == 0) matrix[i].RemoveAt(index);
                        }
                    }
                }
            }
        }

        private static void ReadArray(int rows, List<List<int>> matrix)
        {
            for (var row = 0; row < rows; row++)
                matrix.Add(Console.ReadLine().Split(' ').Select(int.Parse).ToList());
        }
    }
}