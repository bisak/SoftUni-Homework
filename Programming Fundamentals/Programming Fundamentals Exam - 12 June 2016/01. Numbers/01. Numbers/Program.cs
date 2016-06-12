using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] input = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            List<int> items = new List<int>();
            double average = input.Average();
            if (input.Length <= 1) Console.WriteLine("No");
            else
            {
                foreach (int item in input)
                {
                    if (item > average)
                    {
                        items.Add(item);
                    }
                }
                if (items.Count < 1) Console.WriteLine("No");
                else
                {
                    List<int> sorted = new List<int>();
                    sorted = items.OrderBy(x => -x).ToList();
                    List<int> toPrint = new List<int>();
                    toPrint = sorted.Take(5).ToList();
                    Console.WriteLine(string.Join(" ", toPrint.ToArray()));
                }
            }
        }
    }
}