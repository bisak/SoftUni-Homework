using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _08.Most_Frequent_Number
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arr = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            int count = 0;
            int tempCount = 0;
            int popular = 0;
            for (int i = 0; i < arr.Length ; i++)
            {
                tempCount = 0;
                for (int j = 0; j < arr.Length; j++)
                {
                    if (arr[i] == arr[j]) tempCount++;
                }
                if (tempCount > count)
                {
                    popular = arr[i];                    
                    count = tempCount;
                }
            }
            Console.WriteLine(popular);
        }
    }
}
