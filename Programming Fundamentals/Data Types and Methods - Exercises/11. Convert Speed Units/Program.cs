using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2
{
    class Program
    {
        static void Main(string[] args)
        {
            int meters = int.Parse(Console.ReadLine());
            int hours = int.Parse(Console.ReadLine());
            int minutes = int.Parse(Console.ReadLine());
            int seconds = int.Parse(Console.ReadLine());
            int totalSeconds = ((hours * 60 * 60) + (minutes * 60) + seconds);
            float ms = (float)meters / totalSeconds;
            float kmh = (float)3.6 * ms;
            float mph = kmh / 1.609f;
            Console.WriteLine(ms);
            Console.WriteLine(kmh);
            Console.WriteLine(mph);

        }
    }
}
