using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Fold_and_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] input = Console.ReadLine().Trim().Split(' ').Select(int.Parse).ToArray();
            int[] mod1 = new int[input.Length / 4];
            int[] mod2 = new int[input.Length / 4];
            int[] conc = new int[mod1.Length + mod2.Length];
            int[] sum = new int[conc.Length];
            for (int i = input.Length/4-1, j=0 ; i >=0 ; i--, j++)
            {
                mod1[j] = input[i];
            }
            for (int i = input.Length-1, j=0; j<mod2.Length ; i--, j++)
            {
                mod2[j] = input[i];
            }
            conc = mod1.Concat(mod2).ToArray();
            for (int i = input.Length/4, j=0; j < conc.Length; i++, j++)
            {
                sum[j] = conc[j] + input[i];
            }
            Console.WriteLine(string.Join(" ",sum ));
        }

    }
}
