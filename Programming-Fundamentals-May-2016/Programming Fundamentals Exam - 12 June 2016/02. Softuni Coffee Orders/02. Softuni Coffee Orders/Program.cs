using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace _02.Softuni_Coffee_Orders
{
    class Program
    {
        static void Main(string[] args)
        {
            List<decimal> totalPrice = new List<decimal>();
            decimal n = decimal.Parse(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                
            decimal pricePerCapsule = decimal.Parse(Console.ReadLine());
            DateTime orderDate = DateTime.ParseExact(Console.ReadLine(), "d/M/yyyy",
                CultureInfo.CreateSpecificCulture("en-US"));
            decimal capsulesCount = decimal.Parse(Console.ReadLine());

            decimal daysInMonth = DateTime.DaysInMonth(orderDate.Year, orderDate.Month);

            
                decimal price = ((daysInMonth * capsulesCount) * pricePerCapsule);
                totalPrice.Add(price);
                Console.WriteLine("The price for the coffee is: ${0:f2}", price);
            }
            Console.WriteLine("Total: ${0:f2}", totalPrice.Sum());
        }
    }
}