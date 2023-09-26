function studentMarks() {
    if (0 <= mark <= 100) {
        if (mark > 79) {
            grade = "A";
        }

    } else if (mark >= 60) {
        grade = "B";
    } else if (mark >= 59) {
        grade = "C";
    } else if (mark >= 49) {
        grade = "D";
    } else if (mark < 40) {
        grade = "E";
    }

}
