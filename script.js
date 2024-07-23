const predefinedQuestions = [
    "What is your name?",
    "How old are you?",
    "Where do you live?",
    "What is your favorite color?",
    "What is your hobby?",
    "What do you do for a living?",
    "What is your favorite food?",
    "What is your favorite movie?",
    "What is your favorite book?",
    "What is your favorite song?"
];

document.getElementById('acceptBtn').addEventListener('click', function() {
    const question = document.getElementById('questionInput').value;
    if (question) {
        if (predefinedQuestions.includes(question)) {
            alert('Your question is accepted.');
        } else {
            alert('Your question is not in the predefined list.');
        }
    } else {
        alert('Please type a question.');
    }
});

document.getElementById('declineBtn').addEventListener('click', function() {
    document.getElementById('questionInput').value = '';
    alert('Enter any question');
});