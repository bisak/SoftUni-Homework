using System;
using System.Numerics;

namespace _10
{
    class Program
    {
        static void Main(string[] args)
        {
            int numberInt = int.Parse(Console.ReadLine());
            BigInteger result = numberInt;
            for (int i = 1; i < numberInt; i++)
            {
                result = result * i;
            }
            Console.WriteLine(result);
        }
    }
}
