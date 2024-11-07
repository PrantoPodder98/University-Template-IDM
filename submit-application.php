<?php
// Database configuration
$servername = "localhost"; // Replace with your database server (e.g., 'localhost')
$username = "root";        // Replace with your MySQL username
$password = "";            // Replace with your MySQL password
$dbname = "undergraduate_admissions"; // Database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    $response = array(
        'status' => 'error',
        'message' => 'Connection failed: ' . $conn->connect_error
    );
    echo json_encode($response);
    die();
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $program = $_POST['program'];
    $high_school = $_POST['high_school'];
    $gpa = $_POST['gpa'];
    $extracurricular_activities = $_POST['extracurricular_activities'];

    // Validate data
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response = array(
            'status' => 'error',
            'message' => 'Invalid email format'
        );
        echo json_encode($response);
        die();
    }

    if (!is_numeric($gpa) || $gpa < 0 || $gpa > 4) {
        $response = array(
            'status' => 'error',
            'message' => 'Invalid GPA'
        );
        echo json_encode($response);
        die();
    }

    // Handle file upload (optional)
    $documents = '';
    if (isset($_FILES['documents']) && $_FILES['documents']['error'][0] == 0) {
        $uploads_dir = 'uploads/';
        $documents = '';
        foreach ($_FILES['documents']['name'] as $key => $value) {
            $temp_name = $_FILES['documents']['tmp_name'][$key];
            $file_name = basename($_FILES['documents']['name'][$key]);
            $target_file = $uploads_dir . $file_name;
            move_uploaded_file($temp_name, $target_file);
            $documents .= $file_name . ",";
        }
        $documents = rtrim($documents, ',');
    }

    // Insert data into the database
    $sql = "INSERT INTO applications (name, email, program, high_school, gpa, extracurricular_activities, documents) 
            VALUES ('$name', '$email', '$program', '$high_school', '$gpa', '$extracurricular_activities', '$documents')";

    if ($conn->query($sql) === TRUE) {
        $response = array(
            'status' => 'success',
            'message' => 'Your undergraduate application has been successfully submitted!'
        );
    } else {
        $response = array(
            'status' => 'error',
            'message' => 'Error: ' . $sql . '<br>' . $conn->error
        );
    }

    // Close connection
    $conn->close();

    // Return the response as JSON
    echo json_encode($response);
}
?>