import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {

    $('.chapter').click(function () {
      $(this).parent().next().slideToggle();
      $(this).children().toggleClass('rotate90deg');
    });
    $('.LI').click(function () {
      $(this).addClass('active').siblings().removeClass('active');
    });
    $('.li').click(function () {
      $(this).addClass('activee').siblings().removeClass('activee');
    });
    /*************toggle DOC***************/

    $('.fa-arrow-down').click(function () {
      $('.fa-arrow-down ').toggleClass('rotate180deg');
      $('.slidebar').slideToggle(500);
    });
    /**************"button-up********************/
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

  inView(ele: any) {
    ele.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }
}