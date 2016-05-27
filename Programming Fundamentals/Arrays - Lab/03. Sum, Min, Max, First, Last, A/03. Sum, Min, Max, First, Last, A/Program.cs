using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Sum__Min__Max__First__Last__A
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int[] nums = new int[n];
            for (int i = 0; i < n; i++)
                nums[i] = int.Parse(Console.ReadLine());
            Console.WriteLine("Sum = {0}", nums.Sum());
            Console.WriteLine("Min = {0}", nums.Min());
            Console.WriteLine("Max = {0}", nums.Max());
            Console.WriteLine("First = {0}", nums.First());
            Console.WriteLine("Last = {0}", nums.Last());
            Console.WriteLine("Average = {0}", (double)nums.Sum() / n);
        }
    }
}
