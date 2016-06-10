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
            decimal bottlesFilled = 0;
            decimal bottlesLeft = 0;

            decimal allBottles = bottlesArray.Length;

            List<decimal> indexes = new List<decimal>();

            if (totalWater % 2 == 0)
            {
                for (int i = 0; i < allBottles; i++)
                {

                    consumedWater += bottlesCapacity - bottlesArray[i];
                    if (consumedWater <= totalWater)
                        bottlesFilled++;
                    else
                        indexes.Add(i);
                }
                if (consumedWater <= totalWater)
                {
                    Console.WriteLine("Enough water!");
                    Console.WriteLine("Water left: {0}l.", totalWater - consumedWater);
                }

                bottlesLeft = allBottles - bottlesFilled;

                if (consumedWater > totalWater)
                {
                    Console.WriteLine("We need more water!");
                    Console.WriteLine("Bottles left: {0}", bottlesLeft);
                    Console.WriteLine("With indexes: {0}", string.Join(", ", indexes));
                    Console.WriteLine("We need {0} more liters!", consumedWater - totalWater);
                }
            }
            else
            {
                for (decimal i = allBottles - 1; i >= 0; i--)
                {
                    consumedWater += bottlesCapacity - bottlesArray[(int)i];
                    if (consumedWater <= totalWater)
                        bottlesFilled++;
                    else
                        indexes.Add(i);
                }
                if (consumedWater <= totalWater)
                {
                    Console.WriteLine("Enough water!");
                    Console.WriteLine("Water left: {0}l.", totalWater - consumedWater);
                }

                bottlesLeft = allBottles - bottlesFilled;

                if (consumedWater > totalWater)
                {
                    Console.WriteLine("We need more water!");
                    Console.WriteLine("Bottles left: {0}", bottlesLeft);
                    Console.WriteLine("With indexes: {0}", string.Join(", ", indexes));
                    Console.WriteLine("We need {0} more liters!", consumedWater - totalWater);
                }
            }
        }
    }
}