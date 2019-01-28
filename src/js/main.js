
$('.inventory-qty-btn').on('click', function(e) {
	e.preventDefault();
	
	var elem = $(this);
	var qtyInput = elem.siblings('.inventory-qty-input');
	var qty = parseInt(qtyInput.val());
	
	if(elem.hasClass('qty-up')) {
		if(qty < 99) { 
			qty += 1;
		}
	} else {
		if(qty > 0) { 
			qty -= 1;
		}
	}
	
	qtyInput.val(qty);
});

$('.numpad-grid .num-btn').on('click', function(e) {
	e.preventDefault();
	
	var elem = $(this);
	var inputVal = elem.data('num-value');
	console.log(inputVal);
	
	var passwordForm = $('form#calibration-password-form');
	var passwordField = $('#calibration-password-form .hidden-password-field');
	
	var inputGrid = $(passwordForm).children('.input-grid');
	var currentValue = passwordField.val();
	
	var currentValueArray = currentValue.split('');
	
	if(inputVal == 'delete') {
		currentValueArray.pop();
	} else {
		
		if(currentValue.length >= 5) {
			return;
		}
		currentValueArray.push(inputVal);
	}
	currentValue = currentValueArray.join('');  
	passwordField.val(currentValue);
	
	
	
	$('.input-grid .form-control').val('');
	
	var i = 1;
	currentValueArray.forEach(function(element) {
		$('form#calibration-password-form .input-showcase-' + i).val(element);
		i++;
	});
	
	currentValueArray
	
	return;
});

function wait(time=10) {
	var waitHtml = '<div id="wait-screen"><div class="wrapper"><div class="spinner-box"><div class="spinner-group"><span class="fa fa-spinner fa-spin load-anim"></span><span class="time">' + time + '</span></div><div class="text">This may take upto <span class="time">' + time + '</span> seconds</div></div></div></div>';
	
	$('body').append(waitHtml);
	
	setTimeout(function() {
		$('body').addClass('waiting');
	}, 1000);
	
	
	var timeCopy = (time - 1);
	var waitTimer = setInterval(function() {
		if(timeCopy > 0) {
			$('#wait-screen .spinner-group .time').html(timeCopy);
		} else {
			$('#wait-screen .spinner-group .time').html('');
			$('#wait-screen .text').html('This may take a few more seconds');
			clearInterval(waitTimer);
		}
		
		timeCopy--;
	}, 1000);
};

function waitStop() {
	$('body').removeClass('waiting');
	setTimeout(function() {
		$('#wait-screen').remove();
	}, 500);
};



function wait(time=5) {
	var waitHtml = '<div id="thank-you-screen"><div class="wrapper"><div class="spinner-box"><div class="spinner-group"><span class="fa fa-spinner fa-spin load-anim"></span><span class="time">' + time + '</span></div><div class="text">This screen will close in <span class="time">' + time + '</span> seconds</div></div></div></div>';
	
	$('body').append(waitHtml);
	
	setTimeout(function() {
		$('body').addClass('thank-you');
	}, 1000);
	
	
	var timeCopy = (time - 1);
	var waitTimer = setInterval(function() {
		if(timeCopy > 0) {
			$('#thank-you-screen .spinner-group .time').html(timeCopy);
		} else {
			$('#thank-you-screen .spinner-group .time').html('');
			$('#thank-you-screen .text').html('This may take a few more seconds');
			clearInterval(waitTimer);
		}
		
		timeCopy--;
	}, 1000);
};

function waitStop() {
	$('body').removeClass('thank-you');
	setTimeout(function() {
		$('#thank-you-screen').remove();
	}, 500);
};

$('#basketSelector .dropdown-menu li a').on('click', function(e) {
	e.preventDefault();
	
	var elem = $(this);
	var id = elem.attr('href');
	var basketNum = id.split('-');
	basketNum = basketNum[1];
	
	$('#basketSelectorBtn').html('Basket ' + basketNum + " <span class='caret'></span>");
	$('#basketSelector .dropdown-menu li').removeClass('active');
	
	$('a[href="' + id + '"]').tab('show');
});
