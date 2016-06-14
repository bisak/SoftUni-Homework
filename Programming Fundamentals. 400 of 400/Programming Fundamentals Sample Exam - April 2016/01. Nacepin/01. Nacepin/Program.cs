using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Nacepin
{
    class Program
    {
        static void Main(string[] args)
        {
            decimal usPrice = decimal.Parse(Console.ReadLine());
            decimal usweight = decimal.Parse(Console.ReadLine());
            decimal ukPrice = decimal.Parse(Console.ReadLine());
            decimal ukWeight = decimal.Parse(Console.ReadLine());
            decimal chPrice = decimal.Parse(Console.ReadLine());
            decimal chWeight = decimal.Parse(Console.ReadLine());
            decimal usRate = usPrice / usweight / 0.58m;
            decimal ukRate = ukPrice / ukWeight / 0.41m;
            decimal chRate = chPrice / chWeight * 0.27m;
            if (usRate < ukRate && usRate < chRate)
            {
                Console.WriteLine("US store. {0:F2} lv/kg", usRate);
                Console.WriteLine("Difference {0:F2} lv/kg", Math.Max(ukRate, chRate) - usRate);
            }
            if (ukRate < usRate && ukRate < chRate)
            {
                Console.WriteLine("UK store. {0:F2} lv/kg", ukRate);
                Console.WriteLine("Difference {0:F2} lv/kg", Math.Max(chRate, usRate) - ukRate);
            }
            if (chRate < usRate && chRate < usRate)
            {
                Console.WriteLine("Chinese store. {0:F2} lv/kg", chRate);
                Console.WriteLine("Difference {0:F2} lv/kg", Math.Max(ukRate, usRate) - chRate);
            }
        }
    }
}
