

const overlayOn = () => {
    const overlay = document.getElementById('overlay');
    overlay.setAttribute("visible", "true");
    overlay.setAttribute("style", "opacity: 1;");
}

const overlayOff = () => {
    const overlay = document.getElementById('overlay');
    overlay.setAttribute("visible", "false");
    overlay.setAttribute("style", "opacity: 0; display: none;");
}

const overlayTextColor = () => {
    const textArea = document.getElementById('reveiw_textarea');
    textArea.setAttribute("style", "background-color: rgb(255, 255, 255);");

    const buttons = document.getElementsByClassName('popup_button');
    buttons[0].innerHTML = '취소'
    buttons[1].innerHTML = '저장'
    buttons[2].innerHTML = '닫기'

}

const overlayReturnColor = () => {
    const textArea = document.getElementById('reveiw_textarea');
    textArea.setAttribute("style", "background-color: rgb(255, 255, 255, 0.5);");

    const buttons = document.getElementsByClassName('popup_button');
    buttons[0].innerHTML = '수정'
    buttons[1].innerHTML = '삭제'
    buttons[2].innerHTML = '닫기'

}