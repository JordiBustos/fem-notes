/*
  Fundamental Objects ->
    Built-in Objects or Native functions ->
      Use new:
        Object()
        Array()
        Function()
        Date()
        RegExp()
        Error()

      Do not use new:
        String()
        Number()
        Boolean()

        Because when are used as a function
        coerce any value to that respective primitive type
*/

// Example

let yesterday = new Date('25 July, 2019')
yesterday.toUTCString()

let myGPA = String(transcript.gpa)
