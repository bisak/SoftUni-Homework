using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Max_Sequence_of_Equal_Element
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            int count = 1;
            int lastCout = 1;
            int print = 1;
            for (int i = 0; i < numbers.Count - 1; i++)
            {
                if (numbers[i] == numbers[i + 1])
                {
                    count++;
                }
                else
                {
                    count = 1;
                }
                if (count > lastCout)
                {
                    lastCout = count;
                    print = numbers[i];
                }
            }
            for (int i = 0; i < lastCout; i++)
            {
                Console.Write(print + " ");
            }
        }
    }
}
