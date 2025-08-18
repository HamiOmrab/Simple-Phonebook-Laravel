<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{

    public function index()
    {
        $contacts = Contact::all();
        return view('contacts.index', compact('contacts'));
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

    public function show(string $id)
    {
        $contact = Contact::findOrFail($id);
        return response()->json($contact);
    }
    

    public function edit(string $id)
    {
        $contact = Contact::findOrFail($id);
        return view('contacts.edit', compact('contact'));    
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
        return redirect()->route('contacts.index')->with('success', 'Contact created successfully.');
    }

    public function destroy(Contact $contact)
    {
        $contact->delete();
        return redirect()->route('contacts.index')->with('success', 'Contact deleted successfully.');
    }

    public function apiIndex()
    {
        return response()->json(\App\Models\Contact::all());
    }
    
    public function apiStore(Request $request)
    {
        $request->validate([
            'firstname'   => 'required|min:2',
            'lastname'    => 'required|min:2',
            'phonenumber' => 'required',
        ]);

        $contact = Contact::create($request->json()->all());

        return response()->json($contact);
    }


}