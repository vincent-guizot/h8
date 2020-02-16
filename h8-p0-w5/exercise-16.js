function graduates(students) {
    // Code disini
    var kelas = {}
    for (let i = 0; i < students.length; i++) {
        if (kelas[students[i].class] === undefined) {
            kelas[students[i].class] = []
            var kelasObj = {}
            if (students[i].score > 75) {
                kelasObj.name = students[i].name
                kelasObj.score = students[i].score
                kelas[students[i].class].push(kelasObj)
            }
        } else {
            var kelasObj = {}
            if (students[i].score > 75) {
                kelasObj.name = students[i].name
                kelasObj.score = students[i].score
                kelas[students[i].class].push(kelasObj)
            }
        }
    }
    return kelas
}

console.log(graduates([
    {
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
    {
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}