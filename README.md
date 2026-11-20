# Login Validation Project

React ve Vite kullanılarak geliştirilmiş, form doğrulama kurallarına sahip bir giriş sayfası projesidir.

## Kullanılan Teknolojiler

- React
- Vite
- JavaScript
- Reactstrap
- Bootstrap
- Cypress

## Özellikler

- E-posta adresi doğrulama
- Güçlü şifre kontrolü
- Kullanım koşulları onayı
- Form geçerliliğine göre giriş butonunun aktif/pasif olması
- Başarılı giriş sonrasında başarı ekranının gösterilmesi
- Cypress ile otomatik uçtan uca (E2E) testler

## Şifre Gereksinimleri

Şifrenin geçerli sayılması için:

- En az 8 karakter içermesi
- En az bir büyük harf içermesi
- En az bir küçük harf içermesi
- En az bir rakam içermesi
- En az bir özel karakter içermesi

## Kurulum

Projeyi bilgisayarınıza indirdikten sonra terminalde şu komutları çalıştırın:

```bash
npm install
```

Uygulamayı başlatmak için:

```bash
npm run dev
```

## Cypress Testleri

Cypress test ekranını açmak için:

```bash
npx cypress open
```

Testleri terminal üzerinden çalıştırmak için:

```bash
npx cypress run
```

## Test Senaryoları

1. Geçerli bilgilerle başarılı giriş yapılması
2. Geçersiz e-posta adresinde hata mesajı gösterilmesi
3. Geçersiz e-posta ve şifre durumunda iki hata mesajı gösterilmesi
4. Kullanım koşulları kabul edilmediğinde giriş butonunun pasif kalması
