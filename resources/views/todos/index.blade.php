<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Todo List</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

    <!-- Styles -->
    <style>

    </style>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-lg-10">
                <h3 class="" style="margin-top: 20px">Todo List</h2>
                <a href="{{route('new.task')}}" class="badge badge-info"
                    style="
                        padding: 13px;
                        margin-bottom: 10px;
                        font-size: 16px;
                    ">
                    Add New Task
                </a>
                <ul class="list-group">
                    @foreach ($todos as $todo)
                    <li class="list-group-item">{{$todo->title}}
                    <a href="{{'/tasks/'.$todo->id.'/edit'}}" class="badge badge-primary" style="padding:10px">Edit</a>
                        <a href="{{'/tasks/'.$todo->id.'/delete'}}" class="badge badge-danger" style="padding:10px">Delete</a>
                    </li>

                    @endforeach

                  </ul>
            </div>
        </div>
    </div>







    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous">
    </script>
</body>

</html>
