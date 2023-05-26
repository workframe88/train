using CSharpFundamentals.Math;
using System;

namespace CSharpFundamentals
{
    class Program
    {
        static void Main(string[] args)
        {
            Person Frame = new Person();
            Frame.FirstName = "Kowit";
            Frame.LastName = "Thanapruettiwong";
            Frame.Introduce();

            Calculator calculator = new Calculator();
            var result =  calculator.Add(1, 2);
            Console.WriteLine(result);
        }
    }
}