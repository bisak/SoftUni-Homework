using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Largest_Common_End
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] one = Console.ReadLine().Split(' ');
            string[] two = Console.ReadLine().Split(' ');
            int countLeft = 0;
            int countRight = 0;
            for (int i = 0; i < Math.Min(one.Length, two.Length); i++)
            {
                if (one[i] == two[i])
                {
                    countLeft++;
                }
            }
            for (int i = one.Length - 1, j = two.Length - 1; ; i--, j--)
            {

                if (one[i] == two[j])
                {
                    countRight++;
                }
                if (i == 0 || j==0) break;
            }
            Console.WriteLine(Math.Max(countLeft, countRight));
        }
    }
}

