import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  twittes:object=
  [{
    "_id": {
      "$oid": "60d511071f2ad96b5c3832c8"
    },
    "state": "AL",
    "trump_score": 0.13511174768209,
    "biden_score": 0.2970258295536041
  },{
    "_id": {
      "$oid": "60d511081f2ad96b5c3832c9"
    },
    "state": "AK",
    "trump_score": 0.33597366437315941,
    "biden_score": 0.9682348966598511
  },{
    "_id": {
      "$oid": "60d511091f2ad96b5c3832ca"
    },
    "state": "AS",
    "trump_score": 0.879294753074646,
    "biden_score": 0.335111747682094574
  },{
    "_id": {
      "$oid": "60d5110a1f2ad96b5c3832cc"
    },
    "state": "AZ",
    "trump_score": 0.015111747682094574,
    "biden_score": 0.035111747682094574
  },{
    "_id": {
      "$oid": "60d5110a1f2ad96b5c3832cf"
    },
    "state": "AR",
    "trump_score": 0.03597366437315941,
    "biden_score": 0.9682348966598511
  },{
    "_id": {
      "$oid": "60d5110b1f2ad96b5c3832d2"
    },
    "state": "CA",
    "trump_score": 0.8308828473091125,
    "biden_score": 0.879294753074646
  },{
    "_id": {
      "$oid": "60d5110c1f2ad96b5c3832d5"
    },
    "state": "CO",
    "trump_score": 0.384535014629364,
    "biden_score": 0.19889897108078003
  },{
    "_id": {
      "$oid": "60d5110d1f2ad96b5c3832d7"
    },
    "state": "CT",
    "trump_score": 0.07549077272415161,
    "biden_score": 0
  },{
    "_id": {
      "$oid": "60d5110e1f2ad96b5c3832da"
    },
    "state": "DE",
    "trump_score": 0.2382146269083023,
    "biden_score": 0.5481942296028137
  },{
    "_id": {
      "$oid": "60d5110f1f2ad96b5c3832dd"
    },
    "state": "DC",
    "trump_score": 0.009071379899978638,
    "biden_score": 0.009071379899978638
  },{
    "_id": {
      "$oid": "60d5110f1f2ad96b5c3832de"
    },
    "state": "FM",
    "trump_score": 0.015111747682094574,
    "biden_score": 0.035111747682094574
  },{
    "_id": {
      "$oid": "60d511101f2ad96b5c3832e1"
    },
    "state": "FL",
    "trump_score": 0.05641249194741249,
    "biden_score": 0.030306890606880188
  },{
    "_id": {
      "$oid": "60d511111f2ad96b5c3832e4"
    },
    "state": "GA",
    "trump_score": 0.7349754571914673,
    "biden_score": 0.11826349794864655
  },{
    "_id": {
      "$oid": "60d511121f2ad96b5c3832e5"
    },
    "state": "GU",
    "trump_score": 0.06546016782522202,
    "biden_score": 0.055557847023010254
  },{
    "_id": {
      "$oid": "60d511131f2ad96b5c3832e6"
    },
    "state": "HI",
    "trump_score": 0.384535014629364,
    "biden_score": 0.19889897108078003
  },{
    "_id": {
      "$oid": "60d511141f2ad96b5c3832e9"
    },
    "state": "ID",
    "trump_score": 0.1289483606815338,
    "biden_score": 0.030083101242780685
  },{
    "_id": {
      "$oid": "60d511141f2ad96b5c3832ec"
    },
    "state": "IL",
    "trump_score": 0.567445695400238,
    "biden_score": 0.08711019158363342
  },{
    "_id": {
      "$oid": "60d511151f2ad96b5c3832ee"
    },
    "state": "IN",
    "trump_score": 0.18824516236782074,
    "biden_score": 0
  },{
    "_id": {
      "$oid": "60d511161f2ad96b5c3832f1"
    },
    "state": "IA",
    "trump_score": 0.16087470948696136,
    "biden_score": 0.9268646240234375
  },{
    "_id": {
      "$oid": "60d511171f2ad96b5c3832f4"
    },
    "state": "KS",
    "trump_score": 0.1874948889017105,
    "biden_score": 0.13241367042064667
  },{
    "_id": {
      "$oid": "60d511181f2ad96b5c3832f7"
    },
    "state": "KY",
    "trump_score": 0.01379469595849514,
    "biden_score": 0.043905917555093765
  },{
    "_id": {
      "$oid": "60d511191f2ad96b5c3832f9"
    },
    "state": "LA",
    "trump_score": 0.2970258295536041,
    "biden_score": 0
  },{
    "_id": {
      "$oid": "60d5111a1f2ad96b5c3832fc"
    },
    "state": "ME",
    "trump_score": 0.06546016782522202,
    "biden_score": 0.055557847023010254
  },{
    "_id": {
      "$oid": "60d5111a1f2ad96b5c3832fd"
    },
    "state": "MH",
    "trump_score": 0,
    "biden_score": 0
  },{
    "_id": {
      "$oid": "60d5111b1f2ad96b5c383300"
    },
    "state": "MD",
    "trump_score": 0.009071379899978638,
    "biden_score": 0.009071379899978638
  },{
    "_id": {
      "$oid": "60d5111c1f2ad96b5c383303"
    },
    "state": "MA",
    "trump_score": 0.057604577392339706,
    "biden_score": 0.006453508511185646
  },{
    "_id": {
      "$oid": "60d5111d1f2ad96b5c383306"
    },
    "state": "MI",
    "trump_score": 0.028256164863705635,
    "biden_score": 0.25289610028266907
  },{
    "_id": {
      "$oid": "60d5111e1f2ad96b5c383309"
    },
    "state": "MN",
    "trump_score": 0.052363310009241104,
    "biden_score": 0.002951226430013776
  },{
    "_id": {
      "$oid": "60d5111f1f2ad96b5c38330c"
    },
    "state": "MS",
    "trump_score": 0.604019820690155,
    "biden_score": 0.604019820690155
  },{
    "_id": {
      "$oid": "60d511201f2ad96b5c38330f"
    },
    "state": "MO",
    "trump_score": 0.11840970814228058,
    "biden_score": 0.2970258295536041
  },{
    "_id": {
      "$oid": "60d511211f2ad96b5c383310"
    },
    "state": "MT",
    "trump_score": 0,
    "biden_score": 0
  },{
    "_id": {
      "$oid": "60d511221f2ad96b5c383312"
    },
    "state": "NE",
    "trump_score": 0.5026509761810303,
    "biden_score": 0
  },{
    "_id": {
      "$oid": "60d511231f2ad96b5c383314"
    },
    "state": "NV",
    "trump_score": 0,
    "biden_score": 0.13172881305217743
  },{
    "_id": {
      "$oid": "60d511241f2ad96b5c383316"
    },
    "state": "NH",
    "trump_score": 0,
    "biden_score": 0.37120237946510315
  },{
    "_id": {
      "$oid": "60d511251f2ad96b5c383319"
    },
    "state": "NJ",
    "trump_score": 0.02189556322991848,
    "biden_score": 0.0023937399964779615
  },{
    "_id": {
      "$oid": "60d511261f2ad96b5c38331c"
    },
    "state": "NM",
    "trump_score": 0.9262213706970215,
    "biden_score": 0.08250599354505539
  },{
    "_id": {
      "$oid": "60d511271f2ad96b5c38331f"
    },
    "state": "NY",
    "trump_score": 0.020426001399755478,
    "biden_score": 0.2970258295536041
  },{
    "_id": {
      "$oid": "60d511271f2ad96b5c383321"
    },
    "state": "NC",
    "trump_score": 0,
    "biden_score": 0.0315672904253006
  },{
    "_id": {
      "$oid": "60d511281f2ad96b5c383324"
    },
    "state": "ND",
    "trump_score": 0.017403619363904,
    "biden_score": 0.018237976357340813
  },{
    "_id": {
      "$oid": "60d511291f2ad96b5c383325"
    },
    "state": "MP",
    "trump_score": 0,
    "biden_score": 0
  },{
    "_id": {
      "$oid": "60d5112a1f2ad96b5c383328"
    },
    "state": "OH",
    "trump_score": 0.1191953495144844,
    "biden_score": 0.2970258295536041
  },{
    "_id": {
      "$oid": "60d5112b1f2ad96b5c38332a"
    },
    "state": "OK",
    "trump_score": 0,
    "biden_score": 0.2970258295536041
  },{
    "_id": {
      "$oid": "60d5112c1f2ad96b5c38332d"
    },
    "state": "OR",
    "trump_score": 0.5157374143600464,
    "biden_score": 0.05870714783668518
  },{
    "_id": {
      "$oid": "60d5112c1f2ad96b5c38332e"
    },
    "state": "PW",
    "trump_score": 0,
    "biden_score": 0
  },{
    "_id": {
      "$oid": "60d5112e1f2ad96b5c383331"
    },
    "state": "PA",
    "trump_score": 0.6393922567367554,
    "biden_score": 0.011506723240017891
  },{
    "_id": {
      "$oid": "60d5112e1f2ad96b5c383333"
    },
    "state": "PR",
    "trump_score": 0,
    "biden_score": 0.2970258295536041
  },{
    "_id": {
      "$oid": "60d5112f1f2ad96b5c383336"
    },
    "state": "RI",
    "trump_score": 0.07549077272415161,
    "biden_score": 0.006453508511185646
  },{
    "_id": {
      "$oid": "60d511301f2ad96b5c383339"
    },
    "state": "SC",
    "trump_score": 0.0772002711892128,
    "biden_score": 0.009357445873320103
  },{
    "_id": {
      "$oid": "60d511311f2ad96b5c38333b"
    },
    "state": "SD",
    "trump_score": 0.3029303550720215,
    "biden_score": 0
  },{
    "_id": {
      "$oid": "60d511321f2ad96b5c38333d"
    },
    "state": "TN",
    "trump_score": 0,
    "biden_score": 0.15337491035461426
  },{
    "_id": {
      "$oid": "60d511341f2ad96b5c383340"
    },
    "state": "TX",
    "trump_score": 0.9903150200843811,
    "biden_score": 0.06321850419044495
  },{
    "_id": {
      "$oid": "60d511351f2ad96b5c383343"
    },
    "state": "UT",
    "trump_score": 0.153488427400589,
    "biden_score": 0.14649948477745056
  },{
    "_id": {
      "$oid": "60d511361f2ad96b5c383346"
    },
    "state": "VT",
    "trump_score": 0.2970258295536041,
    "biden_score": 0.41676220297813416
  },{
    "_id": {
      "$oid": "60d511361f2ad96b5c383348"
    },
    "state": "VI",
    "trump_score": 0,
    "biden_score": 0.11438360065221786
  },{
    "_id": {
      "$oid": "60d511371f2ad96b5c38334b"
    },
    "state": "VA",
    "trump_score": 0.06434259563684464,
    "biden_score": 0.15597301721572876
  },{
    "_id": {
      "$oid": "60d511381f2ad96b5c38334d"
    },
    "state": "WA",
    "trump_score": 0,
    "biden_score": 0.010292754508554935
  },{
    "_id": {
      "$oid": "60d511391f2ad96b5c38334f"
    },
    "state": "WV",
    "trump_score": 0.005915309768170118,
    "biden_score": 0
  },{
    "_id": {
      "$oid": "60d5113a1f2ad96b5c383351"
    },
    "state": "WI",
    "trump_score": 0.16126607358455658,
    "biden_score": 0
  },{
    "_id": {
      "$oid": "60d5113b1f2ad96b5c383352"
    },
    "state": "WY",
    "trump_score": 0,
    "biden_score": 0
  }]



  ngOnInit(){

    $(window).scroll(function () {
      if ($(window).scrollTop() >= 1000) {
        $('.button-up').fadeIn(500);
      } else {
        $('.button-up').fadeOut(300);
      }
    });
    $('.button-up').click(function () {
      $('body , html').animate({ scrollTop: 0 }, 1000);
    });

  }

}
