# Math Quiz

This is a math quiz project that uses HTML, CSS, JS, PHP, and MySQL. Users can create their own quiz using their phone or computer.

## Getting Started

To get started, clone this repository to your local machine:

```bash
git clone https://github.com/your-username/math-quiz.git
```

## Prerequisites
To run this project, you need to have PHP and MySQL installed on your machine. You can download and install them from the following links:

- [PHP](https://www.php.net/downloads)
- [MySQL](https://dev.mysql.com/downloads/)
- [Node](https://nodejs.org/en/download)

## Installing
After cloning the repository and installing the prerequisites, you need to set up the database for the quiz. Here are the steps:

Open the config.php file in the includes folder.
Update the database settings with your own credentials.
Open the quiz.sql file in the root folder.
Import the file into your MySQL server to create the quiz database and its tables.
In addition, you need to create a folder named assets in the root directory, and add two subfolders inside it named images and sounds.

For example:
```lua
math-quiz/
  index.html
  css/
    style.css
  js/
    app.js
  includes/
    config.php
  assets/
    images/
    sounds/
  quiz.sql
  LICENSE
  README.md
```
After that, you can start the project by running the following command in your terminal:
```bash
php -S localhost:8000
```

## Usage
To use the math quiz, open the index.html file in your browser. Enter your name, age, and choose the difficulty level, and then click the "Start" button to begin the quiz.

The quiz consists of 10 random questions based on the difficulty level you chose. Answer the questions and click the "Check" button to check your answer. The quiz will automatically move to the next question after you answer it.

After finishing the quiz, the score and the correct answers will be displayed on the screen.

## Built With
- HTML
- CSS
- JavaScript
- PHP
- MySQL

## Authors

- Roei Avneri - [roei avneri](https://github.com/RoeiAvneri)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
