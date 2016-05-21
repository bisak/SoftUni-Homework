using System;

namespace _2
{
    class Program
    {
        static void Main(string[] args)
        {
            int one = int.Parse(Console.ReadLine());
            int two = int.Parse(Console.ReadLine());
            int three = int.Parse(Console.ReadLine());
            Console.WriteLine(GetMax(GetMax(one, two), three));


        }

        static int GetMax(int first, int second)
        {
            if (first > second) return first;
            else return second;
        }

    }
}

