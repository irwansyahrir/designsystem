export const SIMPLE_TABLE = {
  headers: [
    { key: 'name', content: 'Navn' },
    { key: 'address', content: 'Adresse' },
    { key: 'phone', content: 'Telefon' },
    { key: 'email', content: 'E-post', alignRight: true},
  ],
  data: [
    [ 'Ola Normann', 'Gateveien 2', '912 34 567', 'ola@normann.no' ],
    [ 'Sivert Svenska', 'Gatuveio 7', '+46 123 456 789', 'sivert@svenska.se' ],
    [ 'Daniel Dansk', 'Kartoffel Fjers', '+45 018 456 789', 'daniel@dansk.dk' ],
    [ 'Anders Amerikaner', 'Road Street 52', '+1 555 555 5555', 'anders@amerikaner.biz' ],
  ],
  dataObject: [
    {
      name: 'Ola Normann',
      address: 'Gateveien 2',
      phone: '912 34 567',
      email: 'ola@normann.no',
      username: 'olli22'
    },
    {
      name: 'Sivert Svenska',
      address: 'Gatuveio 7',
      phone: '+46 123 456 789',
      email: 'sivert@svenska.se',
      username: 'zlatan_2000'
    },
    {
      name: 'Daniel Dansk',
      address: 'Kartoffel Fjers',
      phone: '+45 018 456 789',
      email: 'daniel@dansk.dk',
      username: 'kartoffel88'
    },
    {
      name: 'Anders Amerikaner',
      address: 'Road Street 52',
      phone: '+1 555 555 5555',
      email: 'anders@amerikaner.biz',
      username: 'andy-mandy'
    },
  ],
};
