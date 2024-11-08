import { CheckCircledIcon, CrossCircledIcon } from '@radix-ui/react-icons';
import { ColumnDef } from '@tanstack/react-table';

export type User = {
  createdAt?: Date;
  email: string;
  id: string;
  image: string;
  location: string;
  otherInformation?: string;
  phone: string;
  role: 'client' | 'provider';
  rtn?: string;
  status: 'active' | 'inactive';

  updatedAt?: Date;
  userName: string;
};

export const users: User[] = [
  {
    id: '9953ed85-31a0-4db9-acc8-e25b76176443',
    userName: 'John Miller',
    phone: '+1-555-0101',
    email: 'john.miller@example.com',
    role: 'client',
    status: 'inactive',
    location: '4306 Highland Drive, Seattle, WA 98109',
    image: 'john.miller.jpg',
    rtn: 'US2347908701',
    otherInformation: 'John Miller works in a tech startup in Seattle.',
    createdAt: new Date('2024-02-07T23:35:52.087Z'),
    updatedAt: new Date('2024-02-07T23:38:03.259Z'),
  },
  {
    id: '328c2bef-d84b-44a2-b5ae-03bd6550c4c4',
    userName: 'Elizabeth Smith',
    phone: '+44-020-8102',
    email: 'elizabeth.smith@example.co.uk',
    role: 'client',
    status: 'active',
    location: '22 Camden Road, London, NW1 9DP',
    image: 'elizabeth.smith.jpg',
    rtn: 'UK6574829302',
    otherInformation:
      'Elizabeth Smith works in a financial consultancy in London.',
    createdAt: new Date('2024-02-07T23:35:52.087Z'),
    updatedAt: new Date('2024-02-07T23:38:03.259Z'),
  },
  {
    id: '9543e3a4-99f2-4fcb-ba5d-f2aaebff6716',
    userName: 'Noah Wilson',
    phone: '+61-8-9200-1234',
    email: 'noah.wilson@example.com.au',
    role: 'provider',
    status: 'inactive',
    location: '305 Murray Street, Perth, WA 6000',
    image: 'noah.wilson.jpg',
    rtn: 'AU9085471203',
    otherInformation:
      'Noah Wilson is involved in the mining industry in Perth.',
    createdAt: new Date('2024-02-07T23:35:52.087Z'),
    updatedAt: new Date('2024-02-07T23:38:03.259Z'),
  },
  {
    id: 'bdcba306-57fa-4722-82e3-c4933b09e69b',
    userName: 'Marie Dubois',
    phone: '+33-1-4533-0012',
    email: 'marie.dubois@example.fr',
    role: 'client',
    status: 'active',
    location: '14 Rue de Rivoli, 75004 Paris',
    image: 'marie.dubois.jpg',
    rtn: 'FR21340987201',
    otherInformation: 'Marie Dubois works in a fashion house in Paris.',
    createdAt: new Date('2024-02-07T23:35:52.087Z'),
    updatedAt: new Date('2024-02-07T23:38:03.259Z'),
  },
  {
    id: 'e643dbea-0ab2-4d3d-8bb8-63aedf027a66',
    userName: 'Wang Wei',
    phone: '+86-20-8221-1234',
    email: 'wang.wei@example.com.cn',
    role: 'client',
    status: 'inactive',
    location: '206 Huanshi E Rd, Yuexiu District, Guangzhou, Guangdong',
    image: 'wang.wei.jpg',
    rtn: 'CN9988321221',
    otherInformation:
      'Wang Wei works for an electronics manufacturing company in Guangzhou.',
    createdAt: new Date('2024-02-07T23:35:52.087Z'),
    updatedAt: new Date('2024-02-07T23:38:03.259Z'),
  },
  {
    id: '94093200-c89f-410f-ba96-046f33fabb3e',
    userName: 'Conor Murphy',
    phone: '+353-1-242-1000',
    email: 'conor.murphy@example.ie',
    role: 'provider',
    status: 'active',
    location: "17 O'Connell Street, Dublin, D01 T9C2",
    image: 'conor.murphy.jpg',
    rtn: 'IE65432108701',
    otherInformation:
      'Conor Murphy works in a pharmaceutical company in Dublin.',
    createdAt: new Date('2024-02-07T23:35:52.087Z'),
    updatedAt: new Date('2024-02-07T23:38:03.259Z'),
  },
  {
    id: '4174f655-5cb2-4bd9-a785-ce11f16cebb0',
    userName: 'Emma Tremblay',
    phone: '+1 604-555-0122',
    email: 'emma.tremblay@example.com',
    role: 'client',
    status: 'inactive',
    location: '1020 Mainland Street, Vancouver, BC V6B 2T4',
    image: 'emma.tremblay.jpg',
    rtn: '07081999021280',
    otherInformation:
      'Emma Tremblay is engaged in the environmental sector in Canada.',
    createdAt: new Date('2024-02-13T15:35:02.010Z'),
    updatedAt: new Date('2024-02-13T15:37:03.020Z'),
  },
  {
    id: '38d5126b-4473-40d2-8142-2e7049c07346',
    userName: 'Maximilian Bauer',
    phone: '+49 30 567890',
    email: 'maximilian.bauer@example.com',
    role: 'client',
    status: 'active',
    location: 'Hauptstraße 5, 10178 Berlin',
    image: 'maximilian.bauer.jpg',
    rtn: '08081999021280',
    otherInformation:
      'Maximilian Bauer works for an automobile company in Germany.',
    createdAt: new Date('2024-02-14T16:39:04.030Z'),
    updatedAt: new Date('2024-02-14T16:40:05.040Z'),
  },
  {
    id: 'cb3ae8be-e376-4d26-9cfc-5884348c22ec',
    userName: 'Sofia Ricci',
    phone: '+39 06 12345678',
    email: 'sofia.ricci@example.com',
    role: 'provider',
    status: 'inactive',
    location: 'Via Roma 15, 00184 Rome',
    image: 'sofia.ricci.jpg',
    rtn: '09081999021280',
    otherInformation: 'Sofia Ricci is part of the culinary field in Italy.',
    createdAt: new Date('2024-02-15T17:41:06.050Z'),
    updatedAt: new Date('2024-02-15T17:42:07.060Z'),
  },
  {
    id: 'fa47c0f4-620c-40b3-a16a-b9afa9a88215',
    userName: 'Arjun Patel',
    phone: '+91 22 2771 1234',
    email: 'arjun.patel@example.com',
    role: 'client',
    status: 'active',
    location: '142 M.G. Road, Mumbai, Maharashtra 400001',
    image: 'arjun.patel.jpg',
    rtn: '10081999021280',
    otherInformation:
      'Arjun Patel is active in the software industry in India.',
    createdAt: new Date('2024-02-16T18:43:08.070Z'),
    updatedAt: new Date('2024-02-16T18:44:09.080Z'),
  },
  {
    id: '8ce5b4d9-5182-4cbf-9d48-f187b377e931',
    userName: 'Sato Yuki',
    phone: '+81 3 3541 1234',
    email: 'sato.yuki@example.com',
    role: 'client',
    status: 'inactive',
    location: '2-11-3 Meguro, Tokyo 153-0063',
    image: 'sato.yuki.jpg',
    rtn: '11081999021280',
    otherInformation:
      'Sato Yuki is engaged in the electronics sector in Japan.',
    createdAt: new Date('2024-02-17T19:45:10.090Z'),
    updatedAt: new Date('2024-02-17T19:46:11.100Z'),
  },
  {
    id: 'cb2c15c3-7fc9-4d51-8b7b-3e636ac6195b',
    userName: 'Lucas Silva',
    phone: '+55 11 9988-7766',
    email: 'lucas.silva@example.com',
    role: 'provider',
    status: 'active',
    location: 'Rua Oscar Freire, 379, São Paulo, SP 01426-001',
    image: 'lucas.silva.jpg',
    rtn: '12081999021280',
    otherInformation:
      'Lucas Silva works in the agricultural business in Brazil.',
    createdAt: new Date('2024-02-18T20:47:12.110Z'),
    updatedAt: new Date('2024-02-18T20:48:13.120Z'),
  },
];
const usersStatus = [
  {
    value: 'active',
    label: 'Active',
    icon: CheckCircledIcon,
  },
  {
    value: 'inactive',
    label: 'Inactive',
    icon: CrossCircledIcon,
  },
];

export const usersRole = [
  {
    value: 'client',
    label: 'Client',
  },
  {
    value: 'provider',
    label: 'Provider',
  },
];

export const columns: ColumnDef<User, unknown>[] = [
  {
    accessorKey: 'userName',
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue('userName')}</div>
    ),
  },
  {
    accessorKey: 'phone',
  },
  {
    accessorKey: 'email',
  },
  {
    accessorKey: 'location',
  },
  {
    accessorKey: 'role',
    cell: ({ row }) => {
      const role = usersRole.find(
        (role) => role.value === row.getValue('role')
      );

      if (!role) {
        // If a value is not what you expect or does not exist you can return null.
        return null;
      }

      return <span>{role.label}</span>;
    },
  },
  {
    accessorKey: 'rtn',
  },
  {
    accessorKey: 'otherInformation',
  },
  {
    accessorKey: 'status',
    cell: ({ row }) => {
      const status = usersStatus.find(
        (status) => status.value === row.getValue('status')
      );

      if (!status) {
        return null;
      }

      return (
        <div>
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
  },
];
