/*
     kambathalli parswanatha, Nagachandra
     Jadran Id: Jadrn023
     Project #4
     Fall 2017
*/
$(document).ready(function ()
{
    //$('#orderform').hide();
    var errorStatusHandle = $('#DispMes');

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

    elementHandle[13] = $('[name="address11"]');
    elementHandle[14] = $('[name="city1"]');
    elementHandle[15] = $('[name="state1"]');
    elementHandle[16] = $('[name="zip1"]');

    /*elementHandle[18] = $('[name="areacode1"]');
    elementHandle[19] = $('[name="phoneprefix1"]');
    elementHandle[20] = $('[name="phoneno1"]');*/
    elementHandle[21] = $('[name="AddressCheckBox"]');
    elementHandle[22] = $('[name="cardno"]');
    elementHandle[23] = $('[name="cvv"]');

    $(':reset').on('click', function () {
        for (var i = 0; i < 24; i++)
            elementHandle[i].removeClass("error");
        errorStatusHandle.html("");
        elementHandle[0].focus();

    });

    $(':submit').on('click', function (e)
        {

            if (!validate_Data())
            {
                e.preventDefault();
                return;
            }
            else
                {
                    $('#form').submit();
            }

    });


    function validate_Data() {

        var htel = $.trim($('[name="areacode"]').val()) +
            $.trim($('[name="prefix"]').val()) +
            $.trim($('[name="phone"]').val());

        if (isEmpty( elementHandle[0].val())) {
            elementHandle[0].addClass("error");
            errorStatusHandle.html("Please enter your First name");
            errorStatusHandle.show();
            elementHandle[0].focus();
            return false;
        }
        /*if (isEmpty(elementHandle[1].val())) {
            elementHandle[1].addClass("error");
            errorStatusHandle.text("Please enter your last name");
            elementHandle[1].focus();
            return false;
        }*/
        if (isEmpty(elementHandle[1].val())) {
            elementHandle[1].addClass("error");
            errorStatusHandle.html("Please enter your last name");
            errorStatusHandle.show();
            elementHandle[1].focus();
            return false;
        }
        if (isEmpty(elementHandle[2].val())) {
            elementHandle[2].addClass("error");
            errorStatusHandle.html("Please enter your address");
            errorStatusHandle.show();
            elementHandle[2].focus();
            return false;
        }

        if (isEmpty(elementHandle[3].val())) {
            elementHandle[3].addClass("error");
            errorStatusHandle.html("Please enter your city");
            errorStatusHandle.show();
            elementHandle[3].focus();
            return false;
        }

        if (isEmpty(elementHandle[4].val())) {
            elementHandle[4].addClass("error");
            errorStatusHandle.html("Please enter your state");
            errorStatusHandle.show();
            elementHandle[4].focus();
            return false;
        }

        if (!isValidState(elementHandle[4].val())) {
            elementHandle[4].addClass("error");
            errorStatusHandle.html("Please enter valid two letter state abbrevation of state in UpperCase");
            errorStatusHandle.show();
            elementHandle[4].focus();
            return false;
        }

        if (isEmpty(elementHandle[5].val())) {
            elementHandle[5].addClass("error");
            errorStatusHandle.html("Please enter your zip");
            errorStatusHandle.show();
            elementHandle[5].focus();
            return false;
        }

        if (!$.isNumeric(elementHandle[5].val())) {
            /*errorStatusHandle.text("Zip Code should be numeric value.");*/
            errorStatusHandle.html("Zip Code should be numeric value.");
            errorStatusHandle.show();
            elementHandle[5].focus();
            return false;
        }

        if (elementHandle[5].val().length != 5)
        {
            errorStatusHandle.html("Zip Code should be five digits.");
            errorStatusHandle.show();
            elementHandle[5].focus();
            return false;
        }


        if (isEmpty(elementHandle[6].val())) {
            elementHandle[6].addClass("error");
            errorStatusHandle.html("Please enter your areacode");
            errorStatusHandle.show();
            elementHandle[6].focus();
            return false;
        }

        if (!$.isNumeric(elementHandle[6].val())) {

            errorStatusHandle.html("area Code should be numeric value.");
            errorStatusHandle.show();
            elementHandle[6].focus();
            return false;
        }

        if (elementHandle[6].val().length != 3)
        {
            errorStatusHandle.html("area Code should be three digits.");
            errorStatusHandle.show();
            elementHandle[6].focus();
            return false;
        }

        if (isEmpty(elementHandle[7].val())) {
            elementHandle[7].addClass("error");
            errorStatusHandle.html("Please enter your phoneprefix");
            errorStatusHandle.show();
            elementHandle[7].focus();
            return false;
        }

        if (!$.isNumeric(elementHandle[7].val())) {

            errorStatusHandle.html("phoneprefix should be numeric value.");
            errorStatusHandle.show();
            elementHandle[7].focus();
            return false;
        }

        if (elementHandle[7].val().length != 3)
        {
            errorStatusHandle.html("phoneprefix should be three digits.");
            errorStatusHandle.show();
            elementHandle[7].focus();
            return false
        }
        if (isEmpty(elementHandle[8].val())) {
            elementHandle[8].addClass("error");
            errorStatusHandle.html("Please enter your phoneno");
            errorStatusHandle.show();
            elementHandle[8].focus();
            return false;
        }


        if (!$.isNumeric(elementHandle[8].val())) {

            errorStatusHandle.html("phoneno should be numeric value.");
            errorStatusHandle.show();
            elementHandle[8].focus();
            return false;
        }

        if (elementHandle[8].val().length != 4)
        {
            errorStatusHandle.html("phonepno should be three digits.");
            errorStatusHandle.show();
            elementHandle[8].focus();
            return false;
        }

        if (isEmpty(elementHandle[10].val())) {
            elementHandle[10].addClass("error");
            errorStatusHandle.html("Please enter Name on Card");
            errorStatusHandle.show();
            elementHandle[10].focus();
            return false;
        }
        if (isEmpty(elementHandle[22].val())) {
            elementHandle[22].addClass("error");
            errorStatusHandle.html("Please enter your card number");
            errorStatusHandle.show();
            elementHandle[22].focus();
            return false;
        }

        if (!$.isNumeric(elementHandle[22].val())) {

            errorStatusHandle.html("card number should contain digits only.");
            errorStatusHandle.show();
            elementHandle[22].focus();
            return false;
        }
        if(elementHandle[22].val().length != 16)
        {
            errorStatusHandle.html("card number appears to be invalid");
            errorStatusHandle.show();
            elementHandle[22].focus();
            return false;
        }

        if (isEmpty(elementHandle[11].val())) {
            elementHandle[11].addClass("error");
            errorStatusHandle.html("Please enter Month");
            errorStatusHandle.show();
            elementHandle[11].focus();
            return false;
        }

        if (isEmpty(elementHandle[12].val())) {
            elementHandle[12].addClass("error");
            errorStatusHandle.html("Please enter Year");
            errorStatusHandle.show();
            elementHandle[12].focus();
            return false;
        }

        if (isEmpty(elementHandle[23].val()))
        {
            elementHandle[23].addClass("error");
            errorStatusHandle.html("Please Enter CVV");
            errorStatusHandle.show();
            elementHandle[23].focus();
            return false;
        }

        if ((!$.isNumeric(elementHandle[23].val())) || ((elementHandle[23].val()).length < 3)) {
            elementHandle[23].addClass("error");
            errorStatusHandle.html("Invalid CVV, Enter a valid 3 digit CVV");
            errorStatusHandle.show();
            elementHandle[23].focus();
            return false;
        }

        if (isEmpty( elementHandle[13].val())) {
            elementHandle[13].addClass("error");
            errorStatusHandle.html("Please enter Billing address");
            errorStatusHandle.show();
            elementHandle[13].focus();
            return false;
        }
        if (isEmpty( elementHandle[14].val())) {
            elementHandle[14].addClass("error");
            errorStatusHandle.html("Please Enter City");
            errorStatusHandle.show();
            elementHandle[14].focus();
            return false;
        }
        if (isEmpty( elementHandle[14].val())) {
            elementHandle[14].addClass("error");
            errorStatusHandle.html("Please Enter City");
            errorStatusHandle.show();
            elementHandle[14].focus();
            return false;
        }
        if (isEmpty( elementHandle[15].val())) {
            elementHandle[15].addClass("error");
            errorStatusHandle.html("Please Enter State");
            errorStatusHandle.show();
            elementHandle[15].focus();
            return false;
        }
        if (!isValidState(elementHandle[15].val())) {
            elementHandle[15].addClass("error");
            errorStatusHandle.html("Please enter valid two letter state abbrevation of state in UpperCase");
            errorStatusHandle.show();
            elementHandle[15].focus();
            return false;
        }
        if (isEmpty( elementHandle[16].val())) {
            elementHandle[16].addClass("error");
            errorStatusHandle.html("Please Enter Zip");
            errorStatusHandle.show();
            elementHandle[16].focus();
            return false;
        }

        if (!$.isNumeric(elementHandle[16].val())) {
            /*errorStatusHandle.text("Zip Code should be numeric value.");*/
            errorStatusHandle.html("Zip Code should be numeric value.");
            errorStatusHandle.show();
            elementHandle[16].focus();
            return false;
        }

        if (elementHandle[16].val().length != 5)
        {
            errorStatusHandle.html("Zip Code should be five digits.");
            errorStatusHandle.show();
            elementHandle[16].focus();
            return false;
        }





        if (!IsValidDate())
        {
            return false;
        }
        errorStatusHandle.html("");
        return true;

    }


    $('[name="AddressCheckBox"]').click(function () {
        if ($('[name="AddressCheckBox"]').is(":checked")) {
            var value = elementHandle[2].val();
            elementHandle[13].val(value);
            value = $('[name="address1"]').val();
            $('[name="address11"]').val(value);
            value = elementHandle[3].val();
            elementHandle[14].val(value);
            value = elementHandle[4].val();
            elementHandle[15].val(value);
            value = elementHandle[5].val();
            elementHandle[16].val(value);
        }
        else {
            elementHandle[13].val("");
            elementHandle[14].val("");
            elementHandle[15].val("");
            elementHandle[16].val("");
        }
    });


    function isEmpty(fieldValue) {
        if ($.trim(fieldValue).length == 0)
            return true;
        return false;
    }
    function isValidState(state) {
        var value = $.trim(state).toUpperCase();
        var stateList = new Array("AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC",
            "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA",
            "MD", "ME", "MH", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ",
            "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX",
            "UT", "VA", "VT", "WA", "WI", "WV", "WY");
        for (var i = 0; i < stateList.length; i++)
            if (stateList[i] == value) {
                return true;
            }
        return false;
    }
    function IsValidDate() {
        var Month = $.trim($('[name="month"]').val());
        var Year = $.trim($('[name="year"]').val());
        if (Month < 1 || Month > 12)
        {
            elementHandle[11].addClass("error");
            errorStatusHandle.html("Month appears to be invalid");
            errorStatusHandle.show();
            $('[name="month"]').focus();
            return false;
        }
        if ((Year < 2017))
        {
            $('[name="year"]').addClass("error");
            errorStatusHandle.html("Please enter a future date")
            errorStatusHandle.show();
            $('[name="month"]').focus();
            return false;
        }

        return true;
    }



});
