import inquirer from "inquirer";

// declear a constant answer
const answers: {
    sentence:string
} = await inquirer.prompt([{
    name: "sentence",
    type: "input",
    message: "Enter your sentence to count the word:"
},
])

const words = answers.sentence.trim().split(' ')
// TRIM is used to remove the whitwe spaces
// SPLIT is used to collect all the words in array during compilation


//print the array of words to the console
console.log(words)

// print the word count of the sentence to the console
console.log('Your sentence word count is:')
console.log(words.length)
