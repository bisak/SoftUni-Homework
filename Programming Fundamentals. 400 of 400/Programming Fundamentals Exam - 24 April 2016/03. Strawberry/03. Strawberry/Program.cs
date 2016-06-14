using System;

namespace _03.Strawberry
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            for (int i = 0; i < n - 1; i += 2)
            {
                Console.Write(new string('-', i));
                Console.Write('\\');
                Console.Write(new string('-', n - i));
                Console.Write('|');
                Console.Write(new string('-', n - i));
                Console.Write('/');
                Console.Write(new string('-', i));
                Console.WriteLine();
            }
            //top part ends here

            for (int i = 0; i < n / 2 + 1; i++)
            {
                Console.Write(new string('-', n - i * 2));
                Console.Write('#');
                Console.Write(new string('.', i * 2 * 2 + 1));
                Console.Write('#');
                Console.Write(new string('-', n - i * 2));
                Console.WriteLine();
            }
            //mid part ends here

            for (int i = 0; i < n + 1; i++)
            {
                Console.Write(new string('-', i));
                Console.Write('#');
                Console.Write(new string('.', n*2+1-i*2));
                Console.Write('#');
                Console.Write(new string('-', i));
                Console.WriteLine();
            }
            //bottom parts end here

        }
    }
}
