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

function calcGrade() {

    //Collect data from the form
    let assignments = $('#assignments').val();
    let groupProject = $('#group').val();
    let quizzes = $('#quiz').val();
    let exams = $('#exam').val();
    let intex = $('#intex').val();
    //Weights
    let assignmentWeight = 0.5;
    let groupWeight = 0.1;
    let quizWeight = 0.1;
    let examWeight = 0.2;
    let intexWeight = 0.1;

    //calculate final grade and percentage
    assignments = assignments * assignmentWeight;
    groupProject = groupProject * groupWeight;
    quizzes = quizzes * quizWeight;
    exams = exams * examWeight;
    intex = intex * intexWeight;

    let finalGrade = assignments + groupProject + quizzes + exams + intex;
    let output = letterGrade(finalGrade) + ' ( ' + finalGrade.toFixed(2) + '% )'
    alert(output)

    //This is the piece of code that will write to the html page. I am having issues getting it to stay on the page after the form
    //submission, so that is why I create the alert above. The alert is just to show that I had it working properly.
    $('#grade').html(letterGrade(finalGrade) + ' ( ' + finalGrade.toFixed(2) + '% )');
       
}