INSERT INTO users (username, password, img_url) VALUES
('admin', 'admin', 'https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg'),
('dad', 'jokes', 'https://media.istockphoto.com/id/1318427049/vector/i-love-dad-typography-poster-with-flying-origami-heart-and-paper-mustache-happy-fathers-day.jpg?s=612x612&w=0&k=20&c=nWFpAOKPJeDF0WOI28LSGyoSPXGVeRGymgjqmxyv5xQ='),
('yo', 'momma', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwT0tx8DBIObFnsWxb4z5lABcgdHN9hUgxww&usqp=CAU');

INSERT INTO jokes (text, type) VALUES
('Yo mamas so stupid when they said it was chilly outside, she grabbed a bowl.', 'yoMama'),
('Yo mamas so ugly, she threw a boomerang and it refused to come back.', 'yoMama'),
('Yo mamas so old, she walked out of a museum and the alarm went off.', 'yoMama'),
('Im afraid for the calendar. Its days are numbered.', 'Dad Jokes'),
('My wife said I should do lunges to stay in shape. That would be a big step forward.', 'dadJokes'),
('How do you follow Will Smith in the snow? You follow the fresh prints.', 'dadJokes'),
('I only know 25 letters of the alphabet. I dont know y.', 'dadJokes');

INSERT INTO users_to_jokes (user_id, joke_id) VALUES
(3, 1),
(3, 2),
(3, 3),
(2, 4),
(2, 5),
(2, 6),
(2, 7);
