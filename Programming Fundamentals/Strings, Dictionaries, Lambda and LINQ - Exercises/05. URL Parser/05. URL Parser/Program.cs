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
            string server="";
            string resource = "" ;
            if (url.Contains("://"))
            {
                server = url.Split(new string[] { "://" }, StringSplitOptions.None)[1];
                server = server.Split('/')[0];
                protocol = url.Split(new string[] { "://" }, StringSplitOptions.None)[0];
            }
            else
            {
                server = url.Split('/')[0];
            }


            try
            {
               resource = url.Replace(protocol +"://" + server + "/", "");
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

