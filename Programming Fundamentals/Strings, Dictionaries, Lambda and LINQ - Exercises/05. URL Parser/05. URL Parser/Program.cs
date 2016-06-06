using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Extract_Sentences
{
    class Program
    {
        static void Main(string[] args)
        {
            string url = Console.ReadLine();
            string protocol = "";
            string server = "";
            string resource = "";
            if (url.Contains("://"))
            {
                protocol = url.Split(new string[] { "://" }, StringSplitOptions.None)[0];
                server = url.Split(new string[] { "://" }, StringSplitOptions.None)[1].Split('/')[0];
            }
            else
            {
                server = url.Split('/', '/')[0];
            }
            try
            {
                url = url.Replace("://", "  ");
                resource = url.Substring(url.IndexOf("/"), url.Length - url.IndexOf('/'));
                resource = resource.Remove(0, 1);
            }
            catch (Exception)
            {
            }
            Console.WriteLine("[protocol] = " + "\"" + protocol + "\"");
            Console.WriteLine("[server] = " + "\"" + server + "\"");
            Console.WriteLine("[resource] = " + "\"" + resource + "\"");
        }
    }
}

