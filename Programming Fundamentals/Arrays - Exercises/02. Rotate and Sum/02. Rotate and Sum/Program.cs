using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Rotate_and_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arr = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            int k = int.Parse(Console.ReadLine());
            int[] sum = new int[arr.Length];
            for (int i = 0; i < k; i++)
            {
                for (int j = 0; j < arr.Length-1; j++)
                {
                    int temp = arr[j];
                    arr[j+1] = arr[j];  //should take a second look at this algorithm!
                    arr[j + 1] = temp;
                }
                for (int j = 0; j < arr.Length; j++)
                {
                    sum[j] = sum[j] + arr[j];
                }
            }
                Console.WriteLine(string.Join(" ", sum));
        }
    }
}
