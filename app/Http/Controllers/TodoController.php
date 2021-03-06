<?php

namespace App\Http\Controllers;

use App\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    // fetch all todos
    public function index()
    {
        $todos = Todo::orderBy('complete')->get();
        return view('todos.index', compact('todos'));
    }

    // create todo
    public function create()
    {
        return view('todos.create');
    }

    // store todo
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|max:255'
        ]);
        Todo::create($request->all());
        return redirect()->back()->with('success', 'Task Created Successfully');
    }

    // edit todo
    public function edit(Todo $todos)
    {
        return view('todos.edit', compact('todos'));
    }

    // update todo
    public function update(Request $request, Todo $todos)
    {
        $validatedData = $request->validate([
            'title' => 'required|max:255'
        ]);
        $todos->update($validatedData);
        return redirect()->back()->with('success', 'Task Updated Successfully');
    }

    // delete todo
    public function delete(Todo $todos)
    {
        $todos->delete();
        return redirect()->back()->with('success', 'Task Deleted Successfully');
    }

    // task mark as completed
    public function complete(Todo $todo)
    {
        $todo->update(['complete' => true]);
        return redirect()->back()->with('success', 'Task Mark as Completed');
    }

    // task mark as incompeted
    public function incompete(Todo $todo)
    {
        $todo->update(['complete' => false]);
        return redirect()->back()->with('success', 'Task Mark as Incompeted');

    }
}
