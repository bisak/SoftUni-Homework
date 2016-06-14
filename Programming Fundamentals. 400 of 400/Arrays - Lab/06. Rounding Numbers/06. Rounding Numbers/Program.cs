using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Rounding_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            double[] arr = Console.ReadLine().Split(' ')
   .Select(double.Parse).ToArray();
            double[] arr2 = new double[arr.Length];
            for (int i = 0; i < arr.Length; i++)
            {
                arr2[i] = Math.Round(arr[i], MidpointRounding.AwayFromZero);
                Console.WriteLine(arr[i] + " => " + arr2[i]);
            }
        }
    }
}
