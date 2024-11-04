function studentEnrollment() {
    let DSA = [];
    let PL = [];
    let networks = [];

    subjects = prompt("Which program will you select?: (A) DSA, (B) PL, (C) Networks");
    operations = prompt("Select an option: (A) Enroll, (B) Unenroll, (C) Select Another Subject, (D) Exit");
    if (operations == "A") {
        fullName = prompt("What is your name?");
        operations = prompt("Select an option: (A) Enroll, (B) Unenroll, (C) Select Another Subject, (D) Exit");
        if (subjects == A) {
            DSA.push(fullName);
        } else if (subjects == B) {
            PL.push(fullName);
        } else if (subjects == C) {
            networks.push(fullName) ;           
        }
    } else if (operations == "B") {
        alert(DSA);
        unenroll = prompt("Which student will be unenrolled?");
        if (unenroll in DSA) {
            DSA.pop();
        }
    } else if (operations == "C") {
        subjects = prompt("Which program will you select?: (A) DSA, (B) PL, (C) Networks");
    } else if (operations == "D") {
        alert("DSA:" + " " + DSA);
        alert("PL:" + " " + PL);
        alert("Networks:" + " " + networks);
    }
}