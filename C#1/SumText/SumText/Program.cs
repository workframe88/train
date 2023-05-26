using System;
using System.Collections.Generic;

namespace SumText
{
     class Program
    {
        static void Main(string[] args)
        {
            var sentence = "This is going to be a really really really really long text.";
            var summarry = StringUtility.SummerizeText(sentence);
            Console.WriteLine(summarry);


        }
        
    }
}