import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog-deal-list',
  templateUrl: './catalog-deal-list.component.html',
  styleUrls: ['./catalog-deal-list.component.scss'],
})
export class CatalogDealListComponent implements OnInit {

  dealSlideList: any;

  constructor() { }

  ngOnInit() {
    this.dealSlideList = [
      {
        dealList: [
          {
            name: 'Produto 1',
            price_before: 20.0,
            price: 17.0,
            parcel_max: 10,
            parcel_price: 1.7
          },
          {
            name: 'Produto 2',
            price_before: 20.0,
            price: 17.0,
            parcel_max: 10,
            parcel_price: 1.7
          },
          {
            name: 'Produto 3',
            price_before: 20.0,
            price: 17.0,
            parcel_max: 10,
            parcel_price: 1.7
          },
          {
            name: 'Produto 4',
            price_before: 20.0,
            price: 17.0,
            parcel_max: 10,
            parcel_price: 1.7
          },
        ]
      },
      {
        dealList: [
          {
            name: 'Produto 5',
            price_before: 20.0,
            price: 17.0,
            parcel_max: 10,
            parcel_price: 1.7
          },
          {
            name: 'Produto 6',
            price_before: 20.0,
            price: 17.0,
            parcel_max: 10,
            parcel_price: 1.7
          },
        ]
      }
    ];
  }

}
