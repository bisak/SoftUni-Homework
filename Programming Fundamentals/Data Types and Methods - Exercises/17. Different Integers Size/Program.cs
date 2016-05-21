using System;

namespace _2
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();


            try
            {
                decimal first = Convert.ToInt64(input);
                Console.WriteLine(first + " can fit in:");
                if ((first >= -128) && (first <= 127))
                {
                    Console.WriteLine("* sbyte");
                }
                if ((first >= 0) && (first <= 255))
                {
                    Console.WriteLine("* byte");
                }
                if ((first >= -32768) && (first <= 32767))
                {
                    Console.WriteLine("* short");
                }
                if ((first >= 0) && (first <= 65535))
                {
                    Console.WriteLine("* ushort");
                }
                if ((first >= -2147483648) && (first <= 2147483647))
                {
                    Console.WriteLine("* int");
                }
                if ((first >= 0) && (first <= 4294967295))
                {
                    Console.WriteLine("* uint");
                }
                if ((first >= -9223372036854775808) && (first <= 9223372036854775807))
                {
                    Console.WriteLine("* long");
                }
            }
            catch (OverflowException)
            {
                Console.WriteLine(input + " can't fit in any type");
            }
        }


    }
}

