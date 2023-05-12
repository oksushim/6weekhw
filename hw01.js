var studentScore = prompt("점수를 입력하세요")
var grade;

if (100>=studentScore && studentScore>=0){
    if (studentScore>=90){
        n=10;
    } else if (90>studentScore>=70) {
        n = 9;
    } else if (70>studentScore>=60) {
        n = 8;
    } else if (60>studentScore>=50) {
        n = 7;
    } else {
        n = 6;
    }
} else {
    n = 0;
}


switch(n){
    case 10 :
        grade = 'A';
        break;
    case 9 :
        grade = 'B';
        break;
    case 8 :
        grade = 'C';
        break;
    case 7:
        grade = 'D';
        break;
    case 7:
        grade = 'F';
        break;
    default:
        grade = 'none'
}


console.log(`당신의 점수는 ${studentScore}이고, 학점은 ${grade}입니다`)