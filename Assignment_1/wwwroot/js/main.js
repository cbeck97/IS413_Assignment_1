//Take a percentage and return the corresponding letter grade
function letterGrade(percentage){
    let grade = ''
    if (percentage >= 94) grade = 'A'
    else if (percentage >= 90) grade = 'A-'
    else if (percentage >= 87) grade = 'B+'
    else if (percentage >= 84) grade = 'B'
    else if (percentage >= 80) grade = 'B-'
    else if (percentage >= 77) grade = 'C+'
    else if (percentage >= 74) grade = 'C'
    else if (percentage >= 70) grade = 'C-'
    else if (percentage >= 67) grade = 'D+'
    else if (percentage >= 64) grade = 'D'
    else if (percentage >= 60) grade = 'D-'
    else if (percentage < 60) grade = 'E'
    return grade
}

function calcGrade(){
    //Collect data from the form
    let assigments = document.getElementById('assignments').value;
    let groupProject = document.getElementById('group').value;
    let quizzes = document.getElementById('quiz').value;
    let exams = document.getElementById('exam').value;
    let intex = document.getElementById('intex').value;
    
    //Weights
    let assignmentWeight = 0.5;
    let groupWeight = 0.1;
    let quizWeight = 0.1;
    let examWeight = 0.2;
    let intexWeight = 0.1;

    //calculate final grade and percentage
    assigments = assigments * assignmentWeight;
    groupProject = groupProject * groupWeight;
    quizzes = quizzes * quizWeight;
    exams = exams * examWeight;
    intex = intex * intexWeight;

    let finalGrade = assigments + groupProject + quizzes + exams + intex;
    document.getElementById('grade').innerHTML = letterGrade(finalGrade) + ' ( ' + finalGrade.toFixed(2) + '% )'
}