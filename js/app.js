const colors = [
    'red',
    'blue',
    'orange',
    'pink',
    'green',
    'purple',
    'darkgoldenrod',
    'olive',
    'dodgerblue'
]

const boxes = [
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
let count = 0

const changeCount =()=> {
    count++
    document.getElementById('countDisplay').innerText = count

}

boxes.forEach(item => {
    const box = document.createElement('div')
    box.classList.add('box')
    box.setAttribute('id', `box-${item.id}`)
    box.style.backgroundColor = item.color 
    box.style.width = '200px'
    box.style.height = '200px'
    document.getElementById('gameBoard').appendChild(box)


    box.addEventListener('click', ()=> {
        const idx = Math.floor(Math.random() *  colors.length)
        const randomColor = colors[idx]
    
        box.style.backgroundColor = randomColor

        changeCount()
        console.log(count)
    })
})





