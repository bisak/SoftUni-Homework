using System;

namespace _2
{
    class Program
    {
        static void Main(string[] args)
        {
            double double1 = double.Parse(Console.ReadLine());
            double double2 = double.Parse(Console.ReadLine());
            double difference = Math.Abs(double1 * 0.0000001);
            if (Math.Abs(double1 - double2) <= difference)
                Console.WriteLine("True");
            else
                Console.WriteLine("False");
        }
    }
}
