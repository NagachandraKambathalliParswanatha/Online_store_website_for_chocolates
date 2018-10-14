$(document).ready(function ()
{
    $('#orderform').hide();
    var errorStatus = $('#DispMes');

    var elementHandle = new Array();
    elementHandle[0] = $('[name="fname"]');
    elementHandle[1] = $('[name="lname"]');
    elementHandle[2] = $('[name="address1"]');
    elementHandle[3] = $('[name="city"]');
    elementHandle[4] = $('[name="state"]');
    elementHandle[5] = $('[name="zip"]');
    elementHandle[6] = $('[name="areacode"]');
    elementHandle[7] = $('[name="phoneprefix"]');
    elementHandle[8] = $('[name="phoneno"]');
    elementHandle[9] = $('[name="email"]');
    elementHandle[10] = $('[name="fname2"]');
    elementHandle[11] = $('[name="month"]');
    elementHandle[12] = $('[name="year"]');
    elementHandle[13] = $('[name="sameaddr"]');
    elementHandle[13] = $('[name="address11"]');
    elementHandle[14] = $('[name="city1"]');
    elementHandle[15] = $('[name="state1"]');
    elementHandle[16] = $('[name="zip1"]');
    elementHandle[17] = $('[name="city1"]');
    elementHandle[18] = $('[name="areacode1"]');
    elementHandle[19] = $('[name="phoneprefix"]');
    elementHandle[20] = $('[name="phoneno"]');
    elementHandle[21] = $('[name="AddressCheckBox"]');


    /*//elementHandle[6] = $('[name="areacode"]');*/
    var hpr = $('[name="phoneprefix"]');
    var hph = $('[name="phoneno"]');

    $('[name="month"]').on('keyup', function () {
        if ($('[name="month"]').val().length == 2)
            $('[name="cvv"]').focus();
    });


    elementHandle[6].on('keyup', function () {
        if (elementHandle[6].val().length == 3)
            hpr.focus();
    });

    hpr.on('keyup', function () {
        if (hpr.val().length == 3)
            hph.focus();
    });


    $('[name="AddressCheckBox"]').click(function () {
        if ($('[name="AddressCheckBox"]').is(":checked")) {
            var value = element[3].val();
            element[10].val(value);
            value = $('[name="s_address2"]').val();
            $('[name="b_address2"]').val(value);
            value = element[4].val();
            element[11].val(value);
            value = element[5].val();
            element[12].val(value);
            value = element[6].val();
            element[13].val(value);
        }
        else {
            element[10].val("");
            element[11].val("");
            element[12].val("");
            element[13].val("");
        }
    });

    $(':reset').on('click', function () {
        updateErrorStatus("", false);
        $('*').removeClass("error");
    });

    $(':submit').on('click', function (e) {
        $('*').removeClass("error");
        updateErrorStatus("", false);
        if (!validate_Data()) {
            e.preventDefault();
            return;
        }
        else {
            alert("success");
            $('#form2').submit();
        }
    });


    function validate_Data() {

        var htel = $.trim($('[name="areacode"]').val()) +
            $.trim($('[name="prefix"]').val()) +
            $.trim($('[name="phone"]').val());

        if (isEmpty( elementHandle[0].val())) {
            elementHandle[0].addClass("error");
            errorStatus.html("Please enter your First name");
            errorStatus.show();
            elementHandle[0].focus();
            return false;
        }
        /*if (isEmpty(elementHandle[1].val())) {
            elementHandle[1].addClass("error");
            errorStatusHandle.text("Please enter your last name");
            elementHandle[1].focus();
            return false;
        }*/
        if (isEmpty(element[1].val())) {
            element[1].addClass("error");
            updateErrorStatus("Please enter your Last name", true);
            element[1].focus();
            return false;
        }
        if (isEmpty(htel)) {
            elementHandle[6].addClass("error");
            hpr.addClass("error");
            hph.addClass("error");
            updateErrorStatus("Please enter Phone Number", true);
            elementHandle[6].focus();
            return false;
        }

        if (!isEmpty(htel)) {
            if (isEmpty(elementHandle[6].val())) {
                elementHandle[6].focus();
                updateErrorStatus("Please enter areacode of phone number", true);
                return false;
            }
            if (isEmpty(hpr.val())) {
                hpr.focus();
                updateErrorStatus("Please enter prefix of phone number", true);
                return false;
            }
            if (isEmpty(hph.val())) {
                hph.focus();
                updateErrorStatus("Please enter Phone extension", true);
                return false;
            }
        }
        if (!$.isNumeric(htel)) {
            if (!$.isNumeric(elementHandle[6].val())) {
                updateErrorStatus("Areacode has to be number", true);
                elementHandle[6].addClass("error");
                elementHandle[6].focus();
                return false;
            }
            if (!$.isNumeric(hpr.val())) {
                updateErrorStatus("Prefix has to be number", true);
                hpr.addClass("error");
                hpr.focus();
                return false;
            }
            if (!$.isNumeric(hph.val())) {
                updateErrorStatus("Extension has to be number", true);
                hph.addClass("error");
                hph.focus();
                return false;
            }
        }
        else if (validate_Tel(htel)) {
            if (elementHandle[6].val().length != 3) {
                updateErrorStatus("Areacode must have 3 digits", true);
                elementHandle[6].addClass("error");
                elementHandle[6].focus();
                return false;
            }
            if (hpr.val().length != 3) {
                updateErrorStatus("Prefix must have 3 digits", true);
                hpr.addClass("error");
                hpr.focus();
                return false;
            }
            if (hph.val().length != 4) {
                updateErrorStatus("The Phone number's, Phone field must have 4 digits", true);
                hph.addClass("error");
                hph.focus();
                return false;
            }
        }
        if (isEmpty(element[2].val())) {
            element[2].addClass("error");
            updateErrorStatus("Please enter your Email Id", true);
            element[2].focus();
            return false;
        }

        if (!validate_Email()) {
            element[2].addClass("error");
            updateErrorStatus("Please enter a valid Email Id", true);
            element[2].focus();
            return false;
        }

        if (isEmpty(element[3].val())) {
            element[3].addClass("error");
            updateErrorStatus("Please enter your Address", true);
            element[3].focus();
            return false;
        }

        if (isEmpty(element[4].val())) {
            element[4].addClass("error");
            updateErrorStatus("Please enter your City", true);
            element[4].focus();
            return false;
        }

        if (!validate_City(element[4].val())) {
            element[4].addClass("error");
            updateErrorStatus("Please enter a valid City name", true);
            element[4].focus();
            return false;
        }

        if (isEmpty(element[5].val())) {
            element[5].addClass("error");
            updateErrorStatus("Please enter your State", true);
            element[5].focus();
            return false;
        }

        if (!validate_State(element[5].val())) {
            element[5].addClass("error");
            updateErrorStatus("Please enter a valid 2 letter State Abbreviation", true);
            element[5].focus();
            return false;

        }

        if (isEmpty(element[6].val())) {
            element[6].addClass("error");
            updateErrorStatus("Please enter your Zip code", true);
            element[6].focus();
            return false;
        }

        if (!validate_Zip(element[6].val())) {
            element[6].addClass("error");
            updateErrorStatus("Please enter a valid 5 digit Zip code", true);
            element[6].focus();
            return false;
        }

        if (!validate_Ptype()) {
            updateErrorStatus("Please choose Payment type", true);
            $('[name="cardpayment"]').focus();
            return false;
        }

        if (isEmpty(element[7].val())) {
            element[7].addClass("error");
            updateErrorStatus("Please enter Name on Card", true);
            element[7].focus();
            return false;
        }

        if (isEmpty(element[8].val())) {
            element[8].addClass("error");
            updateErrorStatus("Please enter Card Number", true);
            element[8].focus();
            return false;
        }
        if (!$.isNumeric(element[8].val())) {
            element[8].addClass("error");
            updateErrorStatus("Invalid, digits only", true);
            element[8].focus();
            return false;
        }

        if (isEmpty($('[name="month"]').val())) {
            $('[name="month"]').addClass("error");
            updateErrorStatus("Please enter Month field in Expiration Date", true);
            $('[name="month"]').focus();
            return false;
        }
        else if (!$.isNumeric($('[name="month"]').val())) {
            $('[name="month"]').addClass("error");
            updateErrorStatus("Please enter digits only", true);
            $('[name="month"]').focus();
            return false;
        }

        if (isEmpty($('[name="year"]').val())) {
            $('[name="year"]').addClass("error");
            updateErrorStatus("Please enter year field in Expiration Date", true);
            $('[name="year"]').focus();
            return false;
        }
        else if (!$.isNumeric($('[name="year"]').val())) {
            $('[name="year"]').addClass("error");
            updateErrorStatus("Please enter numbers only", true);
            $('[name="year"]').focus();
            return false;
        }

        if (!validate_Date()) {
            return false;
        }

        if (isEmpty(element[9].val())) {
            element[9].addClass("error");
            updateErrorStatus("Please enter CVV Security code", true);
            element[9].focus();
            return false;
        }

        if ((!$.isNumeric(element[9].val())) || ((element[9].val()).length < 3)) {
            element[9].addClass("error");
            updateErrorStatus("Invalid CVV, Enter a valid 3 digit CVV", true);
            element[9].focus();
            return false;
        }
        if (isEmpty(element[10].val())) {
            element[10].addClass("error");
            updateErrorStatus("Please enter Address, in Billing Address Section", true);
            element[10].focus();
            return false;
        }

        if (isEmpty(element[11].val())) {
            element[11].addClass("error");
            updateErrorStatus("Please enter City, in Billing Address Section", true);
            element[11].focus();
            return false;
        }

        if (!validate_City(element[11].val())) {
            element[11].addClass("error");
            updateErrorStatus("Please enter a valid City name, in Billing Address Section", true);
            element[11].focus();
            return false;
        }

        if (isEmpty(element[12].val())) {
            element[12].addClass("error");
            updateErrorStatus("Please enter State, in Billing Address Section", true);
            element[12].focus();
            return false;
        }

        if (!validate_State(element[12].val())) {
            element[12].addClass("error");
            updateErrorStatus("Please enter a valid 2 letter State Abbreviation", true);
            element[12].focus();
            return false;
        }

        if (isEmpty(element[13].val())) {
            element[13].addClass("error");
            updateErrorStatus("Please enter Zip code in Billing Address Section", true);
            element[13].focus();
            return false;
        }

        if (!validate_Zip(element[13].val())) {
            element[13].addClass("error");
            updateErrorStatus("Please enter a valid 5 digit Zip code in Billing Address Section", true);
            element[13].focus();
            return false;
        }

        return true;
    }

});

function updateErrorStatus(s, show) {

    $('#DispMes').html(s);
    if (show) {
        $('#DispMes').show();
    }
    else {
        $('#DispMes').hide();
    }
};


function isEmpty(fieldValue) {
    if ($.trim(fieldValue).length == 0)
        return true;
    return false;
}

function validate_Tel(t) {
    var value = t.length;
    if (value == 10) {
        return false;
    }
    updateErrorStatus("", false);
    return true;
}

function validate_Ptype() {
    var radio = document.getElementsByName("cardpayment")
    var check = -1
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            check = i;
        }
    }
    if (check == -1) {
        return false;
    }
    updateErrorStatus("", false);
    return true;
}

function validate_Email() {
    var value = $.trim($('[name="email"]').val());
    var pattern = /\S+@\S+\.[a-zA-Z]{2,6}/;
    if (pattern.test(value)) {
        return true;
        updateErrorStatus("", false);
    }

    return false;
}

function validate_City(val) {
    var value = $.trim(val);
    var pattern = /^[a-zA-Z\- \.]+$/;
    if (pattern.test(value)) {
        updateErrorStatus("", false);
        return true;
    }
    return false;
}

function validate_State(state) {
    var value = $.trim(state).toUpperCase();
    var stateList = new Array("AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC",
        "DC2", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA",
        "MA", "MD", "ME", "MH", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH",
        "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN",
        "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY");
    for (var i = 0; i < stateList.length; i++)
        if (stateList[i] == value) {
            updateErrorStatus("", false);
            return true;
        }

    return false;
}

function validate_Zip(zip) {
    var value = $.trim(zip);
    var pattern = /^[0-9]{5}$/;
    if (pattern.test(value)) {
        updateErrorStatus("", false);
        return true;
    }
    return false;
}

function validate_Date() {
    var Month = $.trim($('[name="month"]').val());
    var Year = $.trim($('[name="year"]').val());
    if (Month < 1 || Month > 12) {
        $('[name="month"]').addClass("error");
        updateErrorStatus("Invalid month, Enter between 1 and 12", true);
        $('[name="month"]').focus();
        return false;
    }
    if (Year < 2014) {
        $('[name="year"]').addClass("error");
        updateErrorStatus("Please Check the Year field of Valid through Period of Card", true);
        $('[name="month"]').focus();
        return false;
    }
    if (Year == 2014) {
        if (Month != 12) {
            $('[name="year"]').addClass("error");
            updateErrorStatus("Please Check Card Validity Period Field", true);
            $('[name="month"]').focus();
            return false;
        }
    }
    updateErrorStatus("", false);
    return true;
}

