// const colors = [
//     'red',
//     'blue',
//     'orange',
//     'pink',
//     'green',
//     'purple',
//     'darkgoldenrod',
//     'olive',
//     'dodgerblue'
// ]

// const boxes = [
//     {
//         id: 1,
//         color: 'red'
//     },
//     {
//         id: 2,
//         color: 'blue'
//     },
//     {
//         id: 3,
//         color: 'orange'
//     },
//     {
//         id: 4,
//         color: 'pink'
//     },
//     {
//         id: 5,
//         color: 'green'
//     },
//     {
//         id: 6,
//         color: 'purple'
//     },
//     {
//         id: 7,
//         color: 'darkgoldenrod'
//     },
//     {
//         id: 8,
//         color: 'olive'
//     },
//     {
//         id: 9,
//         color: 'dodgerblue'
//     }
// ]
// let count = 0

// const changeCount =()=> {
//     count++
//     document.getElementById('countDisplay').innerText = count

// }

// boxes.forEach(item => {
//     const box = document.createElement('div')
//     box.classList.add('box')
//     box.setAttribute('id', `box-${item.id}`)
//     box.style.backgroundColor = item.color 
//     box.style.width = '200px'
//     box.style.height = '200px'
//     document.getElementById('gameBoard').appendChild(box)


//     box.addEventListener('click', ()=> {
//         const idx = Math.floor(Math.random() *  colors.length)
//         const randomColor = colors[idx]
    
//         box.style.backgroundColor = randomColor

//         changeCount()
//         console.log(count)
//     })
// })

/**
 * Refactoring
 * 
 * using class based Object
 */

class Game {

    constructor() {

        this.countDisplay = document.getElementById('countDisplay')
        this.gameBoard = document.getElementById('gameBoard')
        this.count = 0

        this.colors = [
            'red', 'blue', 'orange',
            'pink', 'green', 'purple',
            'darkgoldenrod', 'olive', 'dodgerblue'
        ]

        this.scores = {
            prevScore: 0,
            bestScore: 0
        }

        this.boxes = [
            {
                id: 1,
                color: 'red'
            },
            {
                id: 2,
                color: 'blue'
            },
            {
                id: 3,
                color: 'orange'
            },
            {
                id: 4,
                color: 'pink'
            },
            {
                id: 5,
                color: 'green'
            },
            {
                id: 6,
                color: 'purple'
            },
            {
                id: 7,
                color: 'darkgoldenrod'
            },
            {
                id: 8,
                color: 'olive'
            },
            {
                id: 9,
                color: 'dodgerblue'
            }
        ]
    }

    init() {
        // console.log('initialized')
        this.makeBoxes()
    }

    makeBoxes() {

        let newBoxArr = []
        this.boxes.forEach(item => {

            const box = document.createElement('div')
            box.classList.add('box')
            box.setAttribute('id', `box-${item.id}`)
            box.style.backgroundColor = item.color
            box.style.width = '200px'
            box.style.height = '200px'

            newBoxArr = [...newBoxArr, box]

            // this works but I want to randomize the boxes
            // this.placeOnBoard(box)
            // this.handleClick(box)
        })

        // console.log(newBoxArr)
        this.placeOnBoard(newBoxArr)
    }


    placeOnBoard(arr){
        // randomly selects box and appends it each time.
        let box
        for (let i = arr.length - 1; i >= 0; i--) {
            box = arr.splice(Math.floor(Math.random()* arr.length), 1)
            // console.log(box)
            this.gameBoard.appendChild(box[0])
            console.log(box[0].style.backgroundColor)
            this.handleClick(box[0])

        }
        
    }

    handleClick(item) {
        item.addEventListener('click', ()=> {
            console.log(item.style.backgroundColor)
            this.changeColor(item, this.getRandomColor())
            this.getCount()
        })
    }

    getRandomColor() {
        const idx = Math.floor(Math.random() * this.colors.length)

        const randomColor = this.colors[idx]
        // console.log(randomColor)
        return randomColor
    }

    changeColor(el, rand) {
        el.style.backgroundColor = rand
    } 

    getCount() {
        this.count++

        this.countDisplay.innerText = this.count
    }
}

const action = new Game()

action.init()