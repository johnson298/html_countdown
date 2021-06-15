$(function () {

    $('.set-count').click(function () {
        const timeCount = $(this).prev('input').val();
        if (timeCount) {
            const typeSet = $(this).data('set');
            const formatDate = moment(timeCount).format('MM/DD/yyyy hh:mm');
            $(`#${typeSet}`).attr('data-countdown', formatDate);
            $(`#${typeSet}`).countDown();
        }
    })

    $('[data-countdown]').each(function () {
        var $this = $(this), finalDate = $(this).data('countdown');
        console.log($this)
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime(`
        <ul class="cd-result">
          <li><span class="count-value">%D</span><span class="name">Ngày</span></li>
          <li><span class="count-value">%H</span><span class="name">Giờ</span></li>
          <li><span class="count-value">%M</span><span class="name">Phút</span></li>
          <li><span class="count-value">%S</span><span class="name">Giây</span></li>
        </ul>
        `));
        });
    });
});

jQuery(document).ready(function () {
    'use strict';
    jQuery('.filter-date').datetimepicker();
});