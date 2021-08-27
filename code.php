<?php
    $conn = mysqli_connect('localhost','root');
    mysqli_select_db($conn,'entries');

    $name= $_POST['name'];
    $age = $_POST['age'];
    echo "hello";

    if(mysqli_query($conn,"INSERT INTO data VALUES ('$name','$age')"))
        echo 'Data Inserted';
    else
        echo 'Error Occured';

?>