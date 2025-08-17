<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Contact;

class ContactSeeder extends Seeder
{
    public function run(): void
    {
        Contact::create([
            'firstname'   => 'Guy',
            'lastname'    => 'Lepage',
            'phonenumber' => '(514) 100-9875',
        ]);

        Contact::create([
            'firstname'   => 'Hamid',
            'lastname'    => 'Omran',
            'phonenumber' => '(438) 991-0811',
        ]);

        Contact::create([
            'firstname'   => 'Marie-Claire',
            'lastname'    => 'Fournier',
            'phonenumber' => '(438) 912-8937',
        ]);

        Contact::create([
            'firstname'   => 'Joe',
            'lastname'    => 'Labrique',
            'phonenumber' => '(738) 928-3838',
        ]);
    }
}
