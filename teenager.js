function inputValueChange(){
    let age = document.getElementById('inputValue').value;
    return teenager(age)
}

function Remainder() { 
    let age = document.getElementById('inputValue').value;
    return age % 1
}

function teenager(age) {
    if(age>=15 && age<20 && Remainder() === 0) {
        return "당신은 청소년입니다."
    } else if (age === "국민대") {
        return "사랑해요"
    } else if (isNaN(age)) {
        return "숫자를 입력하세요"
    } else if (Remainder() !== 0) {
        return "정수형으로 입력하세요"
    } else if (age < 0) {
        return "아직 태어나지 않으셨군요"
    } else {
        return "당신은 청소년이 아닙니다."}
}

