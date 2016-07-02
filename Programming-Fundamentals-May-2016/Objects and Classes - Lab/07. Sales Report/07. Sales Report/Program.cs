using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07.Sales_Report
{
    class Sale
    {
        public string Town { get; set; }
        public string Product { get; set; }
        public decimal Price { get; set; }
        public decimal Quantity { get; set; }

        public static Sale ReadSale()
        {
            var items = Console.ReadLine().Split(' ').ToArray();
            Sale sale = new Sale()
            {
                Town = items[0],
                Product = items[1],
                Price = decimal.Parse(items[2]),
                Quantity = decimal.Parse(items[3])
            };
            return sale;
        }
    }



    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            List<Sale> sales = new List<Sale>();
            for (int i = 0; i < n; i++)
            {
                var sale = Sale.ReadSale();
                sales.Add(sale);
            }
            List<string> towns = sales.Select(s => s.Town).OrderBy(t => t).Distinct().ToList();
            foreach (var t in towns)
            {
                var salesForT = sales.Where(s => s.Town == t).Sum(s => s.Price * s.Quantity);
                Console.WriteLine("{0} -> {1:f2}", t, salesForT);
            }
        }
    }
}
