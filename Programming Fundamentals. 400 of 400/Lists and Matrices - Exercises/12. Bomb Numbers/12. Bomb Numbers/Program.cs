using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _12.Bomb_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> nums = Console.ReadLine().Trim().Split(' ').Select(int.Parse).ToList();
            List<int> para = Console.ReadLine().Trim().Split(' ').Select(int.Parse).ToList();
            int spec = para[0];
            int power = para[1];
            for (int i = 0; i < nums.Count; i++)
            {
                if (nums[i] == spec)
                    for (int p = -power; p <= power; p++)
                        if (i + p >= 0 && i + p < nums.Count)
                            nums[i + p] = 0;

            }

            Console.WriteLine(nums.Sum());
        }
    }
}
