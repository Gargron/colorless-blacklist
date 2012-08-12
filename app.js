$(function () {
  'use strict';

  /**
   * See background.js. We send the background script a message,
   * asking for a value from the settings storage. That's where
   * we get the names to check against from
   */

  chrome.extension.sendMessage({method: "getLocalStorage", key: "names"}, function (response) {
    var blacklisted_names = response.data;

    if (!!blacklisted_names) {
      try {
        blacklisted_names = JSON.parse(blacklisted_names);
      } catch (e) {
        blacklisted_names = [];
      }
    } else {
      blacklisted_names = [];
    }

    $.each($('.post .content header strong a'), function (i, el) {
      var $el = $(el);
      var i, len;

      for (i = 0, len = blacklisted_names.length; i < len; i += 1) {
        if ($el.text() === blacklisted_names[i]) {
          $el.parent().parent().parent().find('.formatted').html('<p>Whoop dee doop</p>');
        }
      }
    });
  });
});