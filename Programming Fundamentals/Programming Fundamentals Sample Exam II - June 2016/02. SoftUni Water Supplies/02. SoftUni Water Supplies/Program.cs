using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;

namespace _02.SoftUni_Water_Supplies
{
    class Program
    {
        static void Main(string[] args)
        {
            decimal totalWater = decimal.Parse(Console.ReadLine());
            decimal[] bottlesArray = Console.ReadLine().Split(' ').Select(decimal.Parse).ToArray();
            decimal bottlesCapacity = decimal.Parse(Console.ReadLine());

            decimal consumedWater = 0;


            for (int i = 0; i < bottlesArray.Length; i++)
            {
                consumedWater += bottlesCapacity - bottlesArray[i];
            }
            if(consumedWater<=totalWater)
            {
                Console.WriteLine("Enough water!");
                Console.WriteLine("Water left: {0}l.", totalWater-consumedWater);
            }







           ////printing
           //Console.WriteLine("Enough water!");
           //Console.WriteLine("Water left: {0}l.");
           //
           //Console.WriteLine("We need more water!");
           //Console.WriteLine("Bottles left: {0}");
           //Console.WriteLine("With indexes: {0}");
           //Console.WriteLine("We need {0} more liters!");
        }
    }
}