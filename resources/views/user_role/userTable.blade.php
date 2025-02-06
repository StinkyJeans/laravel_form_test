<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>User Table</title>
</head>

<body>
    <style>
       table, th, td {
            width: 50%;
            border: 1px solid black;
            border-collapse: collapse;
         }
    </style>
    <a href="{{ route('user_role.index') }}" class="btn btn-secondary">Back</a>
    <table class="table-container">
        <thead>
            <tr>
                <th>#</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>firstname</th>
                <th>Middlename</th>
                <th>lastname</th>
                <th>name_ext</th>
                <th>gender</th>
                <th>status</th>
                <th style="padding: 25px">Actions</th>

            </tr>
        </thead>
        <tbody>
            @foreach($users as $user)
                <tr>
                    <td>{{ $user->id}}</td>
                    <td>{{ $user->username }}</td>
                    <td>{{ $user->email }}</td>
                    <td>{{ $user->password }}</td>
                    <td>{{ $user->firstname }}</td>
                    <td>{{ $user->middlename }}</td>
                    <td>{{ $user->lastname }}</td>
                    <td>{{ $user->name_ext }}</td>
                    <td>{{ $user->gender }}</td>
                    <td>{{ $user->status }}</td>
                    <td>
                        <button class="delete-button btn btn-danger" data-id="{{ $user->id }}">Delete</button>
                        <button class="btn btn-primary edit-button" data-url="{{ route('user_role.edit', $user->id) }}">Edit</button>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).on('click', '.delete-button', function() {
            var userId = $(this).data('id');


            if (confirm('Are you sure you want to delete this user?')) {
                $.ajax({
                    url: '/user_role/' + userId,
                    type: 'DELETE',
                    data: {
                        _token: '{{ csrf_token() }}',
                    },
                    success: function(response) {

                        $('#user-' + userId).remove();
                        alert(response.success);
                    },
                    error: function(xhr, status, error) {
                        alert('Error deleting user: ' + error);
                    }
                });
            }
        });
    </script>
    <script>
        $(document).on('click', '.edit-button', function() {
            var url = $(this).data('url');
            window.location.href = url;
        });
    </script>

</body>
</html>
