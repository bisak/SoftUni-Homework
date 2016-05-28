using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Compare_Char_Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            char[] first = Console.ReadLine().Split(' ').Select(char.Parse).ToArray();
            char[] second = Console.ReadLine().Split(' ').Select(char.Parse).ToArray();
            int[] firstNum = new int[first.Length];
            int[] secondNum = new int[second.Length];
            int sumFirst = 0;
            int sumSecond = 0;
            for (int i = 0; i < first.Length; i++)
            {
                first[i] = Char.ToLower(first[i]);
                firstNum[i] = Convert.ToInt32(first[i]);
            }
            for (int i = 0; i < second.Length; i++)
            {
                second[i] = Char.ToLower(second[i]);
                secondNum[i] = Convert.ToInt32(second[i]);
            }
            sumFirst = firstNum.Sum();
            sumSecond = secondNum.Sum();
            if(sumFirst < sumSecond)
            {
                Console.WriteLine(string.Join("", first));
                Console.WriteLine(string.Join("", second));
            }
            if (sumFirst > sumSecond)
            {
                Console.WriteLine(string.Join("", second));
                Console.WriteLine(string.Join("", first));
            }
            if (sumFirst == sumSecond)
            {
                Console.WriteLine(string.Join("", second));
                Console.WriteLine(string.Join("", first));
            }
        }
    }
}
