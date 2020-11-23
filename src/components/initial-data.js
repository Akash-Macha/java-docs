// https://www.geeksforgeeks.org/java-lang-integer-class-java/

export const WrapperClasses = {
    absoluteClassPath: "java.lang",
    classes: [
        {
            className: "Integer",
            constructors: [
                {
                    signature: "Integer(int b)",
                    explanation: "Creates a Integer object initialized with the value provided."
                },
                {
                    signature: "Integer(String s)",
                    explanation: "Creates a Integer object initialized with the int value provided by string representation. Defalut radix is taken to be 10."
                }
            ],
            methods: [
                {
                    signature: "toString()",
                    explanation: "Returns the string corresponding to the int value.",
                },
                {
                    signature: "toHexString()",
                    explanation: "Returns the string corresponding to the int value in hexadecimal form, that is it returns a string representing the int value in hex characters-[0-9][a-f]",
                }
            ],
        },
    ],
    meta:{
        totalRecords: "1"
    }
};
