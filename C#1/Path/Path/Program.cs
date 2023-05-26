using System;
using System.IO;

namespace PathExample
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var path = @"E:\train\C#\Hello World\CSharpFundamentals.sln";

            var dotIndex = path.IndexOf('.');
            var extension = path.Substring(dotIndex);

            Console.WriteLine("Extension: " + Path.GetExtension(path));
            Console.WriteLine("File Name: " + Path.GetFileName(path));
            Console.WriteLine("File Name without: " + Path.GetFileNameWithoutExtension(path));
            Console.WriteLine("Directory Name: " + Path.GetDirectoryName(path));


        }
    }
}
