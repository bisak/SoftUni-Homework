using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Square_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> nums = Console.ReadLine().Trim().Split(' ').Select(int.Parse).ToList();
            List<int> result = new List<int>();
            foreach(int num in nums)
            {
                if (Math.Sqrt(num) == (int)Math.Sqrt(num)) result.Add(num);
            }
            result.Sort();
            result.Reverse();
            Console.WriteLine(string.Join(" ", result));
        }
    }
}
