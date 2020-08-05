<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Todo List</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <!-- Fonts -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

    <!-- Styles -->
    <style>

    </style>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-lg-10">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/tasks">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Todo List</li>
                    </ol>
                </nav>
                <h3 class="" style="margin-top: 20px">Todo List</h2>
                    <a href="{{route('new.task')}}" class="badge badge-info" style="
                        padding: 13px;
                        margin-bottom: 10px;
                        font-size: 16px;
                    ">
                        Add New Task
                    </a>
                    <ul class="list-group">
                        @foreach ($todos as $todo)
                        @if($todo->complete)

                        <li class="list-group-item">
                            <span onclick="event.preventDefault();
                            document.getElementById('incompleted-form-{{$todo->id}}')
                                .submit()"
                            data-toggle="tooltip" data-placement="top" title="Mark as Incompleted">
                                <a href=""><i class="fa fa-refresh" aria-hidden="true"></i></a>
                            </span>&nbsp;&nbsp;&nbsp;
                            <form style="display:none" id="{{'incompleted-form-'.$todo->id}}"
                                action="{{route('tasks.incomplete',$todo->id)}}" method="POST">
                                @csrf
                            </form>
                            <strike> {{$todo->title}} </strike>
                        </li>
                        @else
                        <li class="list-group-item">
                            <span onclick="event.preventDefault();
                            document.getElementById('completed-form-{{$todo->id}}')
                                .submit()"
                                 data-toggle="tooltip" data-placement="top" title="Mark as completed">
                                <a href=""><i class="fa fa-check" aria-hidden="true"></i></a>
                                </span>&nbsp;&nbsp;&nbsp;
                            <form style="display:none" id="{{'completed-form-'.$todo->id}}"
                                action="{{route('tasks.complete',$todo->id)}}" method="POST">
                                @csrf
                            </form>
                            {{$todo->title}}
                            <a href="{{'/tasks/'.$todo->id.'/edit'}}" class="badge badge-primary"
                                style="padding:10px">Edit</a>
                            <a href="{{'/tasks/'.$todo->id.'/delete'}}" class="badge badge-danger"
                                style="padding:10px">Delete</a>


                        </li>
                        @endif
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
