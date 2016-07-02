using System;
using System.Numerics;

namespace _10
{
    class Program
    {
        static void Main(string[] args)
        {
            int input = int.Parse(Console.ReadLine());
            for (int i = 1; i <= input; i++)
            {
                if (ContainsEvenDigit(i) && SumOfDigits(i) && IsPalindrome(i))
                {
                    Console.WriteLine(i);
                }
            }
        }

        static bool ContainsEvenDigit(int x)
        {
            int check = 0;
            while (x != 0)
            {
                check = x % 10;
                x = x / 10;
                if (check % 2 == 0)
                {
                    return true;
                }

            }
            return false;
        }

        static bool SumOfDigits(int x)
        {
            int sum = 0;
            while (x != 0)
            {
                sum = sum + (x % 10);
                x = x / 10;
            }
            if (sum % 7 == 0)
                return true;
            return false;
        }

        static bool IsPalindrome(int x)
        {
            if (x < 0) return false;
            int div = 1;
            while (x / div >= 10)
            {
                div *= 10;
            }
            while (x != 0)
            {
                int l = x / div;
                int r = x % 10;
                if (l != r) return false;
                x = (x % div) / 10;
                div /= 100;
            }
            return true;
        }
    }
}
