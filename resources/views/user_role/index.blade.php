<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="{{ asset('/resources/css/form.css') }}">
</head>
<body>
    <style>
    .form-container {
        max-width: 400px;
        margin: 0 auto;
        padding: 30px;
        border: 2px solid #ccc;
        border-radius: 8px;
        margin-top: 150px;
    }
    .h1 {
        text-align: center;
    }
    </style>
    <form class="form-container"  action="/user_role" method="POST">
        @csrf
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required>
            <br><br>

            <label for="email">Email</label>
            <input type="text" id="email" name="email" required>
            <br><br>

            <label for="password">Password</label>
            <input type="password" id="password" name="password" required>
            <br><br>

            <label for="firstname">First Name</label>
            <input type="text" id="firstname" name="firstname" required>
            <br><br>

            <label for="middlename">Middle Name</label>
            <input type="text" id="middlename" name="middlename" required>
            <br><br>

            <label for="lastname">Last Name</label>
            <input type="text" id="lastname" name="lastname" required>
            <br><br>

            <label for="name_ext">Name Ext.</label>
            <input type="text" id="name_ext" name="name_ext">
            <br><br>



            <label for="gender">Gender</label>
            <select id="gender" name="gender" required>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <br><br>

            <label for="status">Status</label>
            <select id="status" name="status" required>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
            </select>
            <br><br>

            <button type="submit">Submit</button>
        </div>

        <a href="{{ route('user_role.userTable') }}" class="btn btn-secondary">View User Data</a>
      </form>

</body>
</html>

