/* eslint-disable */

$(function () {

    $("#allAgreeChk").click(function () {

        /* 전체동의 버튼 선택 / 해제 */
        var chk = $(this).prop("checked");

        if (chk == true) {
            $(".check").prop("checked", true);
        } else if (chk == false) {
            $(".check").prop("checked", false);
        }
        /* 전체동의 버튼 선택 / 해제 */
    });


    $(".check").click(function () {

        var chk1 = $("#chk1").prop("checked");
        var chk2 = $("#chk2").prop("checked");
        var chk3 = $("#chk3").prop("checked");
        var chk4 = $("#chk4").prop("checked");

        if (chk1 && chk2 && chk3 && chk4 == true) {
            $("#allAgreeChk").prop("checked", true);
        } else {
            $("#allAgreeChk").prop("checked", false);
        }


    });



    /* 아이디 중복 체크 */
    $("#uID").focusout(function () {

        var uID = $("#uID").val().trim();

        var dupID = ["test01", "geust", "mem02"];

        var useID = true;

        $.each(dupID, function (i, v) {
            if (uID == v) {
                useID = false;
            }
        });


        /* 공백 입력 불가능 메세지 */
        var msg = "";
        if (uID != "") {
            if (useID) {
                msg = "사용 가능한 ID 입니다.";
            } else {
                msg = "사용 중인 ID 입니다.";
            }
        } else {
            msg = "공백은 입력할 수 없습니다.";
        }
        /* 공백 입력 불가능 메세지 */


        var spanChk = $("#uID").next().is("span");


        if (spanChk) { // 중복 메세지 제거
            $("span#idChkMsg").remove();
        }

        $("<span id='idChkMsg'>" + msg + "</span>").insertAfter("#uID");

    });
    /* 아이디 중복 체크 */




    /* 비밀번호 유효성 검사 */
    /* 비밀번호 보기 체크박스 */
    $("#PWChk").click(function () {

        var PWChk = $(this).prop("checked");

        if (PWChk == true) {
            $(".PW").attr("type", "text");
        } else {
            $(".PW").attr("type", "password");
        }
    });
    /* 비밀번호 보기 체크박스 */


    /* 비밀번호 불일치 검사 */
    $("#uPW_Re").focusout(function () {
        var uPW = $("#uPW").val().trim();
        var uPW_Re = $("#uPW_Re").val().trim();
        var pwChkMsg = "";

        var pwChk = $("#uPW_Re").next().is("span");

        if (uPW != "", uPW_Re != "") {
            if (uPW == uPW_Re) {
                pwChkMsg = "비밀번호가 일치합니다.";
            } else {
                pwChkMsg = "비밀번호가 일치하지 않습니다.";
            }
        } else {
            pwChkMsg = "공백은 입력할 수 없습니다.";
        }
        $("span#pwChkMsg").text(pwChkMsg);

        if (pwChk) {
            $("span#pwChkMsg").remove();
        }

        $("<span id ='pwChkMsg'>" + pwChkMsg + "</span>").insertAfter("#uPW_Re");

    });

    /* 비밀번호 유효성 검사 */


});

/*
 $("input.allAgreeChk").click(function() {
    $("input.check").attr("checked","true");
});*/
