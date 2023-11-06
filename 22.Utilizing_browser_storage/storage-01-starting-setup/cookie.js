const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

storeBtn.addEventListener('click', () => {
    const userId = 'u123';
    const user = {
        name: 'Khan',
        age: 21,
    }; 
    document.cookie = `uid=${userId}; max-age=2`;
    document.cookie = `user=${JSON.stringify(user)}`;
});

retrBtn.addEventListener('click', () => {
   const cookieData = document.cookie.split(';');
   const data = cookieData.map(item => {
    return item.trim();
   });
   console.log(data[1].split('=')[1]);              ;
});