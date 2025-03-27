document.addEventListener("DOMContentLoaded", function () {
    const login = document.getElementById("login-box");
    const inputId = document.getElementById("id");
    const inputPass = document.getElementById("pass");
    const Mege = document.getElementById("Mege");

    login.addEventListener("submit", function (e) {
        if (inputId.value.length === 0) {
            alert("아이디를 입력해주세요")
            e.preventDefault();
            inputId.focus();
            return false;
        } else if (inputPass.value.length === 0) {
            alert("비밀번호를 입력해주세요")
            e.preventDefault();
            inputPass.focus();
            return false;
        };
    });




    inputId.addEventListener("keyup", function () {
        if (inputId.value.length == 0) {
            Mege.classList.remove("fail-id", "sucess-id")
            Mege.classList.add("init-id")
            Mege.textContent = "아이디를 입력해주세요"
        } else if (inputId.value.length < 4) {
            Mege.textContent = "아이디는 4자리 이상입니다"
            Mege.classList.remove("init-id", "sucess-id")
            Mege.classList.add("fail-id");
        } else {
            Mege.textContent = "확인되었습니다";
            Mege.classList.remove("init-id", "fail-id");
            Mege.classList.add("sucess-id");
        }
    });
})