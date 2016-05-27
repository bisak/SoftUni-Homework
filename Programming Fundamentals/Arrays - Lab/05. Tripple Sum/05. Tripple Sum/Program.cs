using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Tripple_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arr = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            int sum;
            bool check = true;
            for (int a = 0; a < arr.Length-1; a++)
            {
                for (int b = a + 1; b < arr.Length; b++)
                {
                    sum = arr[a] + arr[b];
                    if (arr.Contains(sum))
                    {
                        check = false;
                        Console.WriteLine(arr[a] + " + " + arr[b] + " == " + sum );
                    }
                    sum = 0;
                }
                
            }
            if (check)
            {
                Console.WriteLine("No");
            }
        }
    }
}
