CREATE TABLE "koala_hola"(
"id" SERIAL PRIMARY KEY,
"name" VARCHAR (80),
"gender" VARCHAR,
"age" INT,
"ready_to_transfer" BOOLEAN DEFAULT FALSE,
"notes" VARCHAR (100)
);

INSERT INTO "public"."koala_hola"("id", "name", "gender", "age", "ready_to_transfer", "notes") VALUES(1, 'Scotty', 'M', 4, TRUE, 'Born in Guatemala') RETURNING "id", "name", "gender", "age", "ready_to_transfer", "notes";
INSERT INTO "public"."koala_hola"("id", "name", "gender", "age", "ready_to_transfer", "notes") VALUES(2, 'Jean', 'F', 5, TRUE, 'Allergic to lots of lava') RETURNING "id", "name", "gender", "age", "ready_to_transfer", "notes";
INSERT INTO "public"."koala_hola"("id", "name", "gender", "age", "ready_to_transfer", "notes") VALUES(3, 'Ororo', 'F', 7, FALSE, 'Loves listening to Paula(Abdul)') RETURNING "id", "name", "gender", "age", "ready_to_transfer", "notes";
INSERT INTO "public"."koala_hola"("id", "name", "gender", "age", "ready_to_transfer", "notes") VALUES(4, 'Logan', 'M', 15, FALSE, 'Loves the sauna') RETURNING "id", "name", "gender", "age", "ready_to_transfer", "notes";