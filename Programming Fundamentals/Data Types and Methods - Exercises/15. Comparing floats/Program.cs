using System;

namespace _2
{
    class Program
    {
        static void Main(string[] args)
        {
            float firstNumber = float.Parse(Console.ReadLine());
            float secondNumber = float.Parse(Console.ReadLine());
            double difference = Math.Abs(firstNumber - secondNumber);
            difference = Math.Round(difference, 7);
            if (difference < 0.000001)
            {
                Console.WriteLine("True");
            }
            else
            {
                Console.WriteLine("False");
            }
        }
    }
}
