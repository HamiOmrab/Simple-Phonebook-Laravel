<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{

    public function index()
    {
        $contacts = Contact::all();
        return view('contacts.index', compact('contacts'));
    }

    public function apiIndex()
    {
        return response()->json(\App\Models\Contact::all());
    }

    public function create()
    {
        return view('contacts.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'firstname'   => 'required|min:2',
            'lastname'    => 'required|min:2',
            'phonenumber' => 'required',
        ]);
        
        Contact::create($request->all());
        return redirect()->route('contacts.index')->with('success', 'Contact created successfully.');
    }

    public function apiStore(Request $request)
    {
        $request->validate([
            'firstname'   => 'required|min:2',
            'lastname'    => 'required|min:2',
            'phonenumber' => 'required',
        ]);

        $contact = Contact::create($request->json()->all());
        return response()->json($contact,201);
    }

    public function show(string $id)
    {
        $contact = Contact::findOrFail($id);
        return response()->json($contact);
    }
    

    public function edit(string $id)
    {
        $contact = Contact::findOrFail($id);
        return response()->json(\App\Models\Contact::all());

    }

    public function update(Request $request, string $id)
    {
        $request->validate([
            'firstname'   => 'required|min:2',
            'lastname'    => 'required|min:2',
            'phonenumber' => 'required',
        ]);
        
        $contact = Contact::findOrFail($id);
        $contact->update($request->all());
    }

    public function destroy(Contact $contact)
    {
        $contact->delete();

        return response()->json(['message' => 'Contact deleted successfully']);
    }
}