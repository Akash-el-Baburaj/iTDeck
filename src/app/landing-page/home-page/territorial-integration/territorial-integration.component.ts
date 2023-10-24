import { Component } from '@angular/core';
import { countryList, markers } from 'src/app/shared/vectormap/vectormap.model';

@Component({
  selector: 'app-territorial-integration',
  templateUrl: './territorial-integration.component.html',
  styleUrls: ['./territorial-integration.component.scss']
})
export class TerritorialIntegrationComponent {
  worldMapConfig: any = {};
  canadaMapConfig: any = {};
  russiaMapConfig: any = {};
  usaMapConfig: any = {};
  spainMapConfig: any = {};
  italyMapConfig: any = {};
  iraqMapConfig: any = {};

  mapMarkers: markers[] = [];
  countryList: countryList[] = [];

  constructor() {}

  ngOnInit(): void {
    this.initMapConfig();
    this.initCountryList();
  }

  initMapConfig(): void {
    this.worldMapConfig = {
      backgroundColor: 'transparent',
      regionStyle: {
        initial: {
          fill: '#e3eaef',
        },
      },
      markers: [
        { coords: [19.9, 78.05], name: 'India' },
        { coords: [35.9, 138.05], name: 'Japan' },
        { coords: [52.9, -1.05], name: 'UK' },
        { coords: [2.9, 114.05], name: 'Malaysia' },
        { coords: [15.7, 102.05], name: 'Thai' },
        { coords: [36.2, 128.05], name: 'South Korea' },
        { coords: [-30.9, 23.05], name: 'South Africa' },
        { coords: [-1.7, 29.9], name: 'Rwada' },
        { coords: [39.9, -105.05], name: 'USA' },
        { coords: [58.9, -109.65], name: 'Canada' },
        { coords: [-11.9, -50.05], name: 'BraZil' },
        { coords: [21.5, -101.05], name: 'Mexico' },
        { coords: [-23.9, 135.05], name: 'Australia' },
        { coords: [23.9, 43.05], name: 'Suadi Arabia' },
        { coords: [23.6, 54.9], name: 'UAE' },
        { coords: [63.9, 27.05], name: 'France' },
        { coords: [50.9, 10.05], name: 'Germany' },

        // { coords: [43.73, 7.41], name: 'Monaco' },
        // { coords: [-0.52, 166.93], name: 'Nauru' },
        // { coords: [-8.51, 179.21], name: 'Tuvalu' },
        // { coords: [43.93, 12.46], name: 'San Marino' },
        // { coords: [47.14, 9.52], name: 'Liechtenstein' },
        // { coords: [7.11, 171.06], name: 'Marshall Islands' },
        // { coords: [17.3, -62.73], name: 'Saint Kitts and Nevis' },
        // { coords: [3.2, 73.22], name: 'Maldives' },
        // { coords: [35.88, 14.5], name: 'Malta' },
        // { coords: [12.05, -61.75], name: 'Grenada' },
        // { coords: [13.16, -61.23], name: 'Saint Vincent and the Grenadines' },
        // { coords: [13.16, -59.55], name: 'Barbados' },
        // { coords: [17.11, -61.85], name: 'Antigua and Barbuda' },
        // { coords: [-4.61, 55.45], name: 'Seychelles' },
        // { coords: [7.35, 134.46], name: 'Palau' },
        // { coords: [42.5, 1.51], name: 'Andorra' },
        // { coords: [14.01, -60.98], name: 'Saint Lucia' },
        // { coords: [6.91, 158.18], name: 'Federated States of Micronesia' },
        // { coords: [1.3, 103.8], name: 'Singapore' },
        // { coords: [0.33, 6.73], name: 'SÃ£o TomÃ© and PrÃncipe' },
      ],
      markerStyle: {
        initial: {
          r: 9,
          fill: '#727cf5',
          'fill-opacity': 0.9,
          stroke: '#fff',
          'stroke-width': 7,
          'stroke-opacity': 0.4,
        },
        hover: {
          fill: '#727cf5',
          stroke: '#fff',
          'fill-opacity': 1,
          'stroke-width': 1.5,
        },
      },
    }

    this.canadaMapConfig = {
      zoomOnScroll: false,
      backgroundColor: 'transparent',
      regionStyle: {
        initial: {
          fill: '#0acf97',
        },
      },
    };

    this.russiaMapConfig = {
      zoomOnScroll: false,
      regionStyle: {
        initial: {
          fill: '#727cf5',
        },
      },
    };

    this.usaMapConfig = {
      zoomOnScroll: false,
      backgroundColor: 'transparent',
      regionStyle: {
        initial: {
          fill: '#39afd1',
        },
      },
    };

    this.spainMapConfig = {
      zoomOnScroll: false,
      backgroundColor: 'transparent',
      regionStyle: {
        initial: {
          fill: '#6c757d',
        },
      },
    };

    this.italyMapConfig = {
      zoomOnScroll: false,
      backgroundColor: 'transparent',
      regionStyle: {
        initial: {
          fill: '#fa5c7c',
        },
      },
    }

    this.iraqMapConfig = {
      zoomOnScroll: false,
      backgroundColor: 'transparent',
      regionStyle: {
        initial: {
          fill: '#ffbc00',
        },
      },
    }
  }

  initCountryList(): void {
    this.countryList = [
      {name:'India', flag:'assets/images/flags/india.png'},
      {name:'UAE', flag:'assets/images/flags/uae.png'},
      {name:'Qatar', flag:'assets/images/flags/qatar.png'},
      {name:'Saudi Arabia', flag:'assets/images/flags/saudi-arabia.png'},
      {name:'UK', flag:'assets/images/flags/uk.png'},
      {name:'Germany', flag:'assets/images/flags/germany.png'},
      {name:'France', flag:'assets/images/flags/france.png'},
      {name:'USA', flag:'assets/images/flags/usa.png'},
      {name:'Canada', flag:'assets/images/flags/canada.png'},
      {name:'Mexico', flag:'assets/images/flags/mexico.png'},
      {name:'Brazil', flag:'assets/images/flags/brazil.png'},
      {name:'Singapore', flag:'assets/images/flags/singapore.png'},
      {name:'Malaysia', flag:'assets/images/flags/malaysia.png'},
      {name:'Japan', flag:'assets/images/flags/japan.png'},
      {name:'Australia', flag:'assets/images/flags/australia.png'},
      {name:'South Korea', flag:'assets/images/flags/south-korea.png'},
      {name:'South Africa', flag:'assets/images/flags/south-africa.png'},
      {name:'Rwanda', flag:'assets/images/flags/rwanda.png'},
    ]
  }
}
