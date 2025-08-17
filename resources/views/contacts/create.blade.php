<h1>Add New Contact</h1>

@if ($errors->any())
    <div>
        <ul>
            @foreach ($errors->all() as $error)
                <li style="color:red;">{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

<form action="{{ route('contacts.store') }}" method="POST">
    @csrf
    <label>First Name:</label>
    <input type="text" name="firstname" value="{{ old('firstname') }}"><br><br>

    <label>Last Name:</label>
    <input type="text" name="lastname" value="{{ old('lastname') }}"><br><br>

    <label>Phone Number:</label>
    <input type="text" name="phonenumber" value="{{ old('phonenumber') }}"><br><br>

    <button type="submit">Save</button>
</form>

<a href="{{ route('contacts.index') }}">Back to list</a>
