using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10
{
    class Program
    {
        static void Main(string[] args)
        {
            double centuries = double.Parse(Console.ReadLine());
            double years = centuries * 100;
            ulong days = (ulong)(years * 365.2422);
            ulong hours = (days * 24);
            ulong minutes = hours * 60;
            decimal seconds = minutes * 60;
            decimal millis = seconds * 1000;
            decimal micros = millis * 1000;
            decimal nanos = micros * 1000;
            Console.WriteLine($"{centuries} centuries = {years} years = {days} days = {hours} hours = {minutes} minutes = {seconds} seconds = {millis} milliseconds = {micros} microseconds = {nanos} nanoseconds");
        }
    }
}
