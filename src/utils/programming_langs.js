export const languages = [
  {
    id: 75,
    name: 'C (Clang 7.0.1)',
    fileName: 'main.c',
    mode: 'clike',
    code: `#include <stdio.h> \n\nint main(void)\n{\n printf("Hello Geeks!!!");\n printf("Welcome to CodeINN");\n return 0; \n}`,
  },
  {
    id: 52,
    name: 'C++ (GCC 7.4.0)',
    fileName: 'main.cpp',
    mode: 'clike',
    code: `#include <iostream>\nusing namespace std;\n\nint main()\n{\n std::cout << "Hello Geeks!!!" << endl;\n std::cout << "Welcome to CodeINN" << endl;\n return 0;\n}\n`,
  },
  {
    id: 63,
    name: 'JavaScript (Node.js 12.14.0)',
    fileName: 'main.js',
    mode: 'javascript',
    code: `console.log("Hello Geeks!!!");\nconsole.log("Welcome to CodeINN");\n`,
  },
  {
    id: 71,
    name: 'Python (3.8.1)',
    fileName: 'main.py',
    mode: 'python',
    code: `print("Hello Geeks!!!")\nprint("Welcome to CodeINN")\n`,
  },
  {
    id: 51,
    name: 'C# (Mono 6.6.0.161)',
    fileName: 'main.cs',
    mode: 'clike',
    code: `using System;\n\nclass Program {\nstatic void Main(string[] args)\n{\n Console.WriteLine("Hello Geeks!");\n Console.WriteLine("Welcome to CodeINN");\n}\n}\n`,
  },
];
