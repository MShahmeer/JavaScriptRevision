/*
    JavaScript execution context means that whatever file you have main in JS, how will it run or exexute?
    So this runs in two phases

    Everytime we write a code a global execution context is formed and is stored in varibale "this". In bowser this refers to windows object

    so two execution context are

    1: Global Execution Context
    2: Function Execution Context
    3: Eval Execution Context (In mangoose)

    how the code runs?
        1: first memory creation phase 
            here the memory is allocated to variables only
        2: second phase is execution phase

    Understand using a code

    let val1 = 10;
    let val2 = 5;
    function addNum(num1, num2){
        let total = num1+num2
        return total
    }
    let result1 = addNum(val1, val2)
    let result2 = addNum(10, 2)

    Execution of this code step by step
    1: Global Execution
        this
    2: Memory Phase
        Val1 => undefined
        Val2 => undefined
        addNum => definition ({ let total = num1+num2 return total})
        result1 => undefined
        result2 => undefined
    3: Execution Phase
        val1 = 10
        val2 = 5
        addNum => [seperate execution context is formed for addNum in result1, here in this box new variable environment + execution thread is formed]
            1: Memory Creation Phase (for addNum in result1)
                val1 => undefined
                val2 => undefined
                total => undefined
            2: Execution Phase (for addNum in result1)
                val1 => 10
                val2 => 5
                total => 15 (this will return to global execution context)
    

    Javascript call stack
        [global exe will exist here at top]
*/