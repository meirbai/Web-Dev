import {Component, QueryList, ViewChildren} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgForOf, NgIf} from "@angular/common";
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab4';
  protected readonly prods = prods;
  @ViewChildren('dialog') dialogs!: QueryList<ElementRef<HTMLDialogElement>>;
  @ViewChildren('showButton') showButtons!: QueryList<ElementRef<HTMLButtonElement>>;
  @ViewChildren('closeButton') closeButtons!: QueryList<ElementRef<HTMLButtonElement>>;

  constructor() {}

  ngAfterViewInit() {
    this.showButtons.forEach((showButton, index) => {
      showButton.nativeElement.addEventListener("click", () => {
        const dialog = this.dialogs.toArray()[index];
        if (dialog)
          dialog.nativeElement.showModal();
      });
    });

    this.closeButtons.forEach((closeButton, index) => {
      closeButton.nativeElement.addEventListener("click", () => {
        const dialog = this.dialogs.toArray()[index];
        if (dialog)
          dialog.nativeElement.close();
      });
    });
  }
}



export class Product{
  name : String;
  image:String;
  description : String;
  rating : Number;
  price : String;
  link:String;
  constructor(name : String, image : String, desc : String, rat : Number, price : String, link:String) {
    this.name = name;
    this.image = image;
    this.description = desc;
    this.rating = rat;
    this.price = price;
    this.link = link;
  }

}

export const iphone11 = new Product("Apple iPhone 11 128Gb Slim Box черный",
  "https://resources.cdn-kaspi.kz/img/m/p/hd8/hac/63897052413982.jpg?format=gallery-medium",
  "Функциональный и стильный смартфон Apple iPhone 11 в металлическом корпусе способен обеспечить не только повседневное общение и развлечения, но и продуктивную работу. Изображение на экране смартфона диагональю 6.1 дюйма обладает поразительной детализацией и цветопередачей. Олеофобное покрытие исключает сильное загрязнение экрана.",
  4.9,
  "240 408",
  "https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/");


  export const iphone13blue = new Product("Apple iPhone 13 128Gb синий",
   "https://resources.cdn-kaspi.kz/img/m/p/hba/h2e/64206204993566.jpg?format=gallery-medium",
   "Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.",
   4.8,
   "288 944","https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/");

 export const charger = new Product("Зарядное устройство Apple 20W USB-C Power Adapter белый",
   "https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=gallery-medium",
   "Адаптер питания Apple USB‑C мощностью 20 Вт дает возможность быстро и эффективно заряжать гаджеты. Проверяется на основном сайте через QR на оригинальность. Этот адаптер совместим с любыми устройствами Apple, оснащенными портом USB-C: смартфон, планшет или смарт-часы. ",
   4.5,
   "2 080","https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/");

 export const iCase = new Product("Чехол Ala case для iPhone 11 прозрачный",
   "https://resources.cdn-kaspi.kz/img/m/p/he5/hb3/64408556175390.jpg?format=gallery-medium",
   "Легкий, но при этом максимально- надежный чехол для Apple iPhone 11. Усиленные углы чехла - снижают силу удара на 30%. Полная защита камеры и выступающие над поверхностью экрана бортики - создают дополнительную защиту для экрана и камеры телефона. Кристально- прозрачный, тонкий и пластичный материал плотно облегает корпус смартфона, сохраняя стиль и индивидуальность гаджета. Микроперфорация по внутренней поверхности чехла препятствует образованию влажных разводов сохраняя стильный внешний вид смартфона. Благодаря своей гибкости, чехол плотно прилегает к устройству, легко надевается. Чехол оснащен всеми необходимыми отверстиями для удобного доступа к элементам управления смартфоном.",
   5,
   "140","https://kaspi.kz/shop/p/ala-case-dlja-iphone-11-prozrachnyi-103661424/");

 export const cable = new Product("Кабель Apple USB Type-C - Lightning 1 м",
   "https://resources.cdn-kaspi.kz/img/m/p/hbd/h2f/63829403140126.jpg?format=gallery-medium",
   "Кабель Apple USB Type-C - Lightning длиной 1 м удобен для подключения iPhone, iPad или iPod с разъёмом Lightning к устройствам с портом USB Type-C или Thunderbolt 3 для синхронизации и подзарядки, либо к сетевому адаптеру питания Apple USB Type-C мощностью 18 Вт, 20 Вт, 29 Вт, 30 Вт, 61 Вт, 87 Вт или 96 Вт.",
   4.5,
   "1 602","https://kaspi.kz/shop/p/xiaomi-redmi-power-bank-20000-mach-chernyi-100322086/?c=750000000");


export const pb = new Product("Внешний аккумулятор Xiaomi Redmi Power Bank 20000 мАч черный",
  "https://resources.cdn-kaspi.kz/img/m/p/h34/h07/63928978014238.jpg?format=gallery-medium",
  "Xiaomi Redmi Power Bank 20000 мАч выполнен в прочном пластиковом корпусе прямоугольной формы и отличается компактными размерами.\n" +
  "Большая ёмкость позволяет полностью зарядить 4 смартфона Xiaomi Mi 9 подряд, не подзаряжая сам аккумулятор. Такая вместимость позволит Вам заряжать несколько устройств в течение целого дня. Xiaomi Redmi Power Bank 20000 мАч имеет два выходных разъема USB Type-A и два входных интерфейса micro USB и USB Type-C. \n" +
  "Портативный аккумулятор с возможностью быстрой зарядки гарантировано сэкономит Ваше время.",
  4.5,
  "4 901","https://kaspi.kz/shop/p/kabel-apple-usb-type-c---lightning-1-m-40500508/");

export const iphone15 = new Product("Apple iPhone 15 Pro Max 256Gb черный",
  "https://resources.cdn-kaspi.kz/img/m/p/hdf/hc7/83559837007902.jpg?format=gallery-medium",
  "Apple iPhone 15 Pro Max - сверхпрочный флагман, изготовленный из титана. За бескомпромиссную производительность смартфона отвечает новейший чип Apple A17 Pro. Устройство получило передовую систему камер, продуманную эргономику, обновленный дизайн и новую программируемую кнопку.",
  5,
  "620 700","https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-chernyi-113138363/?c=750000000");

export const iphone13white = new Product("Apple iPhone 13 128Gb белый",
  "https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-medium",
  "Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.",
  5,
  "289 585","https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000");




let prods = [iphone11 , iphone13blue, cable, iCase, charger, pb, iphone15, iphone13white,iCase, charger,];
//, iphone13, cable, iCase, charger
