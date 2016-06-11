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

            for (var row = 0; row < rows; row++)
                matrix.Add(Console.ReadLine().Split(' ').Select(int.Parse).ToList());


            while (true)
            {
                var input = Console.ReadLine().Split().ToArray();
                if (input[0] == "end") break;


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


                if (input[0] == "swap")
                {
                    var firstRow = int.Parse(input[1]);
                    var secondRow = int.Parse(input[2]);
                    var tempArr = matrix[firstRow];
                    matrix[firstRow] = matrix[secondRow];
                    matrix[secondRow] = tempArr;
                }


                if (input[0] == "insert")
                {
                    var row = int.Parse(input[1]);
                    var element = int.Parse(input[2]);
                    matrix[row].Insert(0, element);
                }
            }
            for (var row = 0; row < matrix.Count; row++)
                Console.WriteLine(string.Join(" ", matrix[row]));
            
        }
    }
}

//ОПРАВЕНА С МЕТОДИ В СЛЕДВАЩИЯ СЪБМИТ!