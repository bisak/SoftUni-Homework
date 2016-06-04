using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Censor_Your_Email
{
    class Program
    {
        static void Main(string[] args)
        {
            string mail = Console.ReadLine();
            string[] text = Console.ReadLine().Split(' ');
            string[] username = mail.Split('@');
            username[0] = new string('*', username[0].Length);
            string replacement = username[0] + "@" + username[1];
            for (int i = 0; i < text.Length; i++)
            {
                if (text[i] == mail)
                {
                    text[i] = replacement;
                }
            }
            Console.WriteLine(string.Join(" ", text));
        }
    }
}
