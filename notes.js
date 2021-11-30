const notes = [
    {
        id: 1,
        subject: "Arrays",
        date: "11/20/21",
        feeling: "Giddy",
        timeSpent: 105
    },
    {
        id: 2,
        subject: "Functions",
        date: "11/21/21",
        feeling: "Frightened",
        timeSpent: 135
    }
]
// console.log(notes)

const noteAboutToday = {
    id: 3,
    subject: "Methods",
    date: "11/21/21",
    feeling: "Insane",
    timeSpent: 82
}

notes.push(noteAboutToday)
// console.log(notes)

// for (const note of notes) {
//     console.log(`Note ${note.id}
//     ${note.date}
//     I learned ${note.subject}. 
//     I spent ${note.timeSpent} minutes working on it. 
//     I felt ${note.feeling}.`)
// }

const searchTerm = "Frightened"

for (const note of notes) {
    if (note.feeling === searchTerm) {
        console.log(`Functions make me frightened!`)
    }
}


// const createNote = (note) => {
//     const lastIndex = notes.length -1
//     const currentLastNote = notes[2]
//     const maxId = currentLastNote.id
//     const idForNewNote = maxId + 1 
//     notes.push(note)
// }

