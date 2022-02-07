import { Component } from '@angular/core';
import * as $ from 'jquery';
import { NgwWowService } from 'ngx-wow';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: any;

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }

  ngOnInit() {
    $(document).ready(function () {

    /*
      $('.btn-checked').click(function(){
        var check =$('input[type="checkbox"]:checked')
        console.log(check.val())
        var Trump = 'Trump';
        if(check.val() == Trump)
        {
          $('.d-flex').toggleClass('.d-none')
        }
      })
    */

      /****************LOADING******************* */
      $(window).on('load', function () {
        $('html').css({ overflow: 'auto' });
        $('.bg-sk').fadeOut();
      });
      $('.fa-align-justify').click(function () {
        $('.fa-align-justify').toggleClass('fa-align-left');
        if ($('.fa-align-justify').hasClass('fa-align-left')) {
          $('.div-collapse').animate({ right: '0' }, 400);
        } else {
          $('.div-collapse').animate({ right: '-400px' }, 400);
          if ($(window).width() > 992) {
            $('.nav-item').removeClass('hvr-sweep-to-bottom');
          }
        }
      });

      $(window).scroll(function () {
        if ($(window).scrollTop() >= 10) {
          $('.navbar').addClass('bg-e0e1dd');
        } else {
          $('.navbar').removeClass('bg-e0e1dd');
        }
      });
    });
  }
}
