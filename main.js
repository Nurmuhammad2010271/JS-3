alert("Sizda hozir random sonlar chiqishni boshlaydi");
let num = Math.round(Math.random() * 100);
alert(`Random orqali chiqqan son : ${num}`);
confirm("Biz random sonni 2 ga kopaytirmoqchi va bo'lmoqchimiz !");
alert(`Random orqali chiqqan son: ${num} edi,
    Biz uni 2 ga ko'paytirib: ${num * 2} sonini chiqardik,
    va shu sonni 2 ga bo'lib: ${num / 2} sonini chiqardik,
    va shu sonni 3 ga bolgandagi qoldiq: ${num % 3} sonini chiqardik`
)