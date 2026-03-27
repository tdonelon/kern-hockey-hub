
create table profiles (
id uuid primary key references auth.users,
name text,
role text,
team text
);

create table events (
id uuid primary key default gen_random_uuid(),
title text,
location text,
date timestamp
);
