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
            int count = 0;
            int pos = 0;
            int oneL = one.Length;
            int twoL = two.Length;
            for (int i = 0 ; i < Math.Min(oneL, twoL); i++)
            {
                if(one[i] == two[i])
                {
                    count++;
                    if (pos == 0) pos = i;
                }
            }
            for (int i = Math.Min(oneL, twoL); i >= 0; i--)
            {
                if (one[i})
            }

            Console.WriteLine(count);
        }
    }
}

