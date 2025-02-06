<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Edit User</title>
</head>
<body>
    <form action="{{ route('user_role.update', $user->id) }}" method="POST">
        @csrf
        @method('PUT')
        <a href="{{ route('user_role.userTable') }}" class="btn btn-secondary">Back</a> <br>

        <label for="username">Username:</label>
        <input type="text" id="username" name="username" value="{{ $user->username }}" required>

        <label for="email">Email:</label>
        <input type="text" id="email" name="email" value="{{ $user->email }}" required>

        <label for="firstname">Firstname:</label>
        <input type="text" id="firstname" name="firstname" value="{{ $user->firstname }}" required>

        <label for="firstname">Middlename:</label>
        <input type="text" id="middlename" name="middlename" value="{{ $user->middlename }}" required>

        <label for="lastname">Lastname:</label>
        <input type="text" id="lastname" name="lastname" value="{{ $user->lastname }}" required>

        <label for="name_ext">Name Ext:</label>
        <input type="text" id="name_ext" name="name_ext" value="{{ $user->name_xt }}">

        <label for="gender">Gender:</label>
        <select id="gender" name="gender">
            <option value="Male" {{ $user->gender == 'Male' ? 'selected' : '' }}>Male</option>
            <option value="Female" {{ $user->gender == 'Female' ? 'selected' : '' }}>Female</option>
        </select>

        <label for="status">Status:</label>
        <select id="status" name="status">
            <option value="Active" {{ $user->status == 'Active' ? 'selected' : '' }}>Active</option>
            <option value="Inactive" {{ $user->status == 'Inactive' ? 'selected' : '' }}>Inactive</option>
        </select>

        <button type="submit">Update</button>
    </form>
</body>
</html>
