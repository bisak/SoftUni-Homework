using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Sweet_Dessert
{
    class Program
    {
        static void Main(string[] args)
        {
            double cash = double.Parse(Console.ReadLine());
            int guests = int.Parse(Console.ReadLine());
            double bananasPrice = double.Parse(Console.ReadLine());
            double eggsPrice = double.Parse(Console.ReadLine());
            double berriesPrice = double.Parse(Console.ReadLine());
            int totalPortions = 0;
            int totalBananas = 0;
            int totalEggs = 0;
            double totalBerries = 0;
            double totalPrice = 0;
            totalPortions = guests / 6;
            if (guests % 6 == 0)
                totalPortions = totalPortions * 6;
            else
                totalPortions = totalPortions * 6 + 6;

            totalBananas = totalPortions/6 * 2;
            totalEggs = totalPortions/6 * 4;
            totalBerries = totalPortions/6 * 0.2;

            totalPrice = (totalBananas * bananasPrice) + (totalEggs * eggsPrice) + (berriesPrice * totalBerries);
            if (totalPrice <= cash) Console.WriteLine("Ivancho has enough money - it would cost {0:F2}lv.", totalPrice);
            if (totalPrice > cash) Console.WriteLine("Ivancho will have to withdraw money - he will need {0:F2}lv more.", totalPrice - cash);
        }
    }
}
