using System;

namespace _03.Dress_Pattern
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            Console.Write(new string('_', n * 4));
            Console.Write('.');
            Console.Write(new string('_', n * 4));
            Console.Write('.');
            Console.Write(new string('_', n * 4));
            Console.WriteLine();

            for (int i = 1; i < n * 2 + 1; i++)
            {
                int bat = 0;
                if (i > 1) bat = i + 2 * i - 1;
                else bat = i * 2;
                Console.Write(new string('_', n * 4 - i * 2));
                Console.Write('.');
                Console.Write(new string('*', bat));
                Console.Write('.');
                Console.Write(new string('_', n * 4 - i * 2));
                Console.Write('.');
                Console.Write(new string('*', bat));
                Console.Write('.');
                Console.Write(new string('_', n * 4 - i * 2));
                Console.WriteLine();
            }

            for (int i = 0; i < n; i++)
            {
                Console.Write(".");
                Console.Write(new string('*', 12 * n));
                Console.Write(".");
                Console.WriteLine();
            }

            Console.Write(new string('.', n * 3));
            Console.Write(new string('*', 6 * n + 2));
            Console.Write(new string('.', n * 3));
            Console.WriteLine();

            for (int i = 0; i < n; i++)
            {
                Console.Write(new string('_', n * 3));
                Console.Write(new string('o', 6 * n + 2));
                Console.Write(new string('_', n * 3));
                Console.WriteLine();
            }

            for (int i = 0; i < n * 3; i++)
            {
                Console.Write(new string('_', n * 3 - i));
                Console.Write('.');
                Console.Write(new string('*', (6 * n + 2) + i * 2 - 2));
                Console.Write('.');
                Console.Write(new string('_', n * 3 - i));
                Console.WriteLine();
            }

            Console.WriteLine(new string('.', 12 * n + 2));
        }
    }
}
