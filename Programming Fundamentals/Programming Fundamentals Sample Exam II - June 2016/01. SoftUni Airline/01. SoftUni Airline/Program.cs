using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.SoftUni_Airline
{
    class Program
    {
        static void Main(string[] args)
        {

            int n = int.Parse(Console.ReadLine());
            decimal[] income = new decimal[n];
            decimal[] expences = new decimal[n];
            decimal[] profit = new decimal[n];

            for (int i = 0; i < n; i++)
            {
                int adultsCount = int.Parse(Console.ReadLine());
                decimal adultsPrice = decimal.Parse(Console.ReadLine());
                int youthsCount = int.Parse(Console.ReadLine());
                decimal youthsPrice = decimal.Parse(Console.ReadLine());
                decimal fuelPrice = decimal.Parse(Console.ReadLine());
                decimal fuelConsum = decimal.Parse(Console.ReadLine());
                int flightDur = int.Parse(Console.ReadLine());

                income[i] = (adultsCount * adultsPrice) + (youthsCount * youthsPrice);
                expences[i] = flightDur * fuelConsum * fuelPrice;
                profit[i] = income[i] - expences[i];

                if (profit[i] < 0)
                {
                    Console.WriteLine("We've got to sell more tickets! We've lost {0:F3}$.", profit[i]);
                }
                else
                {
                    Console.WriteLine("You are ahead with {0:f3}$.", profit[i]);
                }
            }
            decimal overall = profit.Sum();
            decimal average = profit.Average();
            Console.WriteLine("Overall profit -> {0:F3}$.", overall);
            Console.WriteLine("Average profit -> {0:F3}$.", average);
        }
    }
}
