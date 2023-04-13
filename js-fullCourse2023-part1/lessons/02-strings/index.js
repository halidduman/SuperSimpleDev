// bir basketbol topunun ( $20.95 )ve t-shirt'in ( $7.99 ) magliyetini hesaplamak icin dogru kodlama.

`$` +
  20.95 +
  7.99// cevap = `$20.957.99`--> js ilk olarak "$" ve "20.95"i hesaplamaya calistigi icin bu sekilde bir hatalı sonuc aliriz

  `$20.95` +
  7.99// cevap = `$20.957.99` --> bu sekilde de yapmak hatalidir js burada matematik yapmak yerine ikisinide yazi olarak algilayip birlestirecektir.

  `$` +
  (20.95 +
    7.99)// cevap = `$28.939999999989` -->bazen bu sekilde hata alabiliriz bunu en dogru yapma yontemi de cent olarak hesaplamaktır ve daha sonrasinda tekrar dolar'a cevirmektir.

  `$` +
  (2095 + 799) /
    100// cevap = `$28.94`--> dogru sonuca bu sekilde ulasiriz

    // -----------------------------------------------------------urun miktari&sayisi

    `Items (` +
  1 +
  1`)`// cevap = ıtems (11)--> hatali islem parantez kullanilmadı

  `Items (` +
  (1 + 1) +
  `): $` +
  (2095 + 799) / 100;
// cevap = 'Items (2): $28.94'--> dogru sonuc

`Items (${1 + 1})`
// cevap = Items (2)

`Items (${1 + 1}): $${(2095 + 799) / 100}`
// cevap = 'Items (2): $28.94'--> yukaridaki islemde parantez kullanmayi unutmayin.

// ---------------------------------------------------------------cift tirnak ve cift tirnak

// onerilen (``) tek tirnakti ama bazen ("")cift tirnak kullanmamiz gerekebilir mesela = (`I`m learning JavaScript`) yazarsak sadece "I" harfi tirnak icinde kalacak bunun ici yamamiz gereken cift tirnak kullanmak.("I`m learning JavaScript")

// ek olarakkacis karakteri ekleyerek de bu sorunun onune gecebiliriz ornegin = (`I\`m learning JavaScript`) bu sayede cift tirnak kullanmadan yazabilmis olduk

// (``) ile alt alta metinler yazabiliriz

// yeni bir satir olusturmak icinse (\) egik cizgiyi ekleriz ornek= (`some\ntext`);


