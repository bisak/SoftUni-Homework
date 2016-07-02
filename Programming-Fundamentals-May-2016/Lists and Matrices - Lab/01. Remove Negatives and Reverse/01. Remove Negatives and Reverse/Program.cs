using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Remove_Negatives_and_Reverse
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> list = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            List<int> result = new List<int>();
            foreach (var item in list)
                if (item >= 0) result.Add(item);
            result.Reverse();
            if (result.Count > 0)
                Console.WriteLine(string.Join(" ", result));
            else
                Console.WriteLine("empty");

        }
    }
}
