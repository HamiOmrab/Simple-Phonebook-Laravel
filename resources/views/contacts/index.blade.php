<h1>My Contacts</h1>
<a href="{{ route('contacts.create') }}">Add Contact</a>

@if(session('success'))
    <p>{{ session('success') }}</p>
@endif

@if($contacts->isEmpty())
    <p>No contacts found. Your database is empty.</p>
@else
  <table>
    <thead>
      <tr>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Number</th>
      </tr>
    </thead>
    <tbody>
      @foreach($contacts as $contact)
        <tr>
          <td>{{ $contact->firstname }}</td>
          <td>{{ $contact->lastname }}</td>
          <td>{{ $contact->phonenumber }}</td>
          <td>
              <a href="{{ route('contacts.edit', $contact) }}">Edit</a>
              <form action="{{ route('contacts.destroy', $contact) }}" method="POST" style="display:inline;">
                  @csrf
                  @method('DELETE')
                  <button type="submit">Delete</button>
              </form>
          </td>
        </tr>
      @endforeach
    </tbody>
  </table>
@endif



