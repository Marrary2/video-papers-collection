//$(document).ready(function () {
//alert('adsf');
//	$('#TopPDF').click(function () {
//		$('#signinDialog').dialog({
//			closeText: "X Close",
//			width: 735,
//			height: 250
//		});
//		$('#signinDialog').parent().appendTo($('#Form1'));

//	});

/* Items specific to Toolbox. Toolbox user control [WidgetArticleToolbox] takes authentication & authorization into account in launching the SignIn dialog*/
//#printTool,
//#alertTool,
//#aSlideSet,
//#toolComment,
//#lnkEMailAlerts,
//#hlPDFlink,
var displaySignInDialog = function (mode) {
    if (mode == "MustSignInOrBuyThisArticle") {
        $('#globalSignIn11_PurchaseSubscription').show()
        $('#globalSignIn11_PersonalAccountRegistration').hide()
    }
    if (mode == "MustSignInOrRegisterForFreeAccount") {
        $('#globalSignIn11_PurchaseSubscription').hide()
        $('#globalSignIn11_PersonalAccountRegistration').show()
    }
    $signInDialog.parent().appendTo($('#Form1'));
    $signInDialog.dialog('open');
}


$(window).load(function () {
    var signInDialogWidth = ($('body').hasClass('article')) ? '1000' : '1000';
    var signInDialogHeight = ($('body').hasClass('article')) ? '260' : '350';
    $signInDialog = $('#signinDialog').dialog({
        closeText: "X Close",
        width: "650",
        height: "auto",
        autoOpen: false,
        close: function (event, ui) {
            $signInDialog.find('.errorMessageSection .validationControl').html('');
            $signInDialog.find('.field input').val('');
        },
        modal: true,
        overlay: { opacity: 0.7, background: 'gray' }
    });



    //	function displaySignInDialog(mode) {

    //		if (mode == "MustSignInOrBuyThisArticle") {
    //			$('#globalSignIn11_PurchaseSubscription').show()
    //			$('#globalSignIn11_PersonalAccountRegistration').hide()
    //		}

    //		if (mode == "MustSignInOrRegisterForFreeAccount") {
    //			$('#globalSignIn11_PurchaseSubscription').hide()
    //			$('#globalSignIn11_PersonalAccountRegistration').show()
    //		}

    //		$('#signinDialog').dialog({
    //			closeText: "X Close",
    //			width: 1000,
    //			height: 250
    //		});
    //		$('#signinDialog').parent().appendTo($('#Form1'));
    //	}

    /*===============================================================================================*/
    /* Footer Email Alerts Link*/
    $('.footerEmailAlerts').click(function (e) {
        e.preventDefault();
        // Either an Anonymous or Institutional Anonymous user.
        // Launch the Sign IN dialog.

        var personalUserLoggedIn;
        personalUserLoggedIn = ($("#hfFooterPersonalUserIsLoggedIn").val() == "1") ? true : false;

        if (personalUserLoggedIn) {
            // Individual User is logged in.
            // redirect user to MyAlerts page in the same window.
            //window.location = "../account/myalerts.aspx";
        }
        else {
            // Either an Anonymous or Institutional Anonymous user.
            // Launch the Sign IN dialog.
            var mode = "MustSignInOrRegisterForFreeAccount";
            $('#lnkEMailAlerts').attr("href", "");
            displaySignInDialog(mode);
        }
    });

    /*
    This is causing multiple redirects to MyAlerts page!Ask Rick for help!

    var personalUserLoggedIn;
    personalUserLoggedIn = ($("#hfFooterPersonalUserIsLoggedIn").val() == "1") ? true : false;
    if (personalUserLoggedIn) {
    // Individual User is logged in.
    // redirect user to MyAlerts page in the same window.
    window.location = "../account/myalerts.aspx";
    }
    else {
    // Either an Anonymous or Institutional Anonymous user.
    // Launch the Sign IN dialog.
    $('.footerEmailAlerts').click(function () {
    // Either an Anonymous or Institutional Anonymous user.
    // Launch the Sign IN dialog.
    var mode = "MustSignInOrRegisterForFreeAccount";
    displaySignInDialog(mode);
    });
    }
    */
    /*===============================================================================================*/
});