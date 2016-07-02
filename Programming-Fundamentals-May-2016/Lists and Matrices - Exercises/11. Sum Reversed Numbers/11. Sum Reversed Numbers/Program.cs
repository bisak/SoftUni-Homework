using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _11.Sum_Reversed_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int sum = 0;
            List<int> nums = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            foreach (int e in nums)
            {
                int reversed = ReverseInt(e);
                sum += reversed;
            }
            Console.WriteLine(sum);

        }

        static int ReverseInt(int num)
        {
            int result = 0;
            while (num > 0)
            {
                result = result * 10 + num % 10;
                num /= 10;
            }
            return result;
        }
    }
}
