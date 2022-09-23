let name1 = 'Peter'
let name2 = 'Paul'

if (name1.length <= name2.length) {
    console.log(`The name ${name1} is longer than ${name2} by ${name2.length - name1.length} characters.`)
} else {
    console.log(`The name ${name1} is shorter than ${name2} by ${name2.length - name1.length} characters.`)
}