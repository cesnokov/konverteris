//cesnokov.lt

var ilgiausias_skaicius = 20;
var ilgiausia_trupmena = 10;
var rezultatu_langas = $("#rezultatu_langas_id");
var baze_is = $("#baze_is_id");
var baze_i = $("#baze_i_id");
var ivediomo_langas = $("#ivediomo_langas_id");
var migtukas_konvertuoti = $("#migtukas_konvertuoti_id");
var m01 = $("#1_id");
var m02 = $("#2_id");
var m03 = $("#3_id");
var m04 = $("#4_id");
var m05 = $("#5_id");
var m06 = $("#6_id");
var m07 = $("#7_id");
var m08 = $("#8_id");
var m09 = $("#9_id");
var m00 = $("#0_id");
var m00a = $("#00_id");
var m00b = $("#000_id");
var skaicius = $(".skaicius");
var mdot = $("#taskas_id");
var mpm = $("#pm_id"); //migtukas plius-minus
var mcls = $("#isvalyti_id");
var m0a = $("#a_id");
var m0b = $("#b_id");
var m0c = $("#c_id");
var m0d = $("#d_id");
var m0e = $("#e_id");
var m0f = $("#f_id");
var raide = $(".raide");

$(document).ready(function(){
	var remelis_on_load = (((($("#ekranas").height() - $("#konverteris").height()) / 2) - 20) + "px");
	$("#konverteris").css("margin-top", remelis_on_load);
	$(".btn-inverse").attr("disabled", "disabled");
	$(migtukas_konvertuoti).attr("disabled", "disabled");
	$(baze_is).val("none");
	$(baze_i).val("none");
	$(ivediomo_langas).val("");
});

$(baze_is).change(function() {
	$(".btn-inverse").attr("disabled", "disabled");
	$(ivediomo_langas).val("");
	$(rezultatu_langas).html("0");
	var baze = $(this).attr("value");
	if (baze == "2") {
		
		$(m00).removeAttr("disabled", "disabled");
		$(m00a).removeAttr("disabled", "disabled");
		$(m00b).removeAttr("disabled", "disabled");		
		$(m01).removeAttr("disabled", "disabled");
		$(mdot).removeAttr("disabled", "disabled");
		$(mpm).removeAttr("disabled", "disabled");
		
	} else if (baze == "8") {
		
		$(m00).removeAttr("disabled", "disabled");
		$(m00a).removeAttr("disabled", "disabled");
		$(m00b).removeAttr("disabled", "disabled");		
		$(m01).removeAttr("disabled", "disabled");
		$(m02).removeAttr("disabled", "disabled");
		$(m03).removeAttr("disabled", "disabled");
		$(m04).removeAttr("disabled", "disabled");
		$(m05).removeAttr("disabled", "disabled");
		$(m06).removeAttr("disabled", "disabled");
		$(m07).removeAttr("disabled", "disabled");
		$(mdot).removeAttr("disabled", "disabled");
		$(mpm).removeAttr("disabled", "disabled");
		
	} else if (baze == "10") {
		
		$(m00).removeAttr("disabled", "disabled");
		$(m00a).removeAttr("disabled", "disabled");
		$(m00b).removeAttr("disabled", "disabled");		
		$(m01).removeAttr("disabled", "disabled");
		$(m02).removeAttr("disabled", "disabled");
		$(m03).removeAttr("disabled", "disabled");
		$(m04).removeAttr("disabled", "disabled");
		$(m05).removeAttr("disabled", "disabled");
		$(m06).removeAttr("disabled", "disabled");
		$(m07).removeAttr("disabled", "disabled");
		$(m08).removeAttr("disabled", "disabled");
		$(m09).removeAttr("disabled", "disabled");
		$(mdot).removeAttr("disabled", "disabled");
		$(mpm).removeAttr("disabled", "disabled");
				
	} else if (baze == "16") {
		
		$(m00).removeAttr("disabled", "disabled");
		$(m00a).removeAttr("disabled", "disabled");
		$(m00b).removeAttr("disabled", "disabled");		
		$(m01).removeAttr("disabled", "disabled");
		$(m02).removeAttr("disabled", "disabled");
		$(m03).removeAttr("disabled", "disabled");
		$(m04).removeAttr("disabled", "disabled");
		$(m05).removeAttr("disabled", "disabled");
		$(m06).removeAttr("disabled", "disabled");
		$(m07).removeAttr("disabled", "disabled");
		$(m08).removeAttr("disabled", "disabled");
		$(m09).removeAttr("disabled", "disabled");
		$(m0a).removeAttr("disabled", "disabled");
		$(m0b).removeAttr("disabled", "disabled");
		$(m0c).removeAttr("disabled", "disabled");
		$(m0d).removeAttr("disabled", "disabled");
		$(m0e).removeAttr("disabled", "disabled");
		$(m0f).removeAttr("disabled", "disabled");
		$(mdot).removeAttr("disabled", "disabled");
		$(mpm).removeAttr("disabled", "disabled");
		
	} else {
		
		$(".btn-inverse").attr("disabled", "disabled");
	}
});

$(baze_i).change(function() {
	$(migtukas_konvertuoti).attr("disabled", "disabled");
	var baze = $(this).attr("value");
	if (baze == "2") {
		$(migtukas_konvertuoti).removeAttr("disabled", "disabled");
	} else if (baze == "8") {
		$(migtukas_konvertuoti).removeAttr("disabled", "disabled");
	} else if (baze == "10") {
		$(migtukas_konvertuoti).removeAttr("disabled", "disabled");
	} else if (baze == "16") {
		$(migtukas_konvertuoti).removeAttr("disabled", "disabled");
	} else {
		$(migtukas_konvertuoti).attr("disabled", "disabled");
	}
});

$(window).resize(function(){
	var auk1 = $("#ekranas").height();
	var auk2 = $("#konverteris").height();
	var remelis_on_resize = ((((auk1 - auk2) / 2) - 20) + "px");
	$("#konverteris").css("margin-top", remelis_on_resize);
});



$(skaicius).click(function () {
	if (ivediomo_langas.val().length > ilgiausias_skaicius) { return; }
	var migtuko_reiksme = $(this).attr("value");
	var text = ivediomo_langas.val();
	if (text == "0") {
		$(ivediomo_langas).val(migtuko_reiksme);
	} else {
		$(ivediomo_langas).val(text + migtuko_reiksme);
	}
	//apsauga nuo nuliu
	if (ivediomo_langas.val() == "00") { $(ivediomo_langas).val("0"); }
	if (ivediomo_langas.val() == "000") { $(ivediomo_langas).val("0"); }
});

$(raide).click(function () {
	if (ivediomo_langas.val().length > ilgiausias_skaicius) { return; }
	var migtuko_reiksme = $(this).attr("value");
	var text = ivediomo_langas.val();
	if (text == "0") {
		$(ivediomo_langas).val(migtuko_reiksme);
	} else {
		$(ivediomo_langas).val(text + migtuko_reiksme);
	}
});

$(mdot).click(function () {
	if (ivediomo_langas.val().length > ilgiausias_skaicius) { return; }
		
	//atskirai su HEX
	var base_from = parseFloat($(baze_is).attr("value"));
	if (base_from == 16) {
		var arr_temp4 = ivediomo_langas.val().split(".");
		if (arr_temp4[0] == "") {
			$(ivediomo_langas).val("0.");
			$(mdot).attr("disabled", "disabled");
		} else {
			var text = ivediomo_langas.val();
			$(ivediomo_langas).val(text + ".");
			$(mdot).attr("disabled", "disabled");
		}
		return;
	}
		
	//kitoms sistemoms kur nera raidziu
	var pradinis_skaicius = parseFloat(ivediomo_langas.val());
	if (isNaN(pradinis_skaicius)) {
		$(ivediomo_langas).val("0.");
		$(mdot).attr("disabled", "disabled"); 
	} else {
		var text = ivediomo_langas.val();
		$(ivediomo_langas).val(text + ".");
		$(mdot).attr("disabled", "disabled");
	}
});

$(mpm).click(function () {
	var text = ivediomo_langas.val();
	var zenklas = text.indexOf("-");
	if (zenklas > -1) { 
		$(ivediomo_langas).val(text.replace("-", ""));
	} else { 
		$(ivediomo_langas).val("-" + text);
	}
});

$(mcls).click(function () {
	$(ivediomo_langas).val("");
	$(rezultatu_langas).html("0");
	var tikrinam_baze = $(baze_is).attr("value");
	if (tikrinam_baze == "2" || tikrinam_baze == "8" || tikrinam_baze == "10" || tikrinam_baze == "16") {
		$(mdot).removeAttr("disabled", "disabled");
	} else {
		$(mdot).attr("disabled", "disabled");
	}
});

$(migtukas_konvertuoti).click(function () {
	var base_from = parseFloat($(baze_is).attr("value"));
  	var base_to = parseFloat($(baze_i).attr("value"));
	
	if (base_from == 16) {
		var text = ivediomo_langas.val();
		var zenklas = text.indexOf("-");
		if (zenklas > -1) { 
			var text_temp1 = ivediomo_langas.val();
			$(ivediomo_langas).val(text_temp1.replace("-", ""));
			var text_temp2 = ivediomo_langas.val();
			$(ivediomo_langas).val("-0x" + text_temp2);
		} else { 
			var text_temp3 = ivediomo_langas.val();
			$(ivediomo_langas).val("0x" + text_temp3);
		}
	}
	
	var pradinis_skaicius = parseInt(ivediomo_langas.val());
	if (isNaN(pradinis_skaicius)) { $(rezultatu_langas).html("Įveskite skaičių!"); return; }
		
	//reikia padalynti skaiciu i dvi dalys... jei yra taskas
	var pradinis_skaicius_arr = ivediomo_langas.val().split(".");
	var pradinis_skaicius_trupm_arr = pradinis_skaicius_arr[1];
	//sveikaja dali konvertuojam is pradines sistemos i desimtaine
	var temp_10_sveik_dal = parseInt(pradinis_skaicius_arr[0], base_from);
	
	if (pradinis_skaicius_arr[1] === undefined) {
		var temp_10_trupm_dal = 0;
	} else {	
		//trupmena yra ir ja reikia konvertuoti i desimtaine sistema
		var rezultatas = 0;
		var length = pradinis_skaicius_trupm_arr.length;
		for(i=0;i<length;++i)
		{
			var b = pradinis_skaicius_trupm_arr.charCodeAt(i);
			if (b>57) {
				rezultatas+=  ((b-55)*Math.pow(base_from, -i-1));
			} else {
				rezultatas+= (pradinis_skaicius_trupm_arr.substring(i,i+1)*Math.pow(base_from, -(i+1)));
			}
		}
		var temp_10_trupm_dal = rezultatas;
	}
	
	//visas tarpinis (desimtainis) skaicius
	if (temp_10_sveik_dal < 0) {
		var temp_10 = temp_10_sveik_dal - temp_10_trupm_dal;
	} else {
		var temp_10 = temp_10_sveik_dal + temp_10_trupm_dal;
	}	
	
	//konvertuojam skaiciu is tarpines (desimtaines) i tiksline sistema
	var rezultatas = temp_10.toString(base_to);
	rezultatas = rezultatas.toUpperCase();
	$(rezultatu_langas).html(rezultatas);
	
	if (base_from == 16) {
		$(ivediomo_langas).val(text.replace("0x", ""));
	}
		
});
