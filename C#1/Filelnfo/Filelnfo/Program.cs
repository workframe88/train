
using System.IO;

namespace Filelnfos
{
    internal class Program
    {
        static void Main(string[] args) { 

            var path = @"c:\temp\myfile.jpg";

            File.Copy(@"c:\temp\myfile.jpg", @"d:\temp\myfile.jpg", true);
            File.Delete(path);

            if(File.Exists(path) )
            {

            }
            var content = File.ReadAllText(path);

            var fineInfo = new FileInfo(content);
            fineInfo.CopyTo("...");
            fineInfo.Delete();
            if(fineInfo.Exists)
            {

            }
          
        }
    }
}