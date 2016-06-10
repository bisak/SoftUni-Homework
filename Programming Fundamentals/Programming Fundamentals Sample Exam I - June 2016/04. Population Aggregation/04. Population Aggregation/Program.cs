using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Population_Aggregation
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] prohibited = "@ # $ & 0 1 2 3 4 5 6 7 8 9".Split();
            SortedDictionary<string, int> counts = new SortedDictionary<string, int>();
            Dictionary<string, decimal> towns = new Dictionary<string, decimal>();
            string country = "";
            string town = "";
            int count = 0;
            while (true)
            {
                string[] input = Console.ReadLine().Split('\\');
                if (input[0] == "stop") break;
                decimal population = decimal.Parse(input[2]);
                if (input[0][0] == Char.ToUpper(input[0][0]))
                {
                    country = input[0];
                    town = input[1];
                }
                else
                {
                    country = input[1];
                    town = input[0];
                }
                foreach (var symbol in prohibited)
                {
                    country = country.Replace(symbol, "");
                }
                foreach (var symbol in prohibited)
                {
                    town = town.Replace(symbol, "");
                }
                counts.TryGetValue(country, out count);
                counts[country] = count + 1;
                towns[town] = population;

            }
            var items = from pair in towns orderby pair.Value descending select pair;
            foreach (var c in counts)
            {
                Console.WriteLine("{0} -> {1}", c.Key, c.Value);
            }
            int ctn = 0;
            foreach (var c in items)
            {
                ctn++;
                if (ctn <= 3)
                    Console.WriteLine("{0} -> {1}", c.Key, c.Value);
                else break;
            }
        }
    }
}
