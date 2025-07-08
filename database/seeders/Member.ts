import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Member from 'App/Models/Member'

export default class MemberSeeder extends BaseSeeder {
  public async run() {
    await Member.createMany([
      {
        name: 'Priya D',
        email: 'priya@example.com',
        phone: '9876543210',
        role: 'Student',
      },
      {
        name: 'Ravi Kumar',
        email: 'ravi@example.com',
        phone: '9876501234',
        role: 'Staff',
      },
      {
        name: 'Admin User',
        email: 'admin@example.com',
        phone: '9000012345',
        role: 'Admin',
      },
    ])
  }
}
