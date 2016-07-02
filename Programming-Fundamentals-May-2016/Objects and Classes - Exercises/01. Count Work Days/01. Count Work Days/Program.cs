using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace _01.Count_Work_Days
{
    class Program
    {
        static void Main(string[] args)
        {
            int count = 0;
            DateTime start = DateTime.ParseExact(Console.ReadLine(), "dd-MM-yyyy", CultureInfo.InvariantCulture);
            DateTime end = DateTime.ParseExact(Console.ReadLine(), "dd-MM-yyyy", CultureInfo.InvariantCulture);
            DateTime[] holidays = new DateTime[]
            {
                new DateTime(4,1,1 ),
                new DateTime(4,3,3 ),
                new DateTime(4,5,1 ),
                new DateTime(4,5,6 ),
                new DateTime(4,5,24 ),
                new DateTime(4,9,6 ),
                new DateTime(4,9,22 ),
                new DateTime(4,11,1 ),
                new DateTime(4,12,24 ),
                new DateTime(4,12,25 ),
                new DateTime(4,12,26 ),
            };

            for (DateTime date = start; date <= end; date = date.AddDays(1))
            {
                DateTime tempDate = new DateTime(4, date.Month, date.Day);
                bool isWeekDay = date.DayOfWeek != DayOfWeek.Saturday && date.DayOfWeek != DayOfWeek.Sunday;
                bool isHoliday = holidays.Contains(tempDate);
                if (isWeekDay && !isHoliday)
                {
                    count++;
                }
            }
            Console.WriteLine(count);
        }

    }
}
