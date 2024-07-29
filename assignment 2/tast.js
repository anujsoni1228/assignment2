// tasks.js

// Task 1: Convert Array of Numbers into Their Cubes
function cubeArray(numbers) {
    return numbers.map(num => num ** 3);
}

// Task 2: Find the Sum of All Elements in an Array
function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Task 3: Find All Prime Numbers in an Array
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function filterPrimes(numbers) {
    return numbers.filter(isPrime);
}

// Task 4: Calculate the Average of Squared Odd Numbers
function averageOfSquaredOdds(numbers) {
    const oddSquares = numbers
        .filter(num => num % 2 !== 0)
        .map(num => num ** 2);

    const sumOfSquares = oddSquares.reduce((sum, square) => sum + square, 0);

    return oddSquares.length === 0 ? 0 : sumOfSquares / oddSquares.length;
}

// Task 5: Find the Longest String in an Array
function findLongestString(strings) {
    return strings.reduce((longest, current) => current.length > longest.length ? current : longest, '');
}

// Task 6: Capitalize the First Letter of Each Word in a Sentence
function capitalizeSentence(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Task 7: Find All Students Who Passed the Exam
function filterPassedStudents(students) {
    return students.filter(student => student.score >= 60);
}

// Task 8: Create a Private Counter for Multiple Instances
function createInstanceCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    };
}

// Task 9: Create a Promise-Based Calculator
function calculator(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        switch (operation) {
            case 'addition':
                resolve(num1 + num2);
                break;
            case 'subtraction':
                resolve(num1 - num2);
                break;
            case 'multiplication':
                resolve(num1 * num2);
                break;
            case 'division':
                if (num2 === 0) {
                    reject('Division by zero is not allowed.');
                } else {
                    resolve(num1 / num2);
                }
                break;
            default:
                reject('Invalid operation.');
        }
    });
}

// Task 10: Calculate Total Score
function calculateTotalScore(scores) {
    let total = 0;
    scores.forEach(item => {
        total += item.score;
    });
    return total;
}






// Example usage
if (require.main === module) {
    console.log('Task 1:', cubeArray([1, 2, 3]));
    console.log('Task 2:', sumArray([1, 2, 3, 4]));
    console.log('Task 3:', filterPrimes([1, 2, 3, 4, 5, 6, 7]));
    console.log('Task 4:', averageOfSquaredOdds([1, 2, 3, 4, 5]));
    console.log('Task 5:', findLongestString(['apple', 'banana', 'cherry']));
    console.log('Task 6:', capitalizeSentence('hello world'));
    console.log('Task 7:', filterPassedStudents([{ name: 'Alice', score: 85 }, { name: 'Bob', score: 55 }, { name: 'Charlie', score: 70 }]));
    
    const counter1 = createInstanceCounter();
    const counter2 = createInstanceCounter();
    console.log('Task 8:', counter1(), counter1(), counter2(), counter2());
    
    calculator(10, 2, 'division')
        .then(result => console.log('Task 9:', result))
        .catch(error => console.error('Task 9:', error));
    
    console.log('Task 10:', calculateTotalScore([{ score: 10 }, { score: 20 }, { score: 30 }]));
}