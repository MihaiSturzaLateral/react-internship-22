function interviewQuestions(job) {
    switch (job) {
        case 'Teacher':
            return function (name) {
                console.log(`What subject do you teach ${name}?`)
            }
        case 'Designer':
            return function (name) {
                console.log(`${name}, can you please explain what is UX?`)
            }
        case 'Lawyer':
            return function (name) {
                console.log(`${name}, how long have you been practicing law?`)
            }
        default:
            return function (name) {
                console.log(`${name}, how are you doing?`)
            }
    }
}

var teacheQuest = interviewQuestions('Teacher')
teacheQuest('John')

interviewQuestions('Designer')('Mark')

interviewQuestions('Lawyer')('Mery')