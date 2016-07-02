using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _08.Sum_Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arr = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            int[] arr2 = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            int len = arr.Length;
            int len2 = arr2.Length;
            int[] sums = new int[Math.Max(len, len2)];
            {
                for (int i = 0; i < Math.Max(len, len2); i++)
                {
                    sums[i] = arr[i % len] + arr2[i % len2];
                    Console.Write(sums[i] + " ");
                }
            }
        }
    }
}
