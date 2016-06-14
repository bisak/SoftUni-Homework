using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Day_of_Week
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] date = Console.ReadLine().Split('-').Select(int.Parse).ToArray();
            DateTime dates = new DateTime(date[2], date[1], date[0]);
            Console.WriteLine(dates.DayOfWeek);
        }
    }
}
