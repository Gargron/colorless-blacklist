$(function () {
	'use strict';

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
				console.log(blacklisted_names[i]);

				if ($el.text() === blacklisted_names[i]) {
					$el.parent().parent().parent().find('.formatted').html('<p>Whoop dee doop</p>');
				}
			}
		});
	});
});