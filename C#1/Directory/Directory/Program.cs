using System.IO;

namespace Directorys
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Directory.CreateDirectory(@"e:\train");

            var files = Directory.GetFiles(@"e:\train", "*.sln", SearchOption.AllDirectories);
        
            foreach (var file in files)
            {
                Console.WriteLine(file);
            }

            var directories = Directory.GetDirectories(@"e:\train", "*.*", SearchOption.AllDirectories);

            foreach (var directory in directories)
            {
                Console.WriteLine(directory);
            }

            Directory.Exists("...");

            var directorInfo = new DirectoryInfo("...");
            directorInfo.GetFiles();
            directorInfo.GetDirectories();
        }
    }
}