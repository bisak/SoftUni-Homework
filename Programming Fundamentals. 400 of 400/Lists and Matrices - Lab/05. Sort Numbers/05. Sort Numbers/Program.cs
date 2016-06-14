using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Sort_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            List<decimal> nums = Console.ReadLine().Split(' ').Select(decimal.Parse).ToList();
            nums = nums.OrderBy(x => x).ToList();
            Console.WriteLine(string.Join(" <= ", nums));
        }
    }
}
