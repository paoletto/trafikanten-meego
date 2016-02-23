.pragma library

function jsonToDate(d) {
    return new Date( +(d.slice(0,4))
                    ,+(d.slice(5,7))
                    ,+(d.slice(8,10))
                    ,+(d.slice(11,13))
                    ,+(d.slice(14,16))
                    ,+(d.slice(17,19)) )
}

function formatTrafDate(refDate, date)
{
    var trafTime = jsonToDate(date);
    var currTime = jsonToDate(refDate);
    var diff = trafTime.getTime() - currTime.getTime();
    var diffSec = Math.round(diff / 1000);
    var strTime = Qt.formatDateTime(trafTime, "hh:mm")
    var strMins = ""
    if (diffSec < -1)
        return "";
    else if (diffSec < 45)
        return "0";
    else if (diffSec <= 105)
        strMins =   "1'";
    else if (diffSec <= 165)
        strMins =   "2'";
    else if (diffSec <= 225)
        strMins =   "3'";
    else if (diffSec <= 285)
        strMins =   "4'";
    else if (diffSec <= 345)
        strMins =   "5'";
    else if (diffSec <= 405)
        strMins =   "6'";
    else if (diffSec <= 465)
        strMins =   "7'";
    else if (diffSec <= 525)
        strMins =   "8'";
    else if (diffSec <= 585)
        strMins =   "9'";
    else
        return strTime;
    return strMins + " (" + strTime + ")";
}

function trafTime(date)
{
    var trafTime = jsonToDate(date);
    return Qt.formatDateTime(trafTime, "hh:mm");
}

function trafDiff(refDate, date)
{
    var trafTime = jsonToDate(date);
    var currTime = jsonToDate(refDate);
    var diff = trafTime.getTime() - currTime.getTime();
    var diffSec = Math.round(diff / 1000);
    if (diffSec < -1)
        return "";
    else if (diffSec < 45)
        return "0";
    else if (diffSec <= 105)
        return "1";
    else if (diffSec <= 165)
        return "2";
    else if (diffSec <= 225)
        return "3";
    else if (diffSec <= 285)
        return "4";
    else if (diffSec <= 345)
        return "5";
    else if (diffSec <= 405)
        return "6";
    else if (diffSec <= 465)
        return "7";
    else if (diffSec <= 525)
        return "8";
    else if (diffSec <= 585)
        return "9";
    else
        return "";

}

function lTrim(value) {

    var re = /\s*((\S+\s*)*)/;
    return value.replace(re, "$1");

}

function rTrim(value) {

    var re = /((\s*\S+)*)\s*/;
    return value.replace(re, "$1");

}

function trim(value) {

    return lTrim(rTrim(value));

}

function ucWords(str) {
    var arrStr = str.split(" ");
    var strOut = '';

    for (var i=0;i<arrStr.length;i++)
    {
        var firstChar = arrStr[i].substring(0,1);
        var remainChar = arrStr[i].substring(1);
        firstChar = firstChar.toUpperCase();
        remainChar = remainChar.toLowerCase();
        strOut += firstChar + remainChar + ' ';
    }

    return strOut.substring(0, strOut.length - 1);
}

function stopNameSubPart(stopName, part) {
    var hasP = stopName.indexOf('(') != -1;
    var hasB = stopName.indexOf('[') != -1;
    var hasSeveralPart = hasP || hasB;
    if (!hasSeveralPart && part > 0 || part > 1)
        return "";

    var splits;
    if (hasP)
        splits = stopName.split('(');
    else
        splits = stopName.split('[')

    return ucWords(splits[part].replace(/(\)|])/i, ""));
}

function getTransportIcon(type) {
    var icon = "";
    var t = parseInt(type);
    switch (t) {
    case 1:
    case 2:
    icon = "buss_gray.png";
    break;
    case 4:
    case 6:
    icon = "tog_gray.png";
    break;
    case 5:
    icon = "boat_gray.png";
    break;
    case 7:
    icon = "trykk_gray.png";
    break;
    case 8:
    icon = "tbane_gray.png";
    break;
    }

    if (icon.length > 0)
        icon = "images/" + icon;

    return icon;
}
