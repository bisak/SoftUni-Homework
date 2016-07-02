using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Max_Sequence_of_Equal_Eleme
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] input = Console.ReadLine().Trim().Split(' ').Select(int.Parse).ToArray();
            int count = 0;
            int lastCount = 0;
            int element = 0;
            for (int i = 1; i < input.Length; i++)
            {

                if (input[i] == input[i-1])
                {
                    count++;
                }
                else
                {
                    count = 0;
                }
                if (count > lastCount)
                {
                    lastCount = count;
                    element = input[i];
                }

            }
            for (int i = 0; i < lastCount + 1; i++)
            {
                Console.Write(element + " ");
            }
        }
    }
}
