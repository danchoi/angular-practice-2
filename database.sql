
create table tasks (
  id serial primary key,
  title varchar,
  description text,
  priority integer default 1,
  created_at timestamp default now()
)
