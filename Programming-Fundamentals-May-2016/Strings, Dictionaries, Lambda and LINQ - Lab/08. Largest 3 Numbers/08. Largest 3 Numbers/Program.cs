using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _08.Largest_3_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> nums = Console.ReadLine().Trim().Split(' ').Select(int.Parse).ToList();
            var result = nums.OrderByDescending(x => x).Take(3);
            Console.WriteLine(string.Join(" ", result));
        }
    }
}
