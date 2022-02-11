export class Admin {
  constructor(
    public first_name: string,
    public last_name: string,
    public email: string,
    public username: string,
    public status: string,
    public avatar: string,
    public password?: string
  ) {}
}
