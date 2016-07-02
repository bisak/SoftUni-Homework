using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Hogwarts_Sorting
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            string[] fnln = null;
            string name = "";
            int nameSum = 0;
            int Gryffindor = 0;
            int Slytherin = 0;
            int Ravenclaw = 0;
            int Hufflepuff = 0;
            for (int i = 0; i < n; i++)
            {
                name = Console.ReadLine().Trim();
                fnln = name.Split(' ');
                nameSum = 0;
                for (int j = 0; j < name.Length; j++)
                {
                    if (name[j] != ' ')
                    {
                        nameSum = nameSum + name[j];
                    }
                }
                if (nameSum % 4 == 0)
                {
                    
                    Console.Write("Gryffindor ");
                    Console.WriteLine("{0}{1}{2}", nameSum, fnln[0][0], fnln[1][0]);
                    Gryffindor++;
                }
                if (nameSum % 4 == 1)
                {
                    Console.Write("Slytherin ");
                    Console.WriteLine("{0}{1}{2}", nameSum, fnln[0][0], fnln[1][0]);
                    Slytherin++;
                }
                if (nameSum % 4 == 2)
                {
                    Console.Write ("Ravenclaw ");
                    Console.WriteLine("{0}{1}{2}", nameSum, fnln[0][0], fnln[1][0]);
                    Ravenclaw++;
                }
                if (nameSum % 4 == 3)
                {
                    Console.Write("Hufflepuff ");
                    Console.WriteLine("{0}{1}{2}", nameSum, fnln[0][0], fnln[1][0]);
                    Hufflepuff++;
                }

            }
            Console.WriteLine();
            Console.WriteLine("Gryffindor: " + Gryffindor);
            Console.WriteLine("Slytherin: " + Slytherin);
            Console.WriteLine("Ravenclaw: " + Ravenclaw);
            Console.WriteLine("Hufflepuff: " + Hufflepuff);
        }
    }
}
