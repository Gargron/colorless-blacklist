$(function () {
	var $names_box     = $('#names');
	var old_names_list = localStorage['names'];

	if (!!old_names_list) {
		try {
			old_names_list = JSON.parse(old_names_list);
		} catch (e) {
			old_names_list = [];
		}
	} else {
		old_names_list = [];
	}

	$names_box.val(old_names_list.join(' '));

	$names_box.on('blur', function () {
		var names_list = $names_box.val().split(' ');
		var i, len;

		localStorage['names'] = JSON.stringify(names_list);
	});
});