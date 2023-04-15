// 1.'My name is:' metnini bir dize olarak oluşturun.

console.log(`my name is`)

// 2. Adınızı bir dize olarak oluşturun (örneğin: 'Simon').

console.log(`halid`)

// 3. Birleştirmeyi kullanarak, 1. ve 2.'den 2 dizeyi birbirine ekleyerek şu metni oluşturun: 'Benim adım: ___' (______ yerine kendi adınızı yazın).

console.log(`my name is:`+ `halid`)

// 4. Bir restoranda 1 kahve (5 $) ve 1 simit (3 $) sipariş edersiniz. Matematiği kullanarak toplam maliyeti hesaplayın ve birleştirme kullanarak şu metni oluşturun: 'Toplam maliyet: $_____' (______ yerine hesapladığınız toplam değeri yazın).

console.log(`total const: $` + (5 + 3) )

// 5. 3B ile aynı şeyi yapın, ancak bir şablon dizisi ve enterpolasyon kullanın.

console.log(`total const:$${5+3}`)

// 6. 3e'deki metni alert(...);

console.log(alert(`Total cost: $${5 + 3}`))


// 7. 1 kahve (5,99 $) ve 1 simit (2,95 $) sipariş edersiniz. Matematiği kullanarak toplam maliyeti hesaplayın ve birleştirme kullanarak şu metni oluşturun: $.'Toplam maliyet: $_____' (ipucu: yanlışlıkları önlemek için sent olarak hesaplayın) 

'Total cost: $' + (599 + 295) / 100

// 3 saat 3g ile aynı şeyi yapın, ancak bir şablon dizisi ve enterpolasyon kullanın.

`Total cost: $${(599 + 295) / 100}`

// 8. 7.'deki metni bir açılır pencerede görüntüleyin.

alert(`total const: $` + (599 + 295)/100)

// 9. Çok satırlı bir dize kullanarak, 3h'den itibaren metni oluşturun ve altına bir metin satırı ekleyin: 'Teşekkürler, tekrar gelin!'. Her iki satırı da bir açılır pencerede görüntüleyin.Toplam maliyet: 8,94 $ Teşekkürler, tekrar gelin! TAMAM

alert(`Total cost: $${(599 + 295) / 100}
Thank you, come again!`)


// Mücadele Egzersizleri Kurulum: Amazon projesinde, sepeti 2 basketbol topu (her biri 20,95 ABD doları) ve 4,99 ABD doları kargo bedeli ve 2 tişört (her biri 7,99 ABD doları) ve 4,99 ABD doları nakliye bedeli ile güncelleyin.

// ------------------------------------------------------------------



// Öğeler (4):
// 57,88 dolar
// Nakliye ve taşıma:
// 9,98 dolar
// Vergi öncesi toplam:
// 67,86 dolar
// Tahmini vergi (%10):
// 6,79 dolar
// Sipariş toplamı:
// 74,65 dolar



// -----------------------------------------

// 10. Enterpolasyonu kullanarak, metnin ilk satırını
// oluşturun (4 ve 57,88 sayılarını hesaplamak için matematiği kullanın).

`Items (${2 + 2}): $${(2 * 2095 + 2 * 799) / 100}`

// 11. Metnin ikinci satırını oluşturun: 'Nakliye ve taşıma: 9,98 ABD doları' (matematiği kullanın).

`Shipping & handling: $${(499 + 499) / 100}`

// 12. Üçüncü satırı oluşturun: 'Vergi öncesi toplam: 67,86 $' (matematiği kullanın).

`Total before tax: $${(2 * 2095 + 2 * 799 + 499 + 499) / 100}`

// 13. Metnin dördüncü satırını oluşturun: 'Tahmini vergi (%10): 6,79 $' (tam sayıyı hesaplamak için math ve Math.round(...); kullanın).
// Bitiş: sepeti tekrar 1 basketbol, ​​1 tişört (her ikisi de ücretsiz gönderim) olarak değiştirin.

`Estimated tax (10%): $${Math.round((2 * 2095 + 2 * 799 + 499 + 499) * 0.1) / 100}`