jQuery(document).ready(function () {
    let display = ''
    let A
    let B
    let Operator
    let equals = ''

    // Function that performs calculations
    function calculated (operator, a, b) {
        if (operator === '+') {
            return Math.round((a + b) * 1000000) / 1000000
        } else if (operator === '-') {
            return Math.round((a - b) * 1000000) / 1000000
        } else if (operator === '*') {
            return Math.round((a * b) * 1000000) / 1000000
        } else if (operator === '/') {
            return Math.round((a / b) * 1000000) / 1000000
        }
    }

    // When a number or decimal is clicked
    $('.num').click(function () {
        if (A === equals) {
            display = '0'
            A = undefined
        }
        if (display === '0') {
            display = ''
        }
        if (A !== undefined && Operator !== undefined && B === undefined) {
            display = ''
        }
        if ($(this).val() === ".") {
            if (!display.split('').includes(".")) {
                display += $(this).val()
            }
        }
        if ($(this).val() !== ".") {
            display += $(this).val()
        }
        if ($(this).val() === '0' && display === '0') {
            display = '0'
        }
        if (A !== undefined && Operator !== undefined) {
            B = parseFloat(display)
        }
        document.querySelector('.calculations').innerHTML = `${display}`
    })

    // When an operator is clicked
    $('.operator').click(function () {
        equals = ''
        if (display === '0' && A === 0) {
            Operator = undefined
            A = undefined
        } else if (A === undefined) {
            A = parseFloat(display)
            Operator = $(this).val()
            display = ''
        } else if (A && !B && !Operator) {
            Operator = $(this).val()
        }
        if (A && B !== undefined && Operator) {
            display = calculated(Operator, A, B)
            document.querySelector('.calculations').innerHTML = `${display}`
            A = display
            B = undefined
            Operator = $(this).val()
        }
    })

    // When the 'clear' button is clicked
    $('#clear').click(function () {
        display = '0'
        A = undefined
        B = undefined
        Operator = undefined
        document.querySelector('.calculations').innerHTML = `${display}`
    })

    // When the 'equals' button is clicked
    $('#equals').click(function () {
        if (A && B !== undefined && Operator) {
            display = calculated(Operator, A, B)
            document.querySelector('.calculations').innerHTML = `${display}`
            A = display
            B = undefined
            Operator = undefined
            equals = display
        }
    })

    // When the 'percent' button is clicked
    $('#percent').click(function () {
        if (parseFloat(display) > 1 || parseFloat(display) < -1) {
            display = Math.round(parseFloat(display) * 1000000) / 10000000
            document.querySelector('.calculations').innerHTML = `${display}`
        }
    })

    // When the 'plus/minus' button is clicked
    $('#plus-minus').click(function () {
        let displayParsed = parseFloat(display)
        display = (displayParsed * -1)
        document.querySelector('.calculations').innerHTML = `${display}`
    })
})

// console.log(`A: ${A}`)
// console.log(`B: ${B}`)
// console.log(`operator: ${Operator}`)
// console.log(`display: ${display}`)
// console.log(`calculate: ${calculate}`)