using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Game_of_Names
{
    class Program
    {
        static void Main(string[] args)
        {
            uint n = uint.Parse(Console.ReadLine());
            string winner="";
            int totalPoints = 0;
            int maxPoints = int.MinValue; //important!

            for (int i = 0; i < n; i++)
            {
                totalPoints = 0;
                string name = Console.ReadLine();
                int points = int.Parse(Console.ReadLine());
                totalPoints = totalPoints + points;
                foreach(char c in name)
                {
                    if (c % 2 == 0) totalPoints = totalPoints + c;
                    else totalPoints = totalPoints - c;
                }
                if (totalPoints > maxPoints)
                {
                    winner = name;
                    maxPoints = totalPoints;
                }
            }
            Console.WriteLine("The winner is {0} - {1} points",winner, maxPoints);
        }
    }
}
