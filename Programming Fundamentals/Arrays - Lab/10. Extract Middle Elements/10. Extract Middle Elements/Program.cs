using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10.Extract_Middle_Elements
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arr = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            int len = arr.Length;
            if(len == 1)
            {
                Console.WriteLine(arr[0]);
            }
            else if(len%2==0)
            {
                Console.WriteLine("{0},{1}", arr[len / 2-1], arr[len / 2]);
            }
            else if(len%2!=0)
            {
                Console.WriteLine("{0}, {1}, {2}", arr[len / 2 - 1], arr[len / 2], arr[len/2+1]);
            }
        }
    }
}
