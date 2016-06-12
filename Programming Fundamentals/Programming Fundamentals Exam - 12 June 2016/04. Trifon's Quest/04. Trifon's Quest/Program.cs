using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Trifon_s_Quest
{
    class Program
    {
        static void Main(string[] args)
        {
            decimal startHealth = int.Parse(Console.ReadLine());
            int[] mapSize = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            int rows = mapSize[0];
            int cols = mapSize[1];
            char[,] matrix = new char[rows, cols];
            int[] deathLocation = new int[2];
            ReadMatrix(rows, cols, matrix);
            int turns = 0;
            int dir = -1;
            for (int col = 0; col < cols; col++)
            {
                dir = -dir;

                if (dir > 0)
                    for (int row = 0; row < rows; row += dir)
                    {
                        char currentElement = matrix[row, col];
                        if (currentElement == 'F')
                        {
                            startHealth = startHealth - (turns/2);
                            turns++;
                            if (startHealth < 1)
                            {
                                deathLocation[0] = row;
                                deathLocation[1] = col;
                                break;

                            }
                        }
                        if (currentElement == 'H')
                        {
                            startHealth = startHealth + (turns/3);
                            turns++;
                            if (startHealth < 1)
                            {
                                deathLocation[0] = row;
                                deathLocation[1] = col;
                                break;

                            }
                        }
                        if (currentElement == 'T')
                        {
                            turns = turns + 3;

                        }
                        if (currentElement == 'E')
                        {
                            turns++;
                            continue;
                        }
                    }
                if (dir < 0)
                    for (int row = rows - 1; row >= 0; row += dir)
                    {
                        char currentElement = matrix[row, col];
                        if (currentElement == 'F')
                        {
                            startHealth = startHealth - (turns/2);
                            turns++;
                            if (startHealth < 1)
                            {
                                deathLocation[0] = row;
                                deathLocation[1] = col;
                                break;

                            }
                        }
                        if (currentElement == 'H')
                        {
                            startHealth = startHealth + (turns/3);
                            turns++;
                            if (startHealth < 1)
                            {
                                deathLocation[0] = row;
                                deathLocation[1] = col;
                                break;

                            }
                        }
                        if (currentElement == 'T')
                        {
                            turns = turns + 3;
                        }
                        if (currentElement == 'E')
                        {
                            turns++;
                            continue;
                        }
                    }
                if (startHealth < 1)
                {
                    break;
                }
            }
            if (startHealth < 1)
            {
                Console.WriteLine("Died at: [{0}, {1}]", deathLocation[0], deathLocation[1]);
            }
            else
            {
                Console.WriteLine("Quest completed!");
                Console.WriteLine("Health: {0}",startHealth);
                Console.WriteLine("Turns: {0}",turns);
            }

            
        }

        public static void ReadMatrix(int rows, int cols, char[,] matrix)
        {
            for (long row = 0; row < rows; row++)
            {
                List<char> input = Console.ReadLine().ToList();
                for (int col = 0; col < cols; col++)
                {
                    matrix[row, col] = input[col];
                }
            }
        }
    }
}