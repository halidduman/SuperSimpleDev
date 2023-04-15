//  ==============alistirma=============== //


// 1. Bir restoranda 1 çorbayı 10$'a, 3 hamburgeri tanesi 8$'a ve 1 dondurmayı 5$'a
// sipariş ediyorsunuz. Siparişin maliyetini hesaplayın

console.log (10 + 3 * 8 + 5)

// 2. 2 arkadaşınız (toplam 3 kişi) ile bir restorandasınız ve 2a ile aynı siparişi
// veriyorsunuz. Her bir kişinin ne kadar ödediğini hesaplayın.

console.log ((10 + 3 * 8 + 5) /3)

// 3. Bir tost makinesinin (18,50$) ve 2 gömleğin (her biri 7,50$) toplam maliyetini hesaplayın.

console.log (18.5 + 2* 7.5)

// 4. Alıştırma 3.'deki toplam için %10'luk bir vergi hesaplayın.

console.log ((18.5 + 2* 7.5)* 0.1)

// 5. 4.'deki toplam için %20'lik bir vergi hesaplayın (%1 = 1 / 100, dolayısıyla %20 = 20 / 100 = 0,2 olduğunu unutmayın)

(18.5 + 2 * 7.5) * 0.2




// ----------------------------------------------------------------------------------- 2.bolum

// Öğeler (3):
// 47,93 dolar
// Nakliye ve taşıma:
// 4,99 $
// Vergi öncesi toplam:
// 52,92 dolar
// Tahmini vergi (%10):
// 5,29 dolar
// Sipariş toplamı:
// 58,21 dolar

// -----------------------------urunler

// projesinde ana sayfaya gidin ve sepetinize bir ekmek kızartma makinesi (18,99 $) ekleyin, böylece 1 basketbol, ​​1 tişört ve 1 ekmek kızartma makineniz olur. Ekmek kızartma makinesi için 4,99 ABD doları tutarındaki nakliye ücretini seçin.===//

console.log((2095 + 799 + 1899) / 100)

// 6. Ürünlerin maliyetini hesaplayın (nakliye ve vergiler hariç). İpucu: Yanlışlıkları önlemek için sent olarak hesaplayın.

console.log ((2095 + 799 + 1899 + 499) / 100)

// 7. Vergi öncesi Toplamı hesaplayın. 2 saat %10 vergiyi tam olarak hesaplayın. İpucu: Math.round() kullanın


console.log (Math.round((2095 + 799 + 1899 + 499) * 0.1) / 100)

// 8. Alt kısımda Sipariş toplamını hesaplayın. sipariş özeti Bitiş: 2i bitirdikten sonra ekmek kızartma makinesini sepetinizden çıkarın.

console.log ((2095 + 799 + 1899 + 499) / 100 + Math.round((2095 + 799 + 1899 + 499) * 0.1) / 100)




