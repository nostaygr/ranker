# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: "hoge", email: "hoge@gmail.com", password: "hogehoge", password_confirmation: "hogehoge")
User.create(name: "foo", email: "foo@gmail.com", password: "foofoofoo", password_confirmation: "foofoofoo")

Subject.create(user_id: 1, is_public: true, title: "好きな映画ベスト10")
Subject.create(user_id: 1, is_public: false, title: "嫌いな野菜ベスト5")
Subject.create(user_id: 2, is_public: false, title: "好きなたこ焼きの店ベスト3")
Subject.create(user_id: 2, is_public: true, title: "好きな肉の店ベスト3")

Item.create(subject_id: 1, rank: 1, name: "ダークナイト")
Item.create(subject_id: 1, rank: 2, name: "マッドマックス怒りのデスロード")
Item.create(subject_id: 2, rank: 1, name: "パクチー")
Item.create(subject_id: 3, rank: 1, name: "金だこ")
Item.create(subject_id: 3, rank: 2, name: "銀だこ")
Item.create(subject_id: 4, rank: 1, name: "肉肉")
Item.create(subject_id: 4, rank: 2, name: "肉肉肉")
