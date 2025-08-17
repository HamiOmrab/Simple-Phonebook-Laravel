<h1>Edit Contact</h1>

@if ($errors->any())
    <div>
        <ul>
            @foreach ($errors->all() as $error)
                <li style="color:red;">{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

<form action="{{ route('contacts.update', $contact->id) }}" method="POST">
    @csrf
    @method('PUT')
    <label>First Name:</label>
    <input type="text" name="firstname" value="{{ old('firstname', $contact->firstname) }}"><br><br>

    <label>Last Name:</label>
    <input type="text" name="lastname" value="{{ old('lastname', $contact->lastname) }}"><br><br>

    <label>Phone Number:</label>
    <input type="text" name="phonenumber" value="{{ old('phonenumber', $contact->phonenumber) }}"><br><br>

    <button type="submit">Update</button>
</form>

<a href="{{ route('contacts.index') }}">Back to list</a>
